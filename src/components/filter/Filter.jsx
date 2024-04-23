const Filter = () => {
  return (
    <div className="w-2/3 bg-white p-2">
      <div className="flex justify-between items-center ">
        <div className="w-1/2 flex justify-center items-center gap-x-3">
          <div className="w-2/3">
            <div className="relative">
              <div className="absolute inset-y-0 start-0 flex items-center pointer-events-none z-20 ps-3">
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 14 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M6.33333 0.333336C9.64533 0.333336 12.3333 3.02134 12.3333 6.33334C12.3333 9.64534 9.64533 12.3333 6.33333 12.3333C3.02133 12.3333 0.333328 9.64534 0.333328 6.33334C0.333328 3.02134 3.02133 0.333336 6.33333 0.333336ZM6.33333 11C8.91133 11 11 8.91134 11 6.33334C11 3.75467 8.91133 1.66667 6.33333 1.66667C3.75466 1.66667 1.66666 3.75467 1.66666 6.33334C1.66666 8.91134 3.75466 11 6.33333 11ZM11.99 11.0473L13.876 12.9327L12.9327 13.876L11.0473 11.99L11.99 11.0473Z"
                    fill="#67768E"
                  />
                </svg>
              </div>
              <input
                type="text"
                id="icon"
                name="icon"
                className="py-2 px-4 ps-9 pe-10 block  bg-transparent outline-0  border-[#dae4ee] border shadow-sm  text-sm  focus:z-10  focus:ring-gray-100 placeholder:text-gray-500"
                placeholder="Search Product"
              />
            </div>
          </div>
          <div className="w-1/3 flex bg-[#F4F4F4] h-[40px] justify-evenly items-center ml-5">
            <div className=" items-center ">
              <svg
                width="20"
                height="19"
                viewBox="0 0 20 19"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="h-[30px] w-[30px] p-1 bg-[#0F172A]"
              >
                <path
                  d="M7.48535 2.375H3.52702C3.08979 2.375 2.73535 2.72944 2.73535 3.16667V7.125C2.73535 7.56223 3.08979 7.91667 3.52702 7.91667H7.48535C7.92258 7.91667 8.27702 7.56223 8.27702 7.125V3.16667C8.27702 2.72944 7.92258 2.375 7.48535 2.375Z"
                  stroke="white"
                  strokeWidth="1.40535"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M16.1937 2.375H12.2354C11.7981 2.375 11.4437 2.72944 11.4437 3.16667V7.125C11.4437 7.56223 11.7981 7.91667 12.2354 7.91667H16.1937C16.6309 7.91667 16.9854 7.56223 16.9854 7.125V3.16667C16.9854 2.72944 16.6309 2.375 16.1937 2.375Z"
                  stroke="white"
                  strokeWidth="1.40535"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M16.1937 11.0833H12.2354C11.7981 11.0833 11.4437 11.4378 11.4437 11.875V15.8333C11.4437 16.2706 11.7981 16.625 12.2354 16.625H16.1937C16.6309 16.625 16.9854 16.2706 16.9854 15.8333V11.875C16.9854 11.4378 16.6309 11.0833 16.1937 11.0833Z"
                  stroke="white"
                  strokeWidth="1.40535"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M7.48535 11.0833H3.52702C3.08979 11.0833 2.73535 11.4378 2.73535 11.875V15.8333C2.73535 16.2706 3.08979 16.625 3.52702 16.625H7.48535C7.92258 16.625 8.27702 16.2706 8.27702 15.8333V11.875C8.27702 11.4378 7.92258 11.0833 7.48535 11.0833Z"
                  stroke="white"
                  strokeWidth="1.40535"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <div>
              <svg
                width="19"
                height="19"
                viewBox="0 0 19 19"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M15.0417 2.375H3.95833C3.08388 2.375 2.375 3.08388 2.375 3.95833V15.0417C2.375 15.9161 3.08388 16.625 3.95833 16.625H15.0417C15.9161 16.625 16.625 15.9161 16.625 15.0417V3.95833C16.625 3.08388 15.9161 2.375 15.0417 2.375Z"
                  stroke="#0F172A"
                  strokeWidth="1.45128"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M16.625 5.9375H2.375"
                  stroke="#0F172A"
                  strokeWidth="1.45128"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M16.625 9.5H2.375"
                  stroke="#0F172A"
                  strokeWidth="1.45128"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M16.625 13.0625H2.375"
                  stroke="#0F172A"
                  strokeWidth="1.45128"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <div>
              <svg
                width="19"
                height="19"
                viewBox="0 0 19 19"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M11.875 2.375V16.625"
                  stroke="#0F172A"
                  strokeWidth="1.38542"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M15.0417 2.375H3.95833C3.08388 2.375 2.375 3.08388 2.375 3.95833V15.0417C2.375 15.9161 3.08388 16.625 3.95833 16.625H15.0417C15.9161 16.625 16.625 15.9161 16.625 15.0417V3.95833C16.625 3.08388 15.9161 2.375 15.0417 2.375Z"
                  stroke="#0F172A"
                  strokeWidth="1.38542"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M16.625 7.125H2.375"
                  stroke="#0F172A"
                  strokeWidth="1.38542"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M16.625 11.875H2.375"
                  stroke="#0F172A"
                  strokeWidth="1.38542"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center gap-x-3">
          <div className="border-2  border-gray-400 px-3 py-1 text-xs font-medium">
            Add Marks
          </div>
          <div className="border-2  border-gray-400 px-3 py-1 text-xs font-normal">
            Show By : <span className="font-xs font-bold">Sizes</span>
          </div>
          <div className="border-2  border-gray-400 px-1 py-1">
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M3.33334 8H12.6667"
                stroke="#0F172A"
                strokeWidth="1.16667"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M8 3.33333V12.6667"
                stroke="#0F172A"
                strokeWidth="1.16667"
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

export default Filter;
