const CartDetails = () => {
  return (
    <>
      {/* main container  */}
      <div className=" bg-white  mr-[10px] ml-3 w-[20%]">

        {/* location & dispatch details */}
        <div className="">

          {/* Company Name */}
          <div className="bg-[#EDEEF1] m-[12px] h-[42.65px] ">
            <div className="flex items-center">
              <div className="ml-3 mt-2">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 17"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 14.5C12 13.0855 11.4381 11.729 10.4379 10.7288C9.43769 9.72857 8.08113 9.16667 6.66665 9.16667C5.25216 9.16667 3.8956 9.72857 2.89541 10.7288C1.89522 11.729 1.33331 13.0855 1.33331 14.5"
                    stroke="#0F172A"
                    strokeWidth="1.16667"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M6.66665 9.16667C8.5076 9.16667 9.99998 7.67428 9.99998 5.83333C9.99998 3.99238 8.5076 2.5 6.66665 2.5C4.8257 2.5 3.33331 3.99238 3.33331 5.83333C3.33331 7.67428 4.8257 9.16667 6.66665 9.16667Z"
                    stroke="#0F172A"
                    strokeWidth="1.16667"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M14.6667 13.8328C14.6667 11.5861 13.3333 9.49948 12 8.49948C12.4383 8.17066 12.7888 7.73887 13.0204 7.24232C13.252 6.74578 13.3577 6.19979 13.328 5.65268C13.2984 5.10557 13.1343 4.5742 12.8503 4.10561C12.5664 3.63702 12.1713 3.24565 11.7 2.96614"
                    stroke="#0F172A"
                    strokeWidth="1.16667"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <div>
                <p className="font-normal text-[10px] text-[#888A8E] ml-2 mt-1">
                  Customer
                </p>
              </div>
            </div>
            <p className="font-medium text-[12px] ml-9">SRG India Pvt Ltd</p>
          </div>

          {/* Delivery Location */}
          <div className="bg-[#EDEEF1] m-[12px] h-[42.65px] ">
            <div className="flex items-center">
              <div className="ml-2 mt-2">
                <svg
                  width="20"
                  height="8"
                  viewBox="0 0 20 8"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <line
                    x1="1.05987"
                    y1="3.83564"
                    x2="15.5271"
                    y2="3.83564"
                    stroke="#0F172A"
                    strokeWidth="1.3756"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <circle
                    cx="16.2149"
                    cy="3.80588"
                    r="3.48166"
                    fill="#0F172A"
                  />
                </svg>
              </div>
              <div>
                <p className="font-normal text-[10px] text-[#888A8E] ml-2 mt-2">
                  Delievery Location
                </p>
              </div>
            </div>
            <p className="font-medium text-[12px] ml-9">Gurugram-017838</p>
          </div>

          {/* Dispatch Location */}
          <div className="bg-[#EDEEF1] m-[12px] h-[42.65px] ">
            <div className="flex items-center">
              <div className="ml-2 mt-2">
                <svg
                  width="20"
                  height="8"
                  viewBox="0 0 20 8"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <line
                    x1="0.6878"
                    y1="-0.6878"
                    x2="15.155"
                    y2="-0.6878"
                    transform="matrix(-1 -8.74228e-08 -8.74228e-08 1 19.6963 5.17578)"
                    stroke="#0F172A"
                    strokeWidth="1.3756"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <circle
                    cx="3.48166"
                    cy="3.48166"
                    r="3.48166"
                    transform="matrix(-1 0 0 1 7.33514 0.976562)"
                    fill="#0F172A"
                  />
                </svg>
              </div>
              <div>
                <p className="font-normal text-[10px] text-[#888A8E] ml-2 mt-2">
                  Dispatch Location
                </p>
              </div>
            </div>
            <div>
              <p className="font-medium text-[12px] ml-9">Gurugram-017838</p>
            </div>
          </div>

          {/* Show More */}
          <div className="bg-[#EDEEF1] m-[12px] ">
            <div className=" text-[#888A8E] h-[20px] text-[12px] text-center ">
              Show More
            </div>
          </div>
        </div>

        <hr className="mt-[10px] mx-2" />

        {/* Summery  */}
        <div className="mt-2 ">
          <div className="font-medium mb-[15px] ml-[12px]">Summury</div>
          <div className="font-medium text-center text-[13px] bg-[#D9D9D9] opacity-[50%] m-[15px]">
            #SO_DRAFT_00000017_2024
          </div>
          <div className="flex justify-between m-[12px]">
            <p className="font-normal text-[11px] text-[#7E8084] ">
              Total Quantity
            </p>
            <p className="font-normal text-[11px] text-[#7E8084] ">21</p>
          </div>
          <div className="flex justify-between m-[12px]">
            <p className="font-normal text-[11px] text-[#7E8084] ">
              Total Items
            </p>
            <p className="font-normal text-[11px] text-[#7E8084] ">7</p>
          </div>
          <div className="flex justify-between m-[12px]">
            <p className="font-normal text-[11px] text-[#7E8084] ">
              Order Quantity
            </p>
            <p className="font-normal text-[11px] text-[#7E8084] ">21</p>
          </div>
          <div className="text-center bg-[#F7F8FB] flex justify-between items-center p-4 h-[42.65px] m-[12px] rounded-sm">
            <p className="text-[11px] font-normal rounded-sm">
              Total Bag Price
            </p>
            <p className="text-[13px] font-medium">₹ 23031.808</p>
          </div>
        </div>

        <hr className="mt-[10px] mx-2" />

        {/* Price Breakup */}
        <div className=" mt-2">
          <div className="font-medium mb-[12px] ml-[12px]">PRICE BREAKUP</div>

          <div className="flex justify-between m-[12px]">
            <p className="font-normal text-[11px] text-[#7E8084] ">IGST</p>
            <p className="font-normal text-[11px] text-[#7E8084] ">₹ 230.80</p>
          </div>
          <div className="flex justify-between m-[12px]">
            <p className="font-normal text-[11px] text-[#7E8084] ">CGST</p>
            <p className="font-normal text-[11px] text-[#7E8084] ">₹ 230.80</p>
          </div>
          <div className="flex justify-between m-[12px]">
            <p className="font-normal text-[11px] text-[#7E8084] ">SGST</p>
            <p className="font-normal text-[11px] text-[#7E8084] ">₹ 230.80</p>
          </div>
          <div className="flex justify-between m-[12px]">
            <p className="font-normal text-[11px] text-[#7E8084] ">CESS</p>
            <p className="font-normal text-[11px] text-[#7E8084] ">₹ 0.00</p>
          </div>
          <div className="text-center bg-[#EDEEF1] flex justify-between items-center p-4 h-[42.65px] m-[12px] rounded-sm">
            <div className="flex justify-start gap-x-2 items-center w-2/3">
              <svg
                width="17"
                height="18"
                viewBox="0 0 17 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2.66896 6.61146C2.56778 6.1557 2.58332 5.68178 2.71413 5.23362C2.84494 4.78547 3.08678 4.3776 3.41724 4.04783C3.74771 3.71806 4.15608 3.47707 4.60451 3.3472C5.05294 3.21733 5.5269 3.20278 5.98244 3.30491C6.23318 2.91277 6.57859 2.59006 6.98685 2.36652C7.39511 2.14299 7.85306 2.02582 8.31851 2.02582C8.78396 2.02582 9.24192 2.14299 9.65018 2.36652C10.0584 2.59006 10.4039 2.91277 10.6546 3.30491C11.1108 3.20234 11.5856 3.21682 12.0347 3.347C12.4839 3.47719 12.8928 3.71885 13.2235 4.04951C13.5541 4.38018 13.7958 4.7891 13.926 5.23824C14.0562 5.68738 14.0706 6.16215 13.9681 6.61839C14.3602 6.86913 14.6829 7.21455 14.9065 7.6228C15.13 8.03106 15.2472 8.48902 15.2472 8.95447C15.2472 9.41992 15.13 9.87787 14.9065 10.2861C14.6829 10.6944 14.3602 11.0398 13.9681 11.2905C14.0702 11.7461 14.0557 12.22 13.9258 12.6685C13.7959 13.1169 13.5549 13.5253 13.2252 13.8557C12.8954 14.1862 12.4875 14.428 12.0394 14.5589C11.5912 14.6897 11.1173 14.7052 10.6615 14.604C10.4111 14.9977 10.0654 15.3218 9.65647 15.5463C9.24752 15.7708 8.78852 15.8885 8.32198 15.8885C7.85544 15.8885 7.39644 15.7708 6.98749 15.5463C6.57854 15.3218 6.23285 14.9977 5.98244 14.604C5.5269 14.7062 5.05294 14.6916 4.60451 14.5617C4.15608 14.4319 3.74771 14.1909 3.41724 13.8611C3.08678 13.5313 2.84494 13.1235 2.71413 12.6753C2.58332 12.2272 2.56778 11.7532 2.66896 11.2975C2.27381 11.0474 1.94832 10.7014 1.72278 10.2918C1.49724 9.88214 1.37897 9.4221 1.37897 8.95447C1.37897 8.48683 1.49724 8.02679 1.72278 7.61714C1.94832 7.20749 2.27381 6.86154 2.66896 6.61146Z"
                  stroke="#52924C"
                  strokeWidth="1.21309"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M10.3979 6.87549L6.23877 11.0347"
                  stroke="#52924C"
                  strokeWidth="1.21309"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M6.23877 6.87549H6.24612"
                  stroke="#52924C"
                  strokeWidth="1.21309"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M10.3979 11.0347H10.4053"
                  stroke="#52924C"
                  strokeWidth="1.21309"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <p className="text-[11px] font-medium text-[#52924C] ">
                Discount
              </p>
            </div>
            <p className="text-[13px] font-medium text-[#52924C]">₹ 690.00</p>
          </div>
          <div className="text-center bg-[#EDEEF1] flex justify-between items-center p-4 h-[42.65px] m-[12px] rounded-sm">
            <p className="text-[11px] font-normal">Total Amount</p>
            <p className="text-[13px] font-medium">₹ 23031.808</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default CartDetails;
