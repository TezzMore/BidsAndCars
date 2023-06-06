


import React, { useState, useCallback, useEffect } from 'react';
import { isMobile } from 'react-device-detect';
import styled from 'styled-components';
import Gallery from 'react-photo-gallery';
import Carousel, { Modal, ModalGateway } from 'react-images';
import AlternateHeader from './AlternateHeader';

// Galleries
import { album1 } from '../constants/album1';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  overflow: hidden;
  padding: 2rem;

  @media only screen and (max-width: 900px) {
    padding: 0.5rem;
  }
`;

const ContentContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex: 1;
  overflow-y: auto;
`;

const BigImageContainer = styled.div`
  flex: 2;
  padding-right: 1rem;
`;

const SmallImagesContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;

const SmallImage = styled.img`
  width: 100%;
  margin-bottom: 1rem;
`;

const OthersContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: center;
`;

const OthersButton = styled.button`
  background: transparent;
  border: none;
  margin-left: 0.5rem;
  font-size: 14px;
  color: #888;
  cursor: pointer;
`;

const HeaderContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 10000; /* Increase the z-index value */
`;


const ImageGallery = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const [viewerIsOpen, setViewerIsOpen] = useState(false);
  const [showAlternateHeader, setShowAlternateHeader] = useState(false);
  const [showOthers, setShowOthers] = useState(false); // Add this line
  const [windowHeight, setWindowHeight] = useState(window.innerHeight);

  const openLightbox = useCallback((event, { photo, index }) => {
    setCurrentImage(index);
    setViewerIsOpen(true);
    setShowAlternateHeader(true);
  }, []);

  const closeLightbox = () => {
    setCurrentImage(0);
    setViewerIsOpen(false);
    setShowAlternateHeader(false);
  };

  const bigImage = album1[0];

  const smallImages = album1.slice(1, 4);
  const otherImages = album1.slice(4);

  const toggleOthers = () => {
    setShowOthers(!showOthers);
  };

  const handleResize = () => {
    setWindowHeight(window.innerHeight);
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <Container>
      {showAlternateHeader && (
        <HeaderContainer>
          <AlternateHeader />
        </HeaderContainer>
      )}

      <ContentContainer style={{ maxHeight: windowHeight - 80 }}>
        <BigImageContainer>
          <h2>
            <em>1987 Porsche 944 S Coupe</em>
          </h2>
          <p>
            <em>5-Speed Manual, Recent Engine Rebuild, Mostly Unmodified, Reviewed by Doug DeMuro</em>
          </p>
          <br />
          <h3>
            <em>Berlin</em>
          </h3>
          <Gallery
            onClick={openLightbox}
            photos={[bigImage]}
            margin={isMobile ? 4 : 10}
            direction="column"
            targetRowHeight={600}
            columns={1}
          />
        </BigImageContainer>

        <SmallImagesContainer>
          {smallImages.map((image, index) => (
            <SmallImage
              key={image.src}
              src={image.src}
              alt=""
              onClick={(e) => openLightbox(e, { photo: image, index: index + 1 })}
            />
          ))}
          {!showOthers && otherImages.length > 0 && (
            <OthersContainer>
              <OthersButton onClick={toggleOthers}>+ {otherImages.length} others</OthersButton>
            </OthersContainer>
          )}
          {showOthers && (
            <>
              {otherImages.map((image, index) => (
                <SmallImage
                  key={image.src}
                  src={image.src}
                  alt=""
                  onClick={(e) => openLightbox(e, { photo: image, index: index + 4 })}
                />
              ))}
              <OthersContainer>
                <OthersButton onClick={toggleOthers}>- Show less</OthersButton>
              </OthersContainer>
            </>
          )}
        </SmallImagesContainer>
      </ContentContainer>

      <ModalGateway>
        {viewerIsOpen && (
          <Modal onClose={closeLightbox}>
            <Carousel
              currentIndex={currentImage}
              views={album1.map((photo) => ({
                ...photo,
                srcset: photo.srcSet,
                caption: photo.title,
              }))}
            />
          </Modal>
        )}
      </ModalGateway>
    </Container>
  );
};

export default ImageGallery;



