import React from "react";
import { assets } from "../assets/assets";

const Footer = () => {
  return (
    <div className="md:mx-10">
      <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm ">
        {/* {---Left section---} */}

        <div>
          <img className='mb-5 w-40' src={assets.logo} alt="" />
          <p className='w-full md:w-2/3 text-gray-600 leading-6 '>
            Prescripto — Your Health, Our Priority. <br />
            Making healthcare simple and
            accessible. Find trusted doctors, book appointments effortlessly,
            and enjoy a better healthcare experience.
          </p>
        </div>

        {/* {---Center section---} */}

        <div>
          <p className="text-xl font-medium mb-5">COMPANY</p>
          <ul className='flex flex-col gap-2 text-gray-600'>
            <li>Home</li>
            <li>About us</li>
            <li>Contact us</li>
            <li>Privacy policy</li>
          </ul>
        </div>

        {/* {---Right section---} */}

        <div>
          <p className="text-xl font-medium mb-5">GET IN TOUCH</p>
          <ul className='flex flex-col gap-2 text-gray-600'>
            <li>+880164209****</li>
            <li>samiasa980@gmail.com</li>
          </ul>
        </div>
      </div>

      {/* {---Copyright text---} */}

      <div>
        <hr />
        <p className="py-5 text-center text-gray-500 text-sm">
          © 2026 Made with ❤️ by Samia | Prescripto.
        </p>
      </div>
    </div>
  );
};

export default Footer;
