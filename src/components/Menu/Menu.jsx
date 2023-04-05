import React from "react";
import { Star } from "react-feather";

function Menu() {
  return (
    <div className="min-h-[150vh]  flex flex-col">
      <div className="w-[100%] lg:w-[50%] font-Bodoni lg:text-8xl text-5xl restaurant mx-auto mb-32 text-center   text-animation text-golden ">
        ENJOY A DELICIOUS
      </div>
      <div className="flex 2xl:flex-row flex-col">
        <div className="flex-1  relative flex flex-col justify-center items-center gap-10">
          <div className="w-[800px] h-[800px] bg-blue-400 rounded-full ">
            <img
              className="w-[100%] h-[100%] object-center rounded-full "
              src="https://images.unsplash.com/photo-1467003909585-2f8a72700288?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
              alt="img"
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
              Not forgetting the gourmet chocolate tartlet topped with a scoop
              of vanilla ice cream or the strawberry blancmange.
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
                Booking now
              </a>
            </button>
          </div>
        </div>
        <div className="flex-1   relative flex 2xl:flex-col flex-col-reverse justify-center items-center gap-10 ">
          <div className="flex flex-col gap-5 my-5">
            <div className="flex flex-row m-auto ">
              <Star className="mt-2 text-golden" />
              <Star className="mt-1 text-golden" />
              <Star className=" text-golden" />
              <Star className="mt-1  text-golden" />
              <Star className="mt-2  text-golden" />
            </div>
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
              Not forgetting the gourmet chocolate tartlet topped with a scoop
              of vanilla ice cream or the strawberry blancmange.
            </div>
          </div>
          <div className="w-[800px] h-[800px]  rounded-full ">
            <img
              className="w-[100%] h-[100%] object-center rounded-full"
              src="https://images.unsplash.com/photo-1471253794676-0f039a6aae9d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
              alt="img"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Menu;
