import BackBtn from "@/app/components/BackBtn";
import Heading from "@/app/components/Heading";
import Rating from "@/app/components/Rating";
import StarsComp from "@/app/components/Stars";
import { getLawyer } from "@/app/lib/getLawyer";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import React from "react";

async function Profile({ id }: { id: string }) {
  //use the id to get the profile dynamically
  const res = await getLawyer(id);
  const currentLawyer = res.data.data.lawyer;

  const rate = 5;
  const stars = Array(rate).fill(0);

  return (
    <div className="flex flex-col justify-start items-end gap-4 flex-1">
      <div className="rounded-[8px] bg-white p-4 flex flex-col justify-start items-end gap-4  w-full">
        <Heading text="  المعلومات الشخصية" />
        <div className="flex justify-center items-center gap-3">
          <div className="flex flex-col justify-center items-end">
            {" "}
            <h4 className="text-[20px] font-bold flex gap-2">
              {currentLawyer.name}
            </h4>
            <h4 className="text-[14px] font-normal gray-color flex gap-2">
              {" "}
              <Image
                src={"/images/crown.svg"}
                alt="right"
                width={20}
                height={20}
              />
              {currentLawyer.accurate_specialty.title}
            </h4>
            <div className="flex justify-center items-center gap-2">
              <button className="bluish-gray text-[16px] font-bold">
                اظهر التقييمات
              </button>
              <h4 className="text-[12px] flex  gray-color">
                التقييم العام من 145 من العملاء
              </h4>
              <h4 className="text-[14px] flex gap-1 gray-color">
                {rate.toFixed(2)}
                <StarsComp stars={stars} width={17.25} height={16.7} />
              </h4>
            </div>
          </div>

          <div className="relative">
            <Image
              src={"/images/person.svg"}
              alt="lawyer"
              width={121.39}
              height={121.39}
            />
            <Image
              src={"/images/treu.svg"}
              className="absolute right-3 top-2"
              alt="right"
              width={24}
              height={24}
            />
          </div>
        </div>
        <div className="flex flex-col justify-center items-end main-bg p-5  rounded-br-[30px]  rounded-tl-[30px] w-fit mx-auto">
          <div className="flex justify-center items-center gap-3">
            <p className="gray-color">
              تميز الاستشاري بالاحترافية العالية و الخبرة العالية
            </p>
            <Image
              src={"/images/quote.svg"}
              alt="quote"
              width={24}
              height={24}
            />
          </div>
          <div className="flex justify-center items-center gap-6 gray-color">
            <p>الخميس 4 فبراير 2024</p>
            <p>AbdullahFaleh</p>
            <StarsComp stars={stars} width={19.48} height={19.48} />
          </div>
        </div>
      </div>
      <div className="rounded-[8px] bg-white p-4 flex flex-col justify-start items-end gap-4  w-full">
        <Heading text="النبذة التعريفية" />
        <p className="gray-color text-right text-[16px] max-w-[521.37px]">
          استشاري القانون عبد العزيز عبد الرحمن الربعي وهو محام مرخص في المملكة
          العربية السعودية، يحمل درجة البكالوريوس في القانون. يتمتع بخبرة تبلغ
          سنتين في مجال ممارسة القانون
        </p>
      </div>
      <div className="rounded-[8px] bg-white p-4 flex flex-col justify-start items-end gap-4  w-full px-10">
        <Heading text=":تقييم العملاء" />
        <div className="w-full flex justify-between items-start  ">
          <div className="flex justify-between items-center flex-col gray-color ">
            <span className="flex justify-center items-center bg-yellow text-white p-4 rounded-[6px] h-[40px] w-[58px]">
              {rate}/5
            </span>
            <p>تقييم الاستشاري</p>
          </div>
          <div className="flex justify-between items-center flex-col gray-color">
            <StarsComp stars={stars} width={35.02} height={35.02} />
            <p className="text-[20px]">تقييم المنصة </p>
          </div>
          <div className="flex justify-between items-center flex-col gray-color">
            <StarsComp stars={stars} width={35.02} height={35.02} />
            <p className="text-[20px]">التقييم العام</p>
            <p className="text-[16px]">من 154 من العملاء</p>
          </div>
        </div>
      </div>
      <div className="rounded-[8px] bg-white p-4 flex flex-col  justify-between items-center gap-4  w-full">
        <div className=" bg-white p-4 flex  justify-between items-center gap-4  w-full border-b-2 ">
          <div className="w-full flex justify-between items-center flex-col gray-color ">
            <span className="flex justify-center items-center bg-yellow text-white p-4 rounded-[6px] h-[40px] w-[42px]">
              {rate}
            </span>
            <p>تقييم الاستشاري</p>
          </div>
          <Rating rate={rate} />
        </div>
        <div className=" bg-white p-4 flex  justify-between items-center gap-4  w-full  ">
          <div className="w-full flex justify-between items-center flex-col gray-color ">
            <span className="flex justify-center items-center bg-yellow text-white p-4 rounded-[6px] h-[40px] w-[42px]">
              {rate}
            </span>
            <p>تقييم الاستشاري</p>
          </div>
          <Rating rate={rate} />
        </div>
      </div>
      <BackBtn />
    </div>
  );
}

export default Profile;
