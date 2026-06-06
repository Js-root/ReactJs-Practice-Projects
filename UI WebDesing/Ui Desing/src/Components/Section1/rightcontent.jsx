import React from "react";
import Rightcard from "./rightcard.jsx";

const rightcontent = (props) => {
  return (
    <div id="rightscroll" className="h-full w-2/3 p-5 flex flex-nowrap gap-10 overflow-x-auto">


      {props.users.map(function(elem){
        return <Rightcard img = {elem.img} content = {elem.content} button = {elem.button} id = {elem.id}/>
      })}


    </div>
  );
};

export default rightcontent;
