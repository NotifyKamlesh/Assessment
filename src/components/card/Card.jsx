import { useState } from "react";

const Card = () => {
  const [isChecked, setIsChecked] = useState(false);

  const handleImageClick = () => {
    setIsChecked((prevChecked) => !prevChecked);
  };
  return (
    <div className=" w-[200px] max-w-[250px] item-bg pb-3">
      <div className="h-[181px] w-full flex justify-between ">
        <div className="overflow-hidden">
          <img
            onClick={handleImageClick}
            className="w-[600px] object-bottom"
            src="https://s3-alpha-sig.figma.com/img/7a2a/c555/9f4e7ca15ba80c943ae17ba66e5c738f?Expires=1714953600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Nzf8Tte9iDW69Vms7sIuTg7GgpaBhvm8aJOWekVc5d0ar6GfpW8zDj~u7LpWdX~HtpJTAj~ewmXIMHiN7I6bR73wQw9hcagBsPFZmvX0AJe5nSk-7eaJghNFaCXG3IiUZJcVPbn-IYOpcrAcJh6Hy3x~4grFxFWBGxTqU5Mx43ckdlQ~zH4ifVyLYwIP1zi34Ec~~-LMUHVv6dzuLYNKheBr7nwfl0BADUS57JoC7rB~5tXRG8O7r4OFUQ8u9BzhyBwM3K4UpXfbelhd2kLwvGQwljz5hTNkJQnHPSstFc4vpP0QJkxLUDSfETXB8oWNY76AUQU6pDAuwZi0vcZzkA__"
            alt=""
          />
        </div>
        <div className="absolute ml-2 mt-2">
          <input
            className="h-5 w-5 rounded-full shadow"
            type="checkbox"
            checked={isChecked}
            onChange={() => setIsChecked(!isChecked)}
          />
        </div>
        <div className="bg-black text-white px-1  absolute ml-[9rem] mt-2 rounded-sm">
          <p className="text-xs ">10% Off</p>
        </div>
      </div>

      <div className="flex justify-start mt-[10px] ml-4 mr-6 gap-x-3">
        <div className=" border-[#FC9D03] border-2 rounded-sm text-[8px] font-medium px-1 flex justify-between items-center text-nowrap">
          <div className="h-2 w-2 bg-yellow-400 rounded-full mr-1"></div>
          Masturd Yellow
        </div>
        <div className=" border-[#E3E4E7] border-2 text-nowrap text-[9px] font-medium px-1">
          Multiplier : 5
        </div>
      </div>
      <div className=" w-[180px] ml-4 mr-4 mt-2">
        <div className="text-[#74767A] text-[9px]">Item Name</div>
        <div className="font-medium text-[12px] pr-5 mb-1">
          Mens white check Shirt regular fit
        </div>
        <div className="text-[#74767A] text-[9px]">Design Number</div>
        <div className="font-normal text-[11px] mb-3">DN098234839</div>
        <div className="flex mb-3">
          <div className="bg-[#E3E4E7] rounded-sm px-1 py-[2px] text-[12px] font-medium items-center ">
            XL
          </div>
          <div className="ml-2 bg-[#E3E4E7] rounded-sm px-1  py-[2px] text-[12px] font-medium items-center ">
            In stock : 100
          </div>
        </div>
        <div className="flex justify-start items-center">
          <div className="font-medium text-[12px] pr-5 mb-1">₹ 799.67</div>
          <div className=" ont-medium text-[12px] pr-5 mb-1">₹ 799.67</div>
        </div>
        <div className="flex justify-between items-center gap-x-3 mt-2">
          <div className="border-2  border-[#DAE4EE] px-2 py-2">
            <svg
              width="14"
              height="14"
              viewBox="0 0 14 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1.75 3.5H12.25"
                stroke="#0F172A"
                strokeWidth="1.02083"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M11.0833 3.5V11.6667C11.0833 12.25 10.5 12.8333 9.91666 12.8333H4.08332C3.49999 12.8333 2.91666 12.25 2.91666 11.6667V3.5"
                stroke="#0F172A"
                strokeWidth="1.02083"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M4.66666 3.49999V2.33332C4.66666 1.74999 5.24999 1.16666 5.83332 1.16666H8.16666C8.74999 1.16666 9.33332 1.74999 9.33332 2.33332V3.49999"
                stroke="#0F172A"
                strokeWidth="1.02083"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>

          <div className="flex justify-between items-center bg-[#D9D9D9]  w-full px-2">
            <div className="flex justify-between items-center "> 
              <span className="text-sm">
                XL
              </span>
              <span className="bg-white rounded-md px-1 ml-2 text-[10px] ">
                +5 More
              </span>
            </div>
            <div className="border-gray-300  flex items-center justify-center gap-x-2">
              <svg
                width="1"
                height="30"
                viewBox="0 0 1 30"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <line
                  x1="0.5"
                  y1="2.18557e-08"
                  x2="0.499999"
                  y2="30"
                  stroke="#DDDEDE"
                />
              </svg>

              <svg
                width="12"
                height="12"
                viewBox="0 0 12 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_1_510)">
                  <path
                    d="M8.5 1.50081C8.62734 1.35032 8.78485 1.22784 8.96251 1.14115C9.14016 1.05446 9.33405 1.00547 9.53182 0.997314C9.72959 0.989153 9.92691 1.022 10.1112 1.09375C10.2955 1.1655 10.4627 1.27459 10.6022 1.41407C10.7416 1.55354 10.8503 1.72034 10.9213 1.90383C10.9922 2.08732 11.0239 2.28347 11.0143 2.4798C11.0047 2.67612 10.954 2.8683 10.8654 3.04409C10.7769 3.21988 10.6524 3.37542 10.5 3.50081L3.75 10.2508L1 11.0008L1.75 8.25081L8.5 1.50081Z"
                    stroke="black"
                    strokeWidth="0.875"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M7.5 2.5L9.5 4.5"
                    stroke="black"
                    strokeWidth="0.875"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_1_510">
                    <rect width="12" height="12" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
