import React from "react";

function Map() {
  return (
    <div className="lg:h-[80vh] h-[120vh]  flex flex-row">
      <div className="w-[90%] md:w-[80%] h-[70%] bg-mix-color m-auto flex flex-col justify-center items-center gap-10 rounded-xl">
        <div className="w-[100%] font-Bodoni text-5xl md:text-8xl restaurant text-center  text-animation text-golden ">
          THE RESTAURANT
        </div>
        <div className="text-center text-xl md:max-w-3xl x-[100%] mx-auto text-white-100 font-Playfair">
          It's official, our doors are finally open! Passionné is the name we
          have carefully chosen for our new restaurant, in order to offer you an
          experience rich in emotions, when tasting each of our dishes. Find us
          at 17 Rue Bergère, in the 9th arrondissement of Paris, a few minutes
          from the monument of the Comptoir National d'Escompte de Paris.
        </div>
        <button className=" mx-auto underline underline-offset-8 flex flex-col gap-3 ">
          <a
            href=""
            className="font-Dancing text-4xl text-golden hover:text-yellow-600"
          >
            Discover the kitchen
          </a>
        </button>
      </div>
    </div>
  );
}

export default Map;
