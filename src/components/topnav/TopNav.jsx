const TopNav = () => {
  return (
    <>
      <header className=" sticky top-0 bg-white flex flex-wrap sm:justify-start sm:flex-nowrap z-50 w-full  border-b border-[#F3F6F9] text-sm py-1 sm:py-2">
        <nav
          className=" flex basis-full items-center w-full mx-auto px-4 sm:px-8 "
          aria-label="Global"
        >
          <div className="w-full flex items-center justify-end ms-auto sm:justify-between sm:gap-x-3 sm:order-3">
            <div className="sm:hidden">
              <button
                type="button"
                className="w-[2.375rem] h-[2.375rem] inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-full text-black hover:bg-white/20 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:ring-1 focus:ring-gray-600"
              >
                <svg
                  className="flex-shrink-0 size-4"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="11" cy="11" r="8" />
                  <path d="m21 21-4.3-4.3" />
                </svg>
              </button>
            </div>

            <div className="hidden  sm:block">
              
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
                  className="py-2 px-4 ps-9 pe-20 block w-92 md:w-96 bg-transparent outline-0  border-[#dae4ee] border shadow-sm  text-xs  focus:z-10  focus:ring-gray-100 placeholder:text-gray-500"
                  placeholder="Search POs, ASNs, & Pages etc"
                />
                <div className="absolute inset-y-0 end-0 flex items-center pointer-events-none z-20 pe-2">
                  <span className="text-gray-500 bg-gray-900 rounded-md px-2 py-[2px] flex justify-between items-center">
                    <span>
                      <svg
                        width="12"
                        height="12"
                        viewBox="0 0 12 12"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M0.851375 0.843562C1.28926 0.405672 1.88317 0.159668 2.50244 0.159668C3.12171 0.159668 3.71562 0.405672 4.15351 0.843562C4.5914 1.28145 4.8374 1.87536 4.8374 2.49463V3.66211H7.17236V2.49463C7.17236 1.87536 7.41837 1.28145 7.85626 0.843562C8.29415 0.405672 8.88805 0.159668 9.50732 0.159668C10.1266 0.159668 10.7205 0.405672 11.1584 0.843562C11.5963 1.28145 11.8423 1.87536 11.8423 2.49463C11.8423 3.1139 11.5963 3.70781 11.1584 4.1457C10.7205 4.58359 10.1266 4.82959 9.50732 4.82959H8.33984V7.16455H9.50732C10.1266 7.16455 10.7205 7.41055 11.1584 7.84844C11.5963 8.28634 11.8423 8.88024 11.8423 9.49951C11.8423 10.1188 11.5963 10.7127 11.1584 11.1506C10.7205 11.5885 10.1266 11.8345 9.50732 11.8345C8.88805 11.8345 8.29415 11.5885 7.85626 11.1506C7.41837 10.7127 7.17236 10.1188 7.17236 9.49951V8.33203H4.8374V9.49951C4.8374 10.1188 4.5914 10.7127 4.15351 11.1506C3.71562 11.5885 3.12171 11.8345 2.50244 11.8345C1.88317 11.8345 1.28926 11.5885 0.851375 11.1506C0.413485 10.7127 0.16748 10.1188 0.16748 9.49951C0.16748 8.88024 0.413485 8.28633 0.851375 7.84844C1.28926 7.41055 1.88317 7.16455 2.50244 7.16455H3.66992V4.82959H2.50244C1.88317 4.82959 1.28926 4.58359 0.851375 4.1457C0.413485 3.70781 0.16748 3.1139 0.16748 2.49463C0.16748 1.87536 0.413485 1.28145 0.851375 0.843562ZM3.66992 3.66211V2.49463C3.66992 2.18499 3.54692 1.88804 3.32798 1.6691C3.10903 1.45015 2.81208 1.32715 2.50244 1.32715C2.19281 1.32715 1.89585 1.45015 1.67691 1.6691C1.45796 1.88804 1.33496 2.18499 1.33496 2.49463C1.33496 2.80426 1.45796 3.10122 1.67691 3.32016C1.89585 3.53911 2.19281 3.66211 2.50244 3.66211H3.66992ZM4.8374 4.82959V7.16455H7.17236V4.82959H4.8374ZM3.66992 8.33203H2.50244C2.19281 8.33203 1.89585 8.45503 1.67691 8.67398C1.45796 8.89292 1.33496 9.18988 1.33496 9.49951C1.33496 9.80915 1.45796 10.1061 1.67691 10.325C1.89585 10.544 2.19281 10.667 2.50244 10.667C2.81208 10.667 3.10903 10.544 3.32798 10.325C3.54692 10.1061 3.66992 9.80915 3.66992 9.49951V8.33203ZM8.33984 8.33203V9.49951C8.33984 9.80915 8.46285 10.1061 8.68179 10.325C8.90074 10.544 9.19769 10.667 9.50732 10.667C9.81696 10.667 10.1139 10.544 10.3329 10.325C10.5518 10.1061 10.6748 9.80915 10.6748 9.49951C10.6748 9.18988 10.5518 8.89292 10.3329 8.67398C10.1139 8.45503 9.81696 8.33203 9.50732 8.33203H8.33984ZM8.33984 3.66211H9.50732C9.81696 3.66211 10.1139 3.53911 10.3329 3.32016C10.5518 3.10122 10.6748 2.80426 10.6748 2.49463C10.6748 2.18499 10.5518 1.88804 10.3329 1.6691C10.1139 1.45015 9.81696 1.32715 9.50732 1.32715C9.19769 1.32715 8.90074 1.45015 8.68179 1.6691C8.46285 1.88804 8.33984 2.18499 8.33984 2.49463V3.66211Z"
                          fill="#67768E"
                        />
                      </svg>
                    </span>
                    +K &nbsp;/ &nbsp;
                    <span>
                      <svg
                        width="12"
                        height="12"
                        viewBox="0 0 12 12"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M0.851375 0.843562C1.28926 0.405672 1.88317 0.159668 2.50244 0.159668C3.12171 0.159668 3.71562 0.405672 4.15351 0.843562C4.5914 1.28145 4.8374 1.87536 4.8374 2.49463V3.66211H7.17236V2.49463C7.17236 1.87536 7.41837 1.28145 7.85626 0.843562C8.29415 0.405672 8.88805 0.159668 9.50732 0.159668C10.1266 0.159668 10.7205 0.405672 11.1584 0.843562C11.5963 1.28145 11.8423 1.87536 11.8423 2.49463C11.8423 3.1139 11.5963 3.70781 11.1584 4.1457C10.7205 4.58359 10.1266 4.82959 9.50732 4.82959H8.33984V7.16455H9.50732C10.1266 7.16455 10.7205 7.41055 11.1584 7.84844C11.5963 8.28634 11.8423 8.88024 11.8423 9.49951C11.8423 10.1188 11.5963 10.7127 11.1584 11.1506C10.7205 11.5885 10.1266 11.8345 9.50732 11.8345C8.88805 11.8345 8.29415 11.5885 7.85626 11.1506C7.41837 10.7127 7.17236 10.1188 7.17236 9.49951V8.33203H4.8374V9.49951C4.8374 10.1188 4.5914 10.7127 4.15351 11.1506C3.71562 11.5885 3.12171 11.8345 2.50244 11.8345C1.88317 11.8345 1.28926 11.5885 0.851375 11.1506C0.413485 10.7127 0.16748 10.1188 0.16748 9.49951C0.16748 8.88024 0.413485 8.28633 0.851375 7.84844C1.28926 7.41055 1.88317 7.16455 2.50244 7.16455H3.66992V4.82959H2.50244C1.88317 4.82959 1.28926 4.58359 0.851375 4.1457C0.413485 3.70781 0.16748 3.1139 0.16748 2.49463C0.16748 1.87536 0.413485 1.28145 0.851375 0.843562ZM3.66992 3.66211V2.49463C3.66992 2.18499 3.54692 1.88804 3.32798 1.6691C3.10903 1.45015 2.81208 1.32715 2.50244 1.32715C2.19281 1.32715 1.89585 1.45015 1.67691 1.6691C1.45796 1.88804 1.33496 2.18499 1.33496 2.49463C1.33496 2.80426 1.45796 3.10122 1.67691 3.32016C1.89585 3.53911 2.19281 3.66211 2.50244 3.66211H3.66992ZM4.8374 4.82959V7.16455H7.17236V4.82959H4.8374ZM3.66992 8.33203H2.50244C2.19281 8.33203 1.89585 8.45503 1.67691 8.67398C1.45796 8.89292 1.33496 9.18988 1.33496 9.49951C1.33496 9.80915 1.45796 10.1061 1.67691 10.325C1.89585 10.544 2.19281 10.667 2.50244 10.667C2.81208 10.667 3.10903 10.544 3.32798 10.325C3.54692 10.1061 3.66992 9.80915 3.66992 9.49951V8.33203ZM8.33984 8.33203V9.49951C8.33984 9.80915 8.46285 10.1061 8.68179 10.325C8.90074 10.544 9.19769 10.667 9.50732 10.667C9.81696 10.667 10.1139 10.544 10.3329 10.325C10.5518 10.1061 10.6748 9.80915 10.6748 9.49951C10.6748 9.18988 10.5518 8.89292 10.3329 8.67398C10.1139 8.45503 9.81696 8.33203 9.50732 8.33203H8.33984ZM8.33984 3.66211H9.50732C9.81696 3.66211 10.1139 3.53911 10.3329 3.32016C10.5518 3.10122 10.6748 2.80426 10.6748 2.49463C10.6748 2.18499 10.5518 1.88804 10.3329 1.6691C10.1139 1.45015 9.81696 1.32715 9.50732 1.32715C9.19769 1.32715 8.90074 1.45015 8.68179 1.6691C8.46285 1.88804 8.33984 2.18499 8.33984 2.49463V3.66211Z"
                          fill="#67768E"
                        />
                      </svg>
                    </span>
                    +Shift+K
                  </span>
                </div>
              </div>
            </div>

            <div className="flex flex-row items-center justify-end gap-2">
              <button
                type="button"
                className="w-[2.375rem] h-[2.375rem] inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-full text-black hover:bg-white/20 disabled:opacity-50 disabled:pointer-events-none focus:outline-none  focus:ring-gray-600"
              >
                <svg
                  width="25"
                  height="25"
                  viewBox="0 0 25 25"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clipPath="url(#clip0_1_104)">
                    <path
                      d="M12.4988 22.9168C6.7457 22.9168 2.08215 18.2532 2.08215 12.5001C2.08215 6.74696 6.7457 2.08342 12.4988 2.08342C18.2519 2.08342 22.9155 6.74696 22.9155 12.5001C22.9155 18.2532 18.2519 22.9168 12.4988 22.9168ZM12.4988 20.8334C14.709 20.8334 16.8286 19.9554 18.3914 18.3926C19.9542 16.8298 20.8322 14.7102 20.8322 12.5001C20.8322 10.2899 19.9542 8.17033 18.3914 6.60753C16.8286 5.04473 14.709 4.16675 12.4988 4.16675C10.2887 4.16675 8.16907 5.04473 6.60626 6.60753C5.04346 8.17033 4.16549 10.2899 4.16549 12.5001C4.16549 14.7102 5.04346 16.8298 6.60626 18.3926C8.16907 19.9554 10.2887 20.8334 12.4988 20.8334ZM11.4572 15.6251H13.5405V17.7084H11.4572V15.6251ZM13.5405 13.9115V14.5834H11.4572V13.0209C11.4572 12.7447 11.5669 12.4797 11.7622 12.2844C11.9576 12.089 12.2226 11.9793 12.4988 11.9793C12.7947 11.9792 13.0846 11.8952 13.3346 11.7369C13.5846 11.5786 13.7845 11.3525 13.9111 11.0851C14.0377 10.8176 14.0857 10.5197 14.0495 10.226C14.0134 9.93226 13.8946 9.65486 13.707 9.42604C13.5194 9.19721 13.2706 9.02637 12.9897 8.93339C12.7087 8.84041 12.4072 8.82911 12.1201 8.90082C11.833 8.97253 11.5722 9.12428 11.368 9.33844C11.1637 9.55259 11.0245 9.82033 10.9665 10.1105L8.92278 9.70113C9.04948 9.06788 9.34206 8.47964 9.77061 7.99653C10.1992 7.51342 10.7483 7.15278 11.3619 6.95146C11.9755 6.75015 12.6316 6.71538 13.2631 6.85073C13.8945 6.98607 14.4787 7.28666 14.9559 7.72178C15.4331 8.15689 15.7862 8.71093 15.9791 9.32724C16.1721 9.94355 16.1978 10.6 16.0539 11.2296C15.9099 11.8591 15.6014 12.4391 15.1598 12.9104C14.7182 13.3816 14.1594 13.7271 13.5405 13.9115Z"
                      fill="#67768E"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_1_104">
                      <rect
                        width="25"
                        height="25"
                        fill="white"
                        transform="translate(-0.000488281)"
                      />
                    </clipPath>
                  </defs>
                </svg>
              </button>
              <button
                type="button"
                className="w-[2.375rem] h-[2.375rem] inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-full text-black hover:bg-white/20 disabled:opacity-50 disabled:pointer-events-none focus:outline-none  focus:ring-gray-600"
              >
                <svg
                  width="23"
                  height="20"
                  viewBox="0 0 23 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M11.9768 19.9998C12.2204 19.9998 12.454 19.9031 12.6263 19.7308C12.7985 19.5586 12.8954 19.3248 12.8954 19.0813V9.32611L14.6931 11.1238C14.9251 11.356 15.2634 11.4466 15.5805 11.3617C15.8974 11.2767 16.1451 11.029 16.23 10.7121C16.315 10.3951 16.2243 10.0568 15.9922 9.82477L12.6275 6.46011C12.5851 6.41709 12.5386 6.37846 12.4886 6.34459L12.4439 6.32098C12.4077 6.29828 12.37 6.27814 12.331 6.26056L12.2654 6.23951V6.23969C12.2303 6.22688 12.1942 6.21644 12.1578 6.2082C12.0382 6.18385 11.9152 6.18385 11.7957 6.2082C11.7581 6.21717 11.7213 6.22852 11.6855 6.24225L11.625 6.26056C11.587 6.2774 11.5502 6.29663 11.5148 6.31841L11.4676 6.34459C11.4196 6.377 11.3748 6.41398 11.3338 6.4548L7.96124 9.82476C7.72672 10.0567 7.63409 10.3963 7.71776 10.7152C7.8016 11.0343 8.04911 11.2844 8.36727 11.3713C8.68545 11.4585 9.02598 11.369 9.26031 11.137L11.0606 9.3367L11.0608 19.0816C11.0608 19.3247 11.1571 19.5579 11.3288 19.7302C11.5006 19.9023 11.7336 19.9995 11.9767 20.0001L11.9768 19.9998Z"
                    fill="#67768E"
                  />
                  <path
                    d="M3.45284 15.8846H8.23742C8.56548 15.8846 8.86884 15.7096 9.03288 15.4255C9.19709 15.1412 9.19709 14.7911 9.03288 14.5068C8.86884 14.2227 8.56549 14.0475 8.23742 14.0475H3.45284C3.09055 14.0475 2.79672 13.7538 2.79672 13.3914V3.44447C2.79672 3.08199 3.09055 2.78834 3.45284 2.78834H20.5121C20.6862 2.78834 20.853 2.85736 20.9762 2.98057C21.0992 3.10359 21.1683 3.27037 21.1683 3.44447V13.3914C21.1683 13.5655 21.0992 13.7322 20.9762 13.8554C20.853 13.9785 20.6862 14.0475 20.5121 14.0475H15.7224C15.3944 14.0475 15.091 14.2227 14.927 14.5068C14.7627 14.7911 14.7627 15.1411 14.927 15.4255C15.091 15.7096 15.3943 15.8846 15.7224 15.8846H20.507C21.168 15.8841 21.8017 15.6212 22.2693 15.1536C22.7366 14.6862 22.9995 14.0524 23.0003 13.3913V3.44445C22.9995 2.78341 22.7366 2.14959 22.2693 1.68219C21.8017 1.21481 21.1681 0.951734 20.507 0.951172H3.44769C2.78697 0.952453 2.15395 1.21571 1.68711 1.68308C1.22028 2.15046 0.957781 2.78369 0.957031 3.44441V13.3913C0.957764 14.0529 1.22102 14.687 1.68894 15.1544C2.15687 15.622 2.79137 15.8845 3.45284 15.8845V15.8846Z"
                    fill="#67768E"
                  />
                </svg>
              </button>
              <button
                type="button"
                className="w-[2.375rem] h-[2.375rem] inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-full text-black hover:bg-white/20 disabled:opacity-50 disabled:pointer-events-none focus:outline-none  focus:ring-gray-600"
              >
                <span className="absolute ml-6 mb-5 text-white text-[11px] rounded-[3px] px-[5px] bg-[#5D5FEF]">
                  20
                </span>
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clipPath="url(#clip0_1_91)">
                    <path
                      d="M20.9995 8V20.993C21.0004 21.1243 20.9755 21.2545 20.9261 21.3762C20.8767 21.4979 20.8038 21.6087 20.7116 21.7022C20.6194 21.7957 20.5096 21.8701 20.3887 21.9212C20.2677 21.9723 20.1378 21.9991 20.0065 22H3.99251C3.72932 22 3.4769 21.8955 3.29071 21.7095C3.10451 21.5235 2.99978 21.2712 2.99951 21.008V2.992C2.99951 2.455 3.44851 2 4.00151 2H14.9965L20.9995 8ZM18.9995 9H13.9995V4H4.99951V20H18.9995V9ZM7.99951 7H10.9995V9H7.99951V7ZM7.99951 11H15.9995V13H7.99951V11ZM7.99951 15H15.9995V17H7.99951V15Z"
                      fill="#67768E"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_1_91">
                      <rect
                        width="24"
                        height="24"
                        fill="white"
                        transform="translate(-0.000488281)"
                      />
                    </clipPath>
                  </defs>
                </svg>
              </button>

              <button
                type="button"
                className="w-[2.375rem] h-[2.375rem] inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-full text-black hover:bg-white/20 disabled:opacity-50 disabled:pointer-events-none focus:outline-none  focus:ring-gray-600"
              >
                <span className="absolute ml-6 mb-5 text-white text-[11px] rounded-[3px] px-[5px] bg-[#5D5FEF]">
                  120
                </span>
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clipPath="url(#clip0_1_98)">
                    <path
                      d="M4.99951 18H18.9995V11.031C18.9995 7.148 15.8655 4 11.9995 4C8.13351 4 4.99951 7.148 4.99951 11.031V18ZM11.9995 2C16.9695 2 20.9995 6.043 20.9995 11.031V20H2.99951V11.031C2.99951 6.043 7.02951 2 11.9995 2ZM9.49951 21H14.4995C14.4995 21.663 14.2361 22.2989 13.7673 22.7678C13.2984 23.2366 12.6626 23.5 11.9995 23.5C11.3365 23.5 10.7006 23.2366 10.2317 22.7678C9.7629 22.2989 9.49951 21.663 9.49951 21Z"
                      fill="#67768E"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_1_98">
                      <rect
                        width="24"
                        height="24"
                        fill="white"
                        transform="translate(-0.000488281)"
                      />
                    </clipPath>
                  </defs>
                </svg>
              </button>
              <svg
                width="1"
                height="17"
                viewBox="0 0 1 17"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <line
                  x1="0.5"
                  y1="2.18557e-08"
                  x2="0.499999"
                  y2="17"
                  stroke="#B7C6DE"
                />
              </svg>
              <div className="hs-dropdown relative flex  justify-between content-center ps-3 gap-x-4">
                <div className="flex justify-center items-center p-2  rounded-md bg-gray-700 ">
                  <svg
                    width="21"
                    height="21"
                    viewBox="0 0 21 21"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M10.298 20.1613C12.9146 20.1613 15.4239 19.1217 17.2738 17.2716C19.1238 15.4216 20.1634 12.9122 20.1634 10.2959C20.1634 7.67956 19.1238 5.17 17.2738 3.32017C15.4237 1.47011 12.9144 0.430542 10.298 0.430542C7.6817 0.430542 5.17214 1.47011 3.32231 3.32017C1.47225 5.17023 0.432678 7.67956 0.432678 10.2959C0.432678 12.9122 1.47225 15.4218 3.32231 17.2716C5.17237 19.1217 7.6817 20.1613 10.298 20.1613ZM5.52442 16.6605C6.14266 15.5013 7.16137 14.6069 8.39075 14.1436C9.62012 13.6805 10.976 13.6805 12.2054 14.1436C13.4348 14.6069 14.4535 15.5013 15.0717 16.6605C13.6956 17.6959 12.0203 18.2557 10.2981 18.2557C8.5759 18.2557 6.90053 17.6958 5.52442 16.6605ZM8.0704 9.65919C8.0704 9.06828 8.30504 8.50176 8.7228 8.08395C9.14058 7.66617 9.70707 7.43156 10.298 7.43156C10.889 7.43156 11.4555 7.6662 11.8733 8.08395C12.2911 8.50173 12.5257 9.06823 12.5257 9.65919C12.5257 10.2499 12.291 10.8166 11.8733 11.2344C11.4555 11.6522 10.889 11.8868 10.298 11.8868C9.70707 11.8868 9.1406 11.6522 8.7228 11.2344C8.30502 10.8166 8.0704 10.2499 8.0704 9.65919ZM10.298 2.33965C12.3095 2.34164 14.2456 3.10553 15.7165 4.4776C17.1877 5.84973 18.0843 7.72792 18.2261 9.73449C18.3682 11.7408 17.7446 13.7267 16.4815 15.2922C15.7074 14.0739 14.5917 13.1109 13.2736 12.5233C14.029 11.7397 14.445 10.6899 14.4317 9.60151C14.4184 8.51312 13.9766 7.47395 13.2023 6.70904C12.428 5.94407 11.3833 5.51518 10.295 5.51518C9.20635 5.51518 8.1619 5.94406 7.38761 6.70904C6.61309 7.47401 6.17136 8.51312 6.158 9.60151C6.14468 10.6899 6.56069 11.7397 7.31612 12.5233C5.99775 13.1078 4.88316 14.0717 4.11461 15.2922C2.85148 13.7267 2.22796 11.7408 2.37003 9.73449C2.51188 7.72792 3.40846 5.84973 4.87958 4.4776C6.35048 3.10547 8.28658 2.34164 10.298 2.33965Z"
                      fill="white"
                    />
                  </svg>
                </div>
                <div className="flex justify-center content-center flex-col">
                  <div>
                    <p className="text-gray-600 font-semibold text-sm flex justify-between items-center gap-x-2">
                      Vmart-Procurement Team
                      <div>
                        <svg
                          width="10"
                          height="5"
                          viewBox="0 0 10 5"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M5 5L0.5 0.5L9.5 0.5L5 5Z" fill="#8496A9" />
                        </svg>
                      </div>
                    </p>
                    <p className="text-gray-600 text-xs">Asish Kumar Singal</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </header>
      <main id="content" className="w-full">
        <nav
          className=" -top-px bg-white text-sm font-medium text-black ring-1 ring-gray-900 ring-opacity-5 border-t shadow-sm shadow-gray-100 py-1 sm:py-3 -mt-px"
          aria-label="Jump links"
        >
          <div className=" flex-wrap snap-x w-full flex justify-between items-center overflow-x-auto px-4 sm:px-6 lg:px-8 pb-4 md:pb-0 mx-auto [&::-webkit-scrollbar]:h-2 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-thumb]:bg-gray-300">
            <nav className="flex" aria-label="Breadcrumb">
              <ol className="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse">
                <li className="inline-flex items-center">
                  <svg
                    width="16"
                    height="17"
                    viewBox="0 0 16 17"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clipPath="url(#clip0_1_135)">
                      <path
                        d="M2 6.85938L8 2.19271L14 6.85938V14.1927C14 14.5463 13.8595 14.8855 13.6095 15.1355C13.3594 15.3856 13.0203 15.526 12.6667 15.526H3.33333C2.97971 15.526 2.64057 15.3856 2.39052 15.1355C2.14048 14.8855 2 14.5463 2 14.1927V6.85938Z"
                        stroke="#4B5563"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M6 15.526V8.85938H10V15.526"
                        stroke="#4B5563"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_1_135">
                        <rect
                          width="16"
                          height="16"
                          fill="white"
                          transform="translate(0 0.859375)"
                        />
                      </clipPath>
                    </defs>
                  </svg>
                  <a
                    href="#"
                    className="inline-flex items-center text-xs font-medium  text-[#4B5563] ml-3"
                  >
                    Home
                  </a>
                </li>
                <p>/</p>
                <li>
                  <div className="flex items-center justify-between border-4 border-[1px] rounded-[8px] p-2">
                    <a href="#" className="text-[#4B5563] text-xs font-medium ml-3 mr-1">
                      Sales Order
                    </a>
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
                  </div>
                </li>
                <li aria-current="page">
                  <div className="flex items-center">
                    /<span className=" font-bold ml-3 text-xs">Product Catalogue</span>
                  </div>
                </li>
              </ol>
            </nav>
            <button type="button" className="bg-[#5D5FEF] uppercase px-10 py-[6px] text-white">Place Order</button>
          </div>
        </nav>
      </main>
    </>
  );
};

export default TopNav;