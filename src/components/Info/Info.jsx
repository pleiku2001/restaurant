import React from "react";

import { Star } from "react-feather";
import "./style.scss";

function Info() {
  return (
    <div className=" min-h-[200vh] flex lg:flex-row flex-col mb-10">
      <div className="flex flex-1 flex-col  gap-10">
        <div className="w-[100%] font-Bodoni lg:text-8xl text-5xl restaurant text-center mt-20  text-animation text-golden ">
          RESTAURANT PASSIONATE IN VIETNAM
        </div>
        <div className="flex lg:flex-row flex-col justify-center items-center">
          <img
            src="https://restaurantpassionne.com/app/uploads/2023/02/michelin-guide@2x.png.webp"
            alt="michelin"
            className="h-[100px]"
          />
          <img
            src="https://restaurantpassionne.com/app/uploads/2023/02/selection-gault-millau@2x.png.webp"
            alt="michelin"
            className="h-[100px]"
          />
        </div>
        <div className="flex flex-col gap-5 my-5">
          <div className="m-auto text-lg font-Dancing w-[60%] text-center">
            Gastronomy is at our table every day!
          </div>
          <div className="m-auto text-lg font-Dancing w-[60%] text-center">
            For starters, white tuna served in a shellfish broth with green
            asparagus or radishes sprinkled with African bottarga in a
            salicornia sauce.
          </div>
          <div className="m-auto text-lg font-Dancing w-[60%] text-center">
            Then a roasted Challans duckling with carrots and a mustard duck
            juice, or a fillet of brill worked like a sole meunière with white
            asparagus and smoked garlic oil.
          </div>
          <div className="m-auto text-lg font-Dancing w-[60%] text-center">
            Not forgetting the gourmet chocolate tartlet topped with a scoop of
            vanilla ice cream or the strawberry blancmange.
          </div>
        </div>
        <button className=" mx-auto underline underline-offset-8 flex flex-col gap-3 ">
          <div className="flex flex-row m-auto ">
            <Star className="mt-2 text-golden" />
            <Star className=" text-golden" />
            <Star className="mt-2  text-golden" />
          </div>
          <a
            href=""
            className="font-Dancing text-4xl text-golden hover:text-yellow-600"
          >
            Discover the kitchen
          </a>
        </button>
        <div className="m-auto mb-10">
          <img
            src="https://images.unsplash.com/photo-1502301103665-0b95cc738daf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fHJlc3RhdXJhbnR8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
            alt=""
            className="h-[500px] w-[500px] object-cover "
          />
        </div>
      </div>
      <div className="flex flex-1 flex-col gap-20">
        <img
          src="https://images.unsplash.com/photo-1551218808-94e220e084d2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8cmVzdGF1cmFudHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
          alt="img"
          className="w-[100%] h-[130vh] object-cover bg-center"
        />
        <div className="flex flex-col justify-center items-start mx-auto gap-2 ">
          <div className="ml-4 lg:ml-0">
            <p className="font-Dancing text-xl ">
              17, Rue Bergère, 75009 Paris
            </p>
            <p className="font-Dancing text-xl">Closed on Monday</p>
            <p className="font-Dancing text-xl">
              Open Tuesday to Sunday: 12:00 to 14:30 and 19:00 to 22h:30
            </p>
            <p className="font-Dancing text-lg">
              Valet parking available in the evening on Friday, Saturday and
              Sunday (cost 20€)
            </p>
          </div>
          <button className="mt-16 mx-auto underline underline-offset-8 flex flex-col gap-3 ">
            <div className="flex flex-row m-auto ">
              <Star className="mt-2 text-golden" />
              <Star className=" text-golden" />
              <Star className="mt-2  text-golden" />
            </div>
            <a
              href=""
              className="font-Dancing text-4xl text-golden hover:text-yellow-600 text-center"
            >
              I reserve a table
            </a>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Info;
