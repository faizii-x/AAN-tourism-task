import Desert from "../../public/images/desertimg.png";
import Star1 from "../../public/images/star1.png";
import Star2 from "../../public/images/star2.png";
import Star3 from "../../public/images/star3.png";
import Star4 from "../../public/images/star4.png";
import Star5 from "../../public/images/star5.png";
import Tick from "../../public/images/tick.png";
import Time from "../../public/images/time.png";
import Watch from "../../public/images/watch.png";
import Flag from "../../public/images/flag.png";

const CamelRide = () => {
  return (
    <>
      <div className="grid lg:grid-cols-3 grid-cols-2 border border-[#CDCDCD] p-3 w-full">
        <div className="col-span-2 lg:border-r-2 border-r-0">
          <div className="lg:flex grid justify-start gap-[11px] class-flex-desert-img">
            <div className="w-[231px] mx-auto">
              <img src={Desert} alt="" className="w-full h-auto" />
            </div>
            <div>
              <h2 className="text-[18px] font-bold font-arial text-[#000000] mb-[5px] pt-[20px]">
                Camel Ride,Shows,Dinner
              </h2>
              <div className="flex justify-start gap-3 mb-[12px]">
                <div className="flex justify-start gap-1">
                  <div className="w-full h-auto">
                    <img src={Star1} alt="" className="w-[15px] h-[15px]" />
                  </div>
                  <div className="w-full h-auto">
                    <img src={Star2} alt="" className="w-[15px] h-[15px]" />
                  </div>
                  <div className="w-full h-auto">
                    <img src={Star3} alt="" className="w-[15px] h-[15px]" />
                  </div>
                  <div className="w-full h-auto">
                    <img src={Star4} alt="" className="w-[15px] h-[15px]" />
                  </div>
                  <div className="w-full h-auto">
                    <img src={Star5} alt="" className="w-[15px] h-[15px]" />
                  </div>
                </div>
              </div>
              <div className="flex justify-start gap-2 mb-3">
                <p className=" text-black -mt-2">.</p>
                <span className="text-[14px] font-normal font-poppins text-[#000000]">
                  Get yourself tickets to the award-winning Dubai Frame – the
                  world's largest picture frame and admire unbeaten views of the
                  city.
                </span>
              </div>

              <div className="flex justify-start gap-2 mb-3">
                <p className=" text-black -mt-2">.</p>
                <span className="text-[14px] font-normal font-poppins text-[#000000]">
                  On one side, you'll notice iconic landmarks of modern Dubai,
                  and on the other, you'll see older parts of the city.
                </span>
              </div>

              <div className="flex justify-start gap-2 mb-3">
                <p className=" text-black -mt-2">.</p>
                <span className="text-[14px] font-normal font-poppins text-[#000000]">
                  On one side, you'll notice iconic landmarks of modern Dubai,
                  and on the other, you'll see older parts of the city.
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-1 sm:p-6 p-0">
          <div className="flex justify start gap-[9px] mb-[9px]">
            <div className="w-[24px] h-[24px]">
              <img src={Tick} alt="" className="w-full h-auto" />
            </div>
            <p>Free cancellation</p>
          </div>
          <div className="flex justify start gap-[9px] mb-[9px]">
            <div className="w-[24px] h-[24px]">
              <img src={Time} alt="" className="w-full h-auto" />
            </div>
            <p>Reserve now & pay later</p>
          </div>

          <div className="flex justify start gap-[9px] mb-[9px]">
            <div className="w-[24px] h-[24px]">
              <img src={Watch} alt="" className="w-full h-auto" />
            </div>
            <p>Duration 1 - 3 hours</p>
          </div>
          <div className="flex justify start gap-[9px] mb-[27px]">
            <div className="w-[24px] h-[24px]">
              <img src={Flag} alt="" className="w-full h-auto" />
            </div>
            <p>Host or greeter</p>
          </div>
          <p className="text-[16px] font-arial font-normal mb-[1px]">
            Starting from
          </p>
          <p className="text-[21px] font-arial font-bold mb-[15px]">
            AED 69.00
          </p>

          <button className="w-full h-[40px] bg-[#18546E] text-[13px] font-bold font-arial text-white rounded-[5px]">
            Check Availability
          </button>
        </div>
      </div>
    </>
  );
};

export default CamelRide;
