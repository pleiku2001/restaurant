import React, { useState } from "react";
import { Facebook, Instagram, Youtube, Dribbble, Twitch } from "react-feather";
import cn from "classnames";
import "./style.scss";
const internalLinks = [
  {
    url: "/restaurant",
    component: <span>The Restaurant</span>,
    img: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cmVzdGF1cmFudHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
  },
  {
    url: "/booking",
    component: <span>Booking</span>,
    img: "https://plus.unsplash.com/premium_photo-1673525281194-d732e0289bee?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Ym9va2luZ3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
  },
  {
    url: "/map",
    component: <span>The Map</span>,
    img: "https://images.unsplash.com/photo-1569336415962-a4bd9f69cd83?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fG1hcHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
  },
  {
    url: "/contact",
    component: <span>Contact</span>,
    img: "https://images.unsplash.com/photo-1599458252573-56ae36120de1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cmVzdGF1cmFudCUyMHRhYmxlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
  },
  {
    url: "/kitchen",
    component: <span>Our kitchen</span>,
    img: "https://images.unsplash.com/photo-1544148103-0773bf10d330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fHJlc3RhdXJhbnQlMjB0YWJsZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
  },
];

const externalLinks = [
  {
    url: "www.facebook.com",
    component: <Facebook />,
  },
  {
    url: "www.instagram.com",
    component: <Instagram />,
  },
  {
    url: "www.youtube.com",
    component: <Youtube />,
  },
  {
    url: "www.dribbble.com",
    component: <Dribbble />,
  },
  {
    url: "www.twitch.com",
    component: <Twitch />,
  },
];
function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <div className=" z-10">
      {/* button */}

      <div className={cn("menu-button-wrap", { open })}>
        <button className="menu-button" onClick={() => setOpen(!open)}>
          <span />
        </button>
      </div>
      {/* content */}
      <div className="menu-holder ">
        <div className={cn("menu-inside", { open })}>
          {/* <div className="menu-inside open"> */}
          <div className="menu-nav-container ">
            <ul className="internal-nav-links">
              {internalLinks.map((link) => (
                <li key={link.url}>
                  <a href={link.url} className="font-mono">
                    {link.component}
                  </a>
                  <img src={link.img} />
                </li>
              ))}
            </ul>
            <ul className="external-nav-links">
              {externalLinks.map((link) => (
                <li key={link.url}>
                  <a href={link.url} className="text-red-400">
                    {link.component}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
