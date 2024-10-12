
import Sidebar from "../components/sidebar";
import ImageGallery from "../components/test";
import Star1 from "../../public/images/star1.png";
import Star2 from "../../public/images/star2.png";
import Star3 from "../../public/images/star3.png";
import Star4 from "../../public/images/star4.png";
import Star5 from "../../public/images/star5.png";

const landing = () => {
  return (
    <>
      <div className="container mx-auto pt-4">
        <h1 className="text-[25px] font-arial font-bold">
          Dubai Desert 4x4 Dune Bashing, Self-Ride 60min ATV Quad, Camel
          Ride,Shows,Dinner
        </h1>
        <div className="flex justify-start gap-3 pt-[10px] mb-6">
          <div className="flex justify-start gap-1">
            <div className="w-full h-auto">
              <img src={Star1} alt="" className="w-[23px] h-[23px]" />
            </div>
            <div className="w-full h-auto">
              <img src={Star2} alt="" className="w-[23px] h-[23px]" />
            </div>
            <div className="w-full h-auto">
              <img src={Star3} alt="" className="w-[23px] h-[23px]" />
            </div>
            <div className="w-full h-auto">
              <img src={Star4} alt="" className="w-[23px] h-[23px]" />
            </div>
            <div className="w-full h-auto">
              <img src={Star5} alt="" className="w-[23px] h-[23px]" />
            </div>
          </div>

          <div>
            <p className="text-[20px] font-arial font-normal text-[#545353] -mt-[2px]">
              45 Reviews
            </p>
          </div>
        </div>
      </div>

      <div className="grid lg:grid-cols-12 grid-cols-9 sm:gap-3 gap-0 container mx-auto">
        <div className="col-span-9">
          <ImageGallery />
        </div>
        <div className="col-span-12 lg:col-span-3 md:col-span-6 sm:col-span-6">
          <Sidebar />
        </div>
      </div>


    </>
  );
};

export default landing;
