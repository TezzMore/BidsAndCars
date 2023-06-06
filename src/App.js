import React, { useState } from 'react';
import './App.css';
import ImageGallery from './components/ImageGallery';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarComp from './components/NavbarComp';
import AlternateHeader from './components/AlternateHeader';

function App() {
  const [showAlternateHeader, setShowAlternateHeader] = useState(false);

  const handleImageClick = () => {
    setShowAlternateHeader(true);
  };

  return (
    <React.Fragment>
      {showAlternateHeader ? (
        <AlternateHeader />
      ) : (
        <NavbarComp onImageClick={handleImageClick} />
      )}
      <ImageGallery />
    </React.Fragment>
  );
}

export default App;
