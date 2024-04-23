import Image from "next/image";
import React from "react";

function Card({ imgSrc, title }: { imgSrc: string; title: string }) {
  return (
    <div
      role="button"
      className="w-[282px] h-[270px] rounded-[30px] card-shadow card-shadow flex flex-col justify-center items-center lawyer-card"
    >
      <div className="w-[125px] h-[125px] rounded-full flex justify-center items-center bg-white icon-container">
        <Image
          src={imgSrc}
          alt="محكم"
          width={45.4}
          height={45.4}
          className={`rounded-full filter-img-bg`}
        />
      </div>

      <h4 className="text-[20px] font-bold">{title}</h4>
      <h4 className="text-[14px] ">متوفر عدد 17</h4>
    </div>
  );
}

export default Card;
