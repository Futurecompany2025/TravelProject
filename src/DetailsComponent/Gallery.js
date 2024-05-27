import React from 'react';
const Gallery = ({ images }) => {
  return (
    <div>
      <h2>Gallery</h2>
      <div className="image-gallery">
        {images.map((imageUrl, index) => (
          <img key={index} src={imageUrl} alt={`Image ${index}`} />
        ))}
      </div>
    </div>
  );
};
export default Gallery;
