import { useState } from "react";
import Example from "./example";
import { Link } from "react-router-dom";

const Navbar = () => {

    const [open, setOpen] = useState(false);
    const handleOnClose = () => setOpen(false);




  return (
    <>
      <div className="bg-[#18546E] pt-4 pb-4">
        <div className="flex justify-between items-center px-6">
          <div>
            <Link to="/">
            {/* <img src={} alt="" /> */}
            <h2 className="font-arial text-[20px] text-white w-[130px] h-[46px]">
              LOGO
            </h2>
            </Link>
          </div>
          <div className="gap-[27px] flex justify-start class-hide-nav">
            <a
              href="/selling"
              className="text-[14px] font-medium font-poppins text-white"
            >
              Top Selling
            </a>
            <a
              href="/activities"
              className="text-[14px] font-medium font-poppins text-white"
            >
              Activities
            </a>
            <a
              href="/burj"
              className="text-[14px] font-medium font-poppins text-white"
            >
              Burj Khalifa
            </a>
            <a
              href="/desert"
              className="text-[14px] font-medium font-poppins text-white"
            >
              Desert Safari
            </a>

            <p className="text-white -mt-1">|</p>

            <a
              href=""
              className="text-[14px] font-medium font-poppins text-white"
            >
              Login
            </a>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="size-5 text-white cursor-pointer"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
              />
            </svg>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="size-5 text-white cursor-pointer"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6.75 2.994v2.25m10.5-2.25v2.25m-14.252 13.5V7.491a2.25 2.25 0 0 1 2.25-2.25h13.5a2.25 2.25 0 0 1 2.25 2.25v11.251m-18 0a2.25 2.25 0 0 0 2.25 2.25h13.5a2.25 2.25 0 0 0 2.25-2.25m-18 0v-7.5a2.25 2.25 0 0 1 2.25-2.25h13.5a2.25 2.25 0 0 1 2.25 2.25v7.5m-6.75-6h2.25m-9 2.25h4.5m.002-2.25h.005v.006H12v-.006Zm-.001 4.5h.006v.006h-.006v-.005Zm-2.25.001h.005v.006H9.75v-.006Zm-2.25 0h.005v.005h-.006v-.005Zm6.75-2.247h.005v.005h-.005v-.005Zm0 2.247h.006v.006h-.006v-.006Zm2.25-2.248h.006V15H16.5v-.005Z"
              />
            </svg>
          </div>

          <div className="flex class-hide-example justify-end mt-">
              <svg
                onClick={() => setOpen(true)}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-8 h-8 rounded-md text-white"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
            </div>

            <Example open={open} setOpen={handleOnClose} />
        </div>
      </div>
    </>
  );
};

export default Navbar;
