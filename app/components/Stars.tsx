import Image from "next/image";
import React from "react";

const StarsComp = ({
  stars,
  width,
  height,
}: {
  stars: any[];
  width: number;
  height: number;
}) => (
  <div className="flex justify-center items-center gap-1">
    {stars.map((s, ind) => (
      <Image
        key={ind}
        src={"/images/star.svg"}
        alt="star"
        width={width}
        height={height}
      />
    ))}
  </div>
);

export default StarsComp;
