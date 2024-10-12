import { useState } from "react";
import CamelRide from "./camelRide";

function ImageGallery() {
  const images = [
    "/images/three.png",
    "/images/oneimg.png",
    "/images/twoimg.png",
  ];
  const [currentImage, setCurrentImage] = useState(images[0]);

  const handleThumbnailClick = (image) => {
    setCurrentImage(image);
  };

  return (
    <>
      <div className="grid lg:grid-cols-5 grid-cols-1 md:gap-2 gap-0 mb-[21px]">
        <div className="col-span-1 class-flex-small-images">
          {images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Thumbnail ${index}`}
              className="mb-2 cursor-pointer lg:w-full sm:w-[25%] w-[50%] mx-auto h-[131px] object-cover"
              onClick={() => handleThumbnailClick(image)}
            />
          ))}
        </div>
        <div className="col-span-4">
          <div className="w-full h-[100%]">
            <img
              src={currentImage}
              alt="Large view"
              className="w-full h-[410px] max-w-full max-h-full object-cover"
            />
          </div>
        </div>
      </div>

      <CamelRide />
      <CamelRide />
    </>
  );
}

export default ImageGallery;
