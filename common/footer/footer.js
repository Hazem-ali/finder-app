import React from "react";
import FooterSectors from "./footerSectors";
export default function Footer() {
  return (
    <div>
      {/* <div className="grid grid-cols-1 md:grid-cols-2"> */}
      <div className="mt-auto  bg-slate-950 text-white">
        {/* <div className="bg-[#ffffff19] px-4 py-9 sm:px-12 md:flex md:items-center md:justify-between">
          <h1 className="mb-6 text-3xl font-semibold md:mb-0 md:w-2/5 lg:text-4xl lg:leading-normal">
            <span className="text-teal-400">Free</span> until you're ready to
            launch
          </h1>
          <div>
            <input
              type="text"
              placeholder="Enter Your ph.no"
              className="mb-4 mr-1 w-full rounded px-2 py-2.5 text-gray-800 focus:outline-none sm:mr-5 sm:w-72 lg:mb-0"
            />
            <button className="w-full rounded-md bg-teal-400 px-5 py-2.5 font-[Poppins] text-white duration-300 hover:bg-teal-500 md:w-auto">
              Request Code
            </button>
          </div>
        </div> */}

        <FooterSectors />

        <div className="grid grid-cols-1 gap-10 pb-8 text-center text-sm text-gray-400 sm:grid-cols-2">
          <span>© 2024 Finder. All rights reserved.</span>
          <span>Terms · Privacy Policy</span>
          {/* <SocialIcons Icons={Icons} /> */}
        </div>
      </div>
    </div>
  );
}
