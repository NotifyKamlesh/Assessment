const ProductSearch = () => {
  return (
    <div className="w-1/3 bg-white p-[3px] px-1">
      <div className="flex justify-between items-center ">
        <div className="w-1/2 flex justify-center items-center">
          <>
            <div className="relative">
              <div className="absolute inset-y-0 start-0 flex items-center pointer-events-none z-20 ps-3">
                <svg
                  width="21"
                  height="22"
                  viewBox="0 0 21 22"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M2.52844 6.78642V5.10079C2.52844 4.65373 2.70603 4.22499 3.02215 3.90887C3.33827 3.59275 3.76701 3.41516 4.21407 3.41516H5.8997"
                    stroke="#888A8E"
                    strokeWidth="1.68563"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M14.3278 3.41516H16.0134C16.4605 3.41516 16.8893 3.59275 17.2054 3.90887C17.5215 4.22499 17.6991 4.65373 17.6991 5.10079V6.78642"
                    stroke="#888A8E"
                    strokeWidth="1.68563"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M17.6991 15.2146V16.9002C17.6991 17.3472 17.5215 17.776 17.2054 18.0921C16.8893 18.4082 16.4605 18.5858 16.0134 18.5858H14.3278"
                    stroke="#888A8E"
                    strokeWidth="1.68563"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M5.8997 18.5858H4.21407C3.76701 18.5858 3.33827 18.4082 3.02215 18.0921C2.70603 17.776 2.52844 17.3472 2.52844 16.9002V15.2146"
                    stroke="#888A8E"
                    strokeWidth="1.68563"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M10.1138 13.5289C11.5102 13.5289 12.6422 12.3969 12.6422 11.0005C12.6422 9.60407 11.5102 8.47205 10.1138 8.47205C8.71735 8.47205 7.58533 9.60407 7.58533 11.0005C7.58533 12.3969 8.71735 13.5289 10.1138 13.5289Z"
                    stroke="#888A8E"
                    strokeWidth="1.68563"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M13.4851 14.3731L11.8838 12.7717"
                    stroke="#888A8E"
                    strokeWidth="1.68563"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <input
                type="text"
                id="icon"
                name="icon"
                className="py-2 px-4  max-w-1/2 w-40 ps-9 pe-0 block  bg-transparent outline-0  border-none   text-xs  focus:z-10  focus:ring-gray-100 placeholder:text-gray-500"
                placeholder="Scan Product by..."
              />
            </div>
          </>
        </div>
        <div className="w-1/2 inset-y-0 end-0 flex items-center justify-end gap-x-4 pointer-events-none z-20 pe-2">
          <span className="text-black bg-[#D9D9D980]  px-[2px] py-[2px] flex justify-start items-center ">
            <div href="#" className="text-xs font-medium ml-3 mr-1 text-nowrap">
              Design No
            </div>
            <svg
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M4.4278 6.64528L8.85553 11.073L13.2833 6.64528"
                stroke="#4B5563"
                strokeWidth="1.29142"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
          <svg
            width="2"
            height="48"
            viewBox="0 0 2 48"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <line
              x1="1.21875"
              y1="-2.18557e-08"
              x2="1.21875"
              y2="48"
              stroke="#E7E8E8"
            />
          </svg>

          <div className="flex justify-center items-center">
            <svg
              width="22"
              height="22"
              viewBox="0 0 22 22"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10.6152 18C12.4718 18 14.2522 17.2625 15.565 15.9497C16.8777 14.637 17.6152 12.8565 17.6152 11C17.6152 9.14348 16.8777 7.36301 15.565 6.05025C14.2522 4.7375 12.4718 4 10.6152 4C8.75872 4 6.97824 4.7375 5.66549 6.05025C4.35273 7.36301 3.61523 9.14348 3.61523 11C3.61523 12.8565 4.35273 14.637 5.66549 15.9497C6.97824 17.2625 8.75872 18 10.6152 18Z"
                stroke="#5F677A"
                strokeWidth="1.42188"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M10.6152 12.75C11.0794 12.75 11.5245 12.5656 11.8527 12.2374C12.1809 11.9092 12.3652 11.4641 12.3652 11C12.3652 10.5359 12.1809 10.0908 11.8527 9.76256C11.5245 9.43437 11.0794 9.25 10.6152 9.25C10.1511 9.25 9.70599 9.43437 9.3778 9.76256C9.04961 10.0908 8.86523 10.5359 8.86523 11C8.86523 11.4641 9.04961 11.9092 9.3778 12.2374C9.70599 12.5656 10.1511 12.75 10.6152 12.75Z"
                stroke="#5F677A"
                strokeWidth="1.42188"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M10.6152 2.25V4"
                stroke="#5F677A"
                strokeWidth="1.42188"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M10.6152 19.75V18"
                stroke="#5F677A"
                strokeWidth="1.42188"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M14.9902 18.5772L14.1152 17.0635"
                stroke="#5F677A"
                strokeWidth="1.42188"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M9.74023 9.48611L6.24023 3.42236"
                stroke="#5F677A"
                strokeWidth="1.42188"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M18.1927 15.375L16.679 14.5"
                stroke="#5F677A"
                strokeWidth="1.42188"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M3.03784 6.625L4.55159 7.5"
                stroke="#5F677A"
                strokeWidth="1.42188"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M12.3652 11H19.3652"
                stroke="#5F677A"
                strokeWidth="1.42188"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M1.86523 11H3.61523"
                stroke="#5F677A"
                strokeWidth="1.42188"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M18.1927 6.625L16.679 7.5"
                stroke="#5F677A"
                strokeWidth="1.42188"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M3.03784 15.375L4.55159 14.5"
                stroke="#5F677A"
                strokeWidth="1.42188"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M14.9902 3.42236L14.1152 4.93611"
                stroke="#5F677A"
                strokeWidth="1.42188"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M9.74023 12.5142L6.24023 18.5779"
                stroke="#5F677A"
                strokeWidth="1.42188"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductSearch;
