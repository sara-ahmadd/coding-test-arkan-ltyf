import React from "react";
import StarsComp from "./Stars";
import Image from "next/image";

function Rating({ rate }: { rate: any }) {
  const stars = Array(rate).fill(0);
  return (
    <div className="w-full flex justify-between items-center">
      <div className="flex flex-col justify-center items-end">
        <StarsComp stars={stars} width={14} height={13.56} />
        <p className="gray-color text-[16px]">التقييم العام</p>
        <p className="gray-color text-[16px] text-right">
          “استشارى ممتاز ومحترف وواعى بشكل كبير بمختلف القضايا القانونية
          والفقهية
        </p>
        <p className="gray-color text-[12px]">عبد الله فالح </p>
        <p className="gray-color text-[12px]">الخميس 3 فبراير 2024</p>
      </div>
    </div>
  );
}

export default Rating;
