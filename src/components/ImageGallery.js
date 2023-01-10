import React, { useState, useCallback } from "react";
import styled from "styled-components";
import Gallery from "react-photo-gallery";
import Carousel, { Modal, ModalGateway } from "react-images";

// Galleries
import { album1 } from "../constants/album1";
// import { album2 } from "../constants/album2";

const Container = styled.div`
    margin: 3rem 8rem;
    @media only screen and (max-width: 900px) {
        margin: .5rem;
    }
`;

const StyledCarousel = styled(Carousel)`
    max-width: 100px;
`;

const ImageGallery = () => {
    const [currentImage, setCurrentImage] = useState(0);
    const [viewerIsOpen, setViewerIsOpen] = useState(false);

  const openLightbox = useCallback((event, { photo, index }) => {
    setCurrentImage(index);
    setViewerIsOpen(true);
  }, []);

  const closeLightbox = () => {
    setCurrentImage(0);
    setViewerIsOpen(false);
  };

  return (
    <Container>
        <h2><em>Masonry Image Gallery</em></h2>
        <p><em>A basic masonry gallery built with:
            <br />
            <a href="https://www.npmjs.com/package/react-images" rel="noreferrer" target="_blank"
            >
                react-images
            </a>
            , <a href="https://www.npmjs.com/package/react-photo-gallery" rel="noreferrer" target="_blank" >
                react-photo-gallery
            </a> and <a href="https://imagekit.io/" rel="noreferrer" target="_blank"
            >
                imagekit.io
            </a>.
        </em></p>
        <br />
        <h3><em>Berlin</em></h3>
        <Gallery onClick={openLightbox} photos={album1} direction={"column"} columns={ 4 } />
        <ModalGateway>
        {viewerIsOpen ? (
          <Modal onClose={closeLightbox}>
            <StyledCarousel
              currentIndex={currentImage}
              views={album1.map(x => ({
                ...x,
                srcset: x.srcSet,
                caption: x.title
              }))}
            />
            {/* </IKContext> */}
          </Modal>
        ) : null }
      </ModalGateway>
    </Container>
  )
}

export default ImageGallery;