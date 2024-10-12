import { useState } from "react";

function ImageGallery() {
  const images = [
    "../../public/images/three.jpg",
    "../../public/images/oneimg.jpg",
    "../../public/images/twoimg.jpg",
    "../../public/images/three.jpg",
  ];
  const [currentImage, setCurrentImage] = useState(images[0]);

  const handleThumbnailClick = (image) => {
    setCurrentImage(image);
  };

  return (
    <div className="image-gallery">
      <div className="thumbnail-container">
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Thumbnail ${index}`}
            className="thumbnail"
            onClick={() => handleThumbnailClick(image)}
          />
        ))}
      </div>
      <div className="large-image-container">
        <img src={currentImage} alt="Large view" className="large-image" />
      </div>
    </div>
  );
}

export default ImageGallery;
