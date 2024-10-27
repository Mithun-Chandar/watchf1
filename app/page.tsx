import React from "react";

const StreamFrame = () => {
  return (
    <div className="w-full h-[500px] pt-10">
      <iframe
        src="//stream.crichd.sc/update/skyf1.php"
        width="100%"
        height={500}
        marginHeight={0}
        marginWidth={0}
        scrolling={"no"}
        frameBorder={0}
        allowFullScreen
        allow="encrypted-media"
        className="w-full h-full"
      ></iframe>
    </div>
  );
};

export default StreamFrame;
