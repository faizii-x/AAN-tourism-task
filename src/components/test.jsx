import { useState } from "react";
import CamelRide from "./camelRide";

function ImageGallery() {
  const images = [
    "/images/three.png",
    "/images/oneimg.png",
    "/images/twoimg.png",
    "/images/three.png",
  ];
  const [currentImage, setCurrentImage] = useState(images[0]);

  const handleThumbnailClick = (image) => {
    setCurrentImage(image);
  };

  return (
    <>
    <div className="grid grid-cols-12 mb-[21px]">
      <div className="col-span-3 ">
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Thumbnail ${index}`}
            className="mb-2 cursor-pointer h-[110px]"
            onClick={() => handleThumbnailClick(image)}
          />
        ))}
      </div>
      <div className="col-span-9">
        <div className="w-full h-[100%]">
          <img
            src={currentImage}
            alt="Large view"
            className="w-full h-[410px]"
          />
        </div>
      </div>
    </div>
    
      <CamelRide />
      </>
  );
}

export default ImageGallery;
