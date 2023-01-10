import React from 'react';
import './App.css';
import ImageGallery from "./components/ImageGallery";
import Credits from "./components/Credits";

function App() {
  return (
    <React.Fragment>
      <ImageGallery />
      <Credits />
    </React.Fragment>
  );
}

export default App;
