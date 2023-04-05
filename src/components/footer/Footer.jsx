import React from "react";
import "./style.scss";
import {
  Facebook,
  Gift,
  Instagram,
  MessageCircle,
  PhoneCall,
  Youtube,
} from "react-feather";
function Footer() {
  return (
    <div className="flex flex-col h-[70vh] justify-start items-center gap-20 md:mb-1 mb-20">
      <div className=" h-[10vh] w-[100%] flex justify-center items-center">
        <div className="content flex">
          <h2 className="font-Playfair text-golden text-5xl lg:text-8xl">Restaurant</h2>
          <h2 className="font-Playfair text-golden text-5xl lg:text-8xl">Restaurant</h2>
        </div>
      </div>
      <div className=" w-[100%]  flex flex-col justify-start items-center gap-10">
        <hr className="h-[3px] w-[80%] m-auto bg-black" />
        <p className="font-Dancing text-xl text-center">17, Rue Bergère, 75009 Paris</p>
        <p className="font-Dancing text-xl text-center">Closed on Monday</p>
        <p className="font-Dancing text-xl text-center">
          Open Tuesday to Sunday: 12:00 to 14:30 and 19:00 to 22h:30
        </p>
        <p className="font-Dancing text- text-center">
          Valet parking available in the evening on Friday, Saturday and Sunday
          (cost 20€)
        </p>
        <div className="flex flex-row gap-5">
          <a href="/" className=" text-golden">
            <Facebook />
          </a>
          <a href="/" className=" text-golden">
            <Instagram />
          </a>
          <a href="/" className=" text-golden">
            <Youtube />
          </a>
        </div>
        <hr className="h-[3px] w-[80%] m-auto bg-black" />
        <div className="flex flex-row gap-4">
          <div className="font-Dancing">
            <a href="" className="hover:underline underline-offset-2">
              Legal information
            </a>{" "}
          </div>
          <div className="font-Dancing">
            <a href="" className="hover:underline underline-offset-2">
              Privacy Policy
            </a>{" "}
          </div>
          <div className="font-Dancing">
            <a href="" className="hover:underline underline-offset-2">
              Site Map
            </a>{" "}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
