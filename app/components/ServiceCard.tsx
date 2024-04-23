import Image from "next/image";
import React from "react";

function ServiceCard({
  title,
  imgSrc,
  price,
  intro,
}: {
  title: string;
  imgSrc: string;
  price: string;
  intro: string;
}) {
  return (
    <div className="main-bg p-5 w-[328.86px] h-fit mx-auto ">
      <div className="w-full flex justify-between  items-start">
        <div className="w-1/3 text-right">
          <p className="font-bold">سعر الخدمة</p>
          <p className="green-color flex justify-end items-center ">
            <span className="text-[12px]">ر.س</span>
            <span className="text-[24px] px-2">{price}</span>
          </p>
        </div>
        <div className="w-2/3 flex justify-center gap-2 items-start">
          <div className="flex justify-center items-start">
            <div className="text-right">
              <p className="bluish-gray text-[16px]">{title} </p>
              <p className="text-[12px] gray-color">{intro}</p>
            </div>
          </div>
          <Image
            src={imgSrc}
            alt="phone"
            width={24}
            height={24}
            className="filter-img-bg"
          />
        </div>
      </div>
      <div
        role="button"
        className="w-full mt-3 py-2 bg-yellow text-white text-center rounded-[6px] text-[16px]"
      >
        طلب الخدمة
      </div>
    </div>
  );
}

export default ServiceCard;
