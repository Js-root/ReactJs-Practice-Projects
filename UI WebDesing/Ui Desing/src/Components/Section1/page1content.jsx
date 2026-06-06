import React from "react";
import Leftcontent from "./leftcontent.jsx";
import Rightcontent from "./rightcontent.jsx";

const page1content = (props) => {
  return (
    <div className="py-20 px-16 flex justify-between h-[91.5vh] items-center gap-10">
      <Leftcontent />
      <Rightcontent users={props.users} />
    </div>
  );
};

export default page1content;
