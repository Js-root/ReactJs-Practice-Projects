import React from "react";

const rightcard = (props) => {
  return (
    <div className="h-full w-80 rounded-4xl overflow-hidden relative shrink-0">
      <img
        className="h-full w-full object-cover bg-center"
        src={props.img}
        alt="cardimage"
      />
      <div className="absolute top-0 left-0 h-full w-full bg-black/35 p-8 flex flex-col justify-between">
        <h2 className="bg-white rounded-full h-13 w-13 flex justify-center items-center font-bold ">
          {props.id}
        </h2>
        <div>
          <p className="font-semibold text-white text-[21px] leading-relaxed">
            {props.content}
          </p>
          <div className="ml- mt-8">
            <button className="bg-blue-500 rounded-full text-xl text-white px-20 py-3 font-medium">
              {props.button}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default rightcard;
