import Tick from "../../public/images/tick.png";
import Time from "../../public/images/time.png";
import Watch from "../../public/images/watch.png";
import Flag from "../../public/images/flag.png";
import Head from "../../public/images/head.png";
import Calendar from "../../public/images/calendar.png";
import Man from "../../public/images/man.png";
import SVG from "../../public/images/SVG.png";

const Sidebar = () => {
  return (
    <>

    <div className="grid lg:grid-cols-4 md:grid-cols-1 grid-cols-4 ">
      <div className="class-drop p-4 mb-2 col-span-4">
        <h3 className="text-[22px] font-inter font-bold mb-[30px]">
          About this activity
        </h3>
        <div className="flex justify start gap-3 mb-[13px]">
          <div>
            <div className="w-[24px] h-[24px]">
              <img src={Tick} alt="" className="w-full h-auto" />
            </div>
          </div>
          <div>
            <p className="text-[14px] text-[#1A2B49] font-inter font-normal">
              Free cancellation
            </p>
            <div>
              <p className="text-[12px] text-[#63687A] font-inter font-normal">
                Cancel up to 24 hours in advance for a full refund
              </p>
            </div>
          </div>
        </div>
        <div className="flex justify start gap-3 mb-[13px]">
          <div>
            <div className="w-[24px] h-[24px]">
              <img src={Time} alt="" className="w-full h-auto" />
            </div>
          </div>
          <div>
            <p className="text-[14px] text-[#1A2B49] font-inter font-normal">
              Reserve now & pay later
            </p>
            <div>
              <p className="text-[12px] text-[#63687A] font-inter font-normal">
                Keep your travel plans flexible — book your spot and pay nothing
                today.
              </p>
            </div>
          </div>
        </div>
        <div className="flex justify start gap-3 mb-[13px]">
          <div>
            <div className="w-[24px] h-[24px]">
              <img src={Watch} alt="" className="w-full h-auto" />
            </div>
          </div>
          <div>
            <p className="text-[14px] text-[#1A2B49] font-inter font-normal">
              Duration 1 - 3 hours
            </p>
            <div>
              <p className="text-[12px] text-[#63687A] font-inter font-normal">
                Check availability to see starting times.
              </p>
            </div>
          </div>
        </div>
        <div className="flex justify start gap-3 mb-[13px]">
          <div>
            <div className="w-[24px] h-[24px]">
              <img src={Flag} alt="" className="w-full h-auto" />
            </div>
          </div>
          <div>
            <p className="text-[14px] text-[#1A2B49] font-inter font-normal">
              Host or greeter
            </p>
            <div>
              <p className="text-[12px] text-[#63687A] font-inter font-normal">
                English
              </p>
            </div>
          </div>
        </div>
        <div className="flex justify start gap-3 mb-[13px]">
          <div>
            <div className="w-[24px] h-[24px]">
              <img src={Head} alt="" className="w-full h-auto" />
            </div>
          </div>
          <div>
            <p className="text-[14px] text-[#1A2B49] font-inter font-normal">
              Audio guide included
            </p>
            <div>
              <p className="text-[12px] text-[#63687A] font-inter font-normal">
                English
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="class-drop p-4 mb-2 col-span-4">
        <p className="text-[14px] font-arial font-normal mb-[1px]">
          Starting from
        </p>
        <p className="text-[21px] font-arial font-bold mb-[28px]">AED 69.00</p>

        <button className="w-full h-[40px] bg-[#18546E] mb-[28px] text-[13px] font-bold font-arial text-white rounded-[5px]">
          Check Availability
        </button>

        <p className="text-[#000000] text-[18px] font-bold font-arial mb-[15px]">
          Select Date and Travelers
        </p>

        <div className="w-full h-[40px] border-class mb-[7px]">
          <div className="flex justify-start pl-4 pt-2 items-center gap-3">
            <div className="w-[13px] h-[13px]">
              <img src={Calendar} alt="" className="w-full h-auto -mt-[1px]" />
            </div>
            <div>
              <p className="text-[14px] font-arial font-normal text-[#000000]">
                Thursday, Dec 7, 2023
              </p>
            </div>
          </div>
        </div>
        <div className="w-full h-[40px] border-class mb-[22px]">
          <div className="flex justify-start pl-4 pt-2 items-center gap-3">
            <div className="w-[13px] h-[13px]">
              <img src={Man} alt="" className="w-full h-auto -mt-[1px]" />
            </div>
            <div>
              <p className="text-[14px] font-arial font-normal text-[#000000]">
                2 Adults, 0 Child, 0 Infant
              </p>
            </div>
          </div>
        </div>

        <div className="flex justify-start  pt-2 items-center gap-3">
          <img src={SVG} alt="" className="w-[20px] h-[20px] -mt-[41px]" />
          <div>
            <p className="text-[14px] font-arial font-normal text-[#000000]">
              <span className="underline text-[#239506]">
                Free cancellation
              </span>{" "}
              {""}
              up to 24 hours before the experience starts (local time)
            </p>
          </div>
        </div>
      </div>

      <div className="class-drop p-4 mb-3 col-span-4">
        <h3 className="text-[20px] font-poppins font-medium mb-4 text-[#000000]">
          Why Travel with us?
        </h3>
        <div className="flex justify-start gap-2 mb-3">
          <p className=" text-black -mt-2">.</p>
          <span className="text-[14px] font-normal font-poppins text-[#000000]">
            Trusted platform used by 100K+ people, each month{" "}
          </span>
        </div>

        <div className="flex justify-start gap-2 mb-3">
          <p className=" text-black -mt-2">.</p>
          <span className="text-[14px] font-normal font-poppins text-[#000000]">
          Get the lowest prices and last minute availability
          </span>
        </div>

        <div className="flex justify-start gap-2 mb-3">
          <p className=" text-black -mt-2">.</p>
          <span className="text-[14px] font-normal font-poppins text-[#000000]">
          Discover and connect with 10,000+ experiences
          </span>
        </div>

        <div className="flex justify-start gap-2 mb-3">
          <p className=" text-black -mt-2">.</p>
          <span className="text-[14px] font-normal font-poppins text-[#000000]">
          Browse verified reviews and professional photographs
          </span>
        </div>

        <div className="flex justify-start gap-2 mb-3">
          <p className=" text-black -mt-2">.</p>
          <span className="text-[14px] font-normal font-poppins text-[#000000]">
          Have a question? Live chat with our experts 24/7
          </span>
        </div>
      </div>
      </div>
    </>
  );
};

export default Sidebar;
