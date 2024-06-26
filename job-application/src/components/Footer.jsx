import map_pin from "/Footer/map-pin5.svg"
import callImg from "/Footer/call.svg"
import mailImg from "/Footer/mail1.svg"
const Footer = () => {
  return (
    <>
    <footer className="bg-black overflow-hidden">
        <div className="px-4 py-2 xl:max-w-[1380px] mx-auto">
            <div className="md:grid gap-8 md:grid-cols-12 pt-16 pb-14">
                {/* 1st */}
                <div className="md:col-span-12 lg:col-span-4 xl:col-span-4 mb-10 xl:mb-0 xl:pr-10">
                    {/* upper text */}
                    <h3 className="text-[24px] text-white font-bold leading-4 mb-8">About Company</h3>
                    <p className="text-gray-400 text-[18px] font-normal leading-6 mb-6 ">
                        Lorem ipsum dolor sit amet consectetur
                        <br className="hidden xl:inline"/>  
                        adipisicing elit. Distinctio obcaecati blan 
                        <br className="hidden xl:inline"/> 
                        ditiis omnis sit accusantium iure quis a 
                        <br className="hidden xl:inline"/>  
                        excepturi quasi Dummy text.
                    </p>
                    {/* last icon and text */}
                    <div className="text-[18px] text-white font-normal leading-6 mb-6 flex gap-4 items-center">
                        <div className="mb-[-7px]">
                            <span className="border-box inline-block overflow-hidden opacity-1 border-0 m-0 p-0 bg-none relative max-w-[100%]">
                                <img src={map_pin} alt="map_pin5" />
                            </span>
                        </div>
                        Company Location here -Lorem
                        <br  className="hidden xl:inline"/>
                        Ipsum is simple Dummy Text
                    </div>
                    <a className="text-[18px] text-white font-normal leading-6 mb-6 flex gap-4 items-center" href="#">
                    <div className="mb-[-7px]">
                            <span className="border-box inline-block overflow-hidden opacity-1 border-0 m-0 p-0 bg-none relative max-w-[100%]">
                                <img src={callImg} alt="callImg" />
                            </span>
                        </div>
                        1-202-555-0106
                    </a>
                    <a className="text-[18px] text-white font-normal leading-6 mb-6 flex gap-4 items-center" href="#">
                    <div className="mb-[-7px]">
                            <span className="border-box inline-block overflow-hidden opacity-1 border-0 m-0 p-0 bg-none relative max-w-[100%]">
                                <img src={mailImg} alt="mailImg" />
                            </span>
                        </div>
                        info@example.com
                    </a>
                </div>
                {/* 2nd */}
                <div className="md:col-span-6 lg:col-span-4 xl:col-span-3 mb-10 xl:mb-0 xl:pl-10">
                    <h3 className="text-[24px] text-white font-bold mb-8 leading-4">For Candidate</h3>
                    <a className="text-[16px] text-gray-400 font-normal leading-6 mb-4 block transition-all duration-300 hover:text-green-600" href="#">Browse jobs</a>
                    <a className="text-[16px] text-gray-400 font-normal leading-6 mb-4 block transition-all duration-300 hover:text-green-600" href="#">Browse category</a>
                    <a className="text-[16px] text-gray-400 font-normal leading-6 mb-4 block transition-all duration-300 hover:text-green-600" href="#">Candidate Dashboard</a>
                    <a className="text-[16px] text-gray-400 font-normal leading-6 mb-4 block transition-all duration-300 hover:text-green-600" href="#">job Alert</a>
                    <a className="text-[16px] text-gray-400 font-normal leading-6 mb-4 block transition-all duration-300 hover:text-green-600" href="#">My Bookmarks</a>
                </div>
                {/* 3rd */}
                <div className="md:col-span-6 lg:col-span-4 xl:col-span-3 mb-10 xl:mb-0 xl:pl-10">
                    <h3 className="text-[24px] text-white font-bold mb-8 leading-4">For Employer</h3>
                    <a className="text-[16px] text-gray-400 font-normal leading-6 mb-4 block transition-all duration-300 hover:text-green-600" href="#">Browse candidate</a>
                    <a className="text-[16px] text-gray-400 font-normal leading-6 mb-4 block transition-all duration-300 hover:text-green-600" href="#">Browse category</a>
                    <a className="text-[16px] text-gray-400 font-normal leading-6 mb-4 block transition-all duration-300 hover:text-green-600" href="#">Employer Dashboard</a>
                    <a className="text-[16px] text-gray-400 font-normal leading-6 mb-4 block transition-all duration-300 hover:text-green-600" href="#">Post a Job</a>
                    <a className="text-[16px] text-gray-400 font-normal leading-6 mb-4 block transition-all duration-300 hover:text-green-600" href="#">My Bookmarks</a>
                </div>
                {/* 4th */}
                <div className="md:col-span-6 lg:col-span-4 xl:col-span-2 mb-10 xl:mb-0">
                    <h3 className="text-[24px] text-white font-bold mb-8 leading-4">Quict link</h3>
                    <a className="text-[16px] text-gray-400 font-normal leading-6 mb-4 block transition-all duration-300 hover:text-green-600" href="#">About us</a>
                    <a className="text-[16px] text-gray-400 font-normal leading-6 mb-4 block transition-all duration-300 hover:text-green-600" href="#">Contact Us</a>
                    <a className="text-[16px] text-gray-400 font-normal leading-6 mb-4 block transition-all duration-300 hover:text-green-600" href="#">Privacy Policy</a>
                    <a className="text-[16px] text-gray-400 font-normal leading-6 mb-4 block transition-all duration-300 hover:text-green-600" href="#">Term of Use</a>
                    <a className="text-[16px] text-gray-400 font-normal leading-6 mb-4 block transition-all duration-300 hover:text-green-600" href="#">FAQ</a>
                </div>
            </div>
            {/* last dev of footer */}
            <div className="flex  py-7 justify-between border-t-[1px] border-solid border-gray-400">
                <p className="text-[16px] text-white leading-4">© 2024 Mata Jobs | All Right Reserved</p>
                <ul className="social flex gap-6">
                    <li>
                        <a  href="#">
                            <svg width="11" height="18" viewBox="0 0 11 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9.59548 10.125L10.0843 6.86742H7.028V4.75348C7.028 3.86227 7.45494 2.99355 8.82376 2.99355H10.2132V0.220078C10.2132 0.220078 8.95232 0 7.74678 0C5.22984 0 3.58465 1.56023 3.58465 4.38469V6.86742H0.786865V10.125H3.58465V18H7.028V10.125H9.59548Z" fill="white"></path>
                            </svg>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M16.1497 5.33381C16.1612 5.4937 16.1612 5.65363 16.1612 5.81352C16.1612 10.6904 12.4493 16.3097 5.66497 16.3097C3.57486 16.3097 1.63325 15.7043 0 14.6536C0.296965 14.6879 0.582469 14.6993 0.890859 14.6993C2.61545 14.6993 4.20303 14.1168 5.4708 13.1232C3.84898 13.0889 2.48984 12.0267 2.02155 10.5648C2.25 10.599 2.47841 10.6219 2.71828 10.6219C3.04949 10.6219 3.38073 10.5762 3.68909 10.4963C1.99874 10.1536 0.730934 8.66884 0.730934 6.8757V6.83003C1.22203 7.10414 1.79314 7.27546 2.39843 7.29827C1.40477 6.63582 0.753785 5.50513 0.753785 4.22593C0.753785 3.54067 0.936492 2.9125 1.25631 2.36427C3.0723 4.60284 5.80201 6.06475 8.86289 6.22467C8.8058 5.95056 8.77152 5.66505 8.77152 5.37952C8.77152 3.3465 10.4162 1.69043 12.4606 1.69043C13.5228 1.69043 14.4822 2.13586 15.156 2.8554C15.9898 2.69551 16.7893 2.38712 17.4974 1.96454C17.2233 2.82116 16.6408 3.5407 15.8756 3.99752C16.618 3.91761 17.3375 3.71198 17.9999 3.42648C17.4975 4.15741 16.8693 4.8084 16.1497 5.33381Z" fill="white"></path>
                            </svg>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <svg width="20" height="18" viewBox="0 0 20 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M19.0853 4.36229C18.8672 3.53085 18.2246 2.87603 17.4088 2.6538C15.93 2.25 10.0001 2.25 10.0001 2.25C10.0001 2.25 4.07019 2.25 2.59133 2.6538C1.77547 2.87606 1.1329 3.53085 0.914805 4.36229C0.518555 5.86934 0.518555 9.01364 0.518555 9.01364C0.518555 9.01364 0.518555 12.1579 0.914805 13.665C1.1329 14.4964 1.77547 15.124 2.59133 15.3462C4.07019 15.75 10.0001 15.75 10.0001 15.75C10.0001 15.75 15.9299 15.75 17.4088 15.3462C18.2246 15.124 18.8672 14.4964 19.0853 13.665C19.4816 12.1579 19.4816 9.01364 19.4816 9.01364C19.4816 9.01364 19.4816 5.86934 19.0853 4.36229ZM8.06064 11.8684V6.15885L13.0169 9.01371L8.06064 11.8684Z" fill="white"></path>
                            </svg>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <svg width="16" height="18" viewBox="0 0 16 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3.58143 15.7501H0.264286V5.2349H3.58143V15.7501ZM1.92107 3.80053C0.860357 3.80053 0 2.93568 0 1.89154C7.59214e-09 1.39 0.202398 0.909006 0.562669 0.554365C0.92294 0.199724 1.41157 0.000488281 1.92107 0.000488281C2.43057 0.000488281 2.9192 0.199724 3.27947 0.554365C3.63974 0.909006 3.84214 1.39 3.84214 1.89154C3.84214 2.93568 2.98143 3.80053 1.92107 3.80053ZM15.9964 15.7501H12.6864V10.6314C12.6864 9.41146 12.6614 7.84701 10.9618 7.84701C9.23714 7.84701 8.97286 9.1724 8.97286 10.5435V15.7501H5.65929V5.2349H8.84071V6.66927H8.88714C9.33 5.8431 10.4118 4.97123 12.0257 4.97123C15.3829 4.97123 16 7.1474 16 9.97396V15.7501H15.9964Z" fill="white"></path>
                            </svg>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    </footer>
    </>
  )
}

export default Footer
