import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import ImagesComp from "../components/imagesComp";
import Sidebar from "../components/sidebar";
import ImageGallery from "../components/test";

const landing = () => {
  return (
    <>
      <div className="container mx-auto pt-4">
        <h1 className="text-[25px] font-arial font-bold">
          Dubai Desert 4x4 Dune Bashing, Self-Ride 60min ATV Quad, Camel
          Ride,Shows,Dinner
        </h1>
        <div className="flex justify-start gap-1 pt-[10px]">
          <FontAwesomeIcon
            icon={faStar}
            color="gold"
            size=""
            className="w-[23px] h-[23px]"
          />
          <FontAwesomeIcon
            icon={faStar}
            color="gold"
            size=""
            className="w-[23px] h-[23px]"
          />
          <FontAwesomeIcon
            icon={faStar}
            color="gold"
            size=""
            className="w-[23px] h-[23px]"
          />
          <FontAwesomeIcon
            icon={faStar}
            color="gold"
            size=""
            className="w-[23px] h-[23px]"
          />
          <FontAwesomeIcon
            icon={faStar}
            color="gold"
            size=""
            className="w-[23px] h-[23px]"
          />

          <p className="text-[20px] font-arial font-normal text-[#545353] -mt-[2px]">
            45 Reviews
          </p>
        </div>
      </div>

      <div className="grid grid-cols-12 gap-2 container mx-auto pt-6">
        <div className="col-span-9">
          <ImagesComp />
        </div>
        <div className="col-span-3">
          <Sidebar />
        </div>
      </div>

      <ImageGallery/>
    </>
  );
};

export default landing;
