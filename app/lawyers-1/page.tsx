import React from "react";
import Card from "../components/Card";
import Image from "next/image";
import BackBtn from "../components/BackBtn";
import Search from "../components/Search";

function page() {
  return (
    <div className="mx-auto flex flex-col justify-content-center gap-3 items-center">
      <h2 className="font-bold text-[32px]">هيئة المستشارين</h2>
      <Search />
      <div className="grid grid-cols-3 grid-rows-3 gap-[20px] mx-auto flex-wrap">
        <Card imgSrc={"/images/engineer.svg"} title={"هيئة القضايا العمالية"} />
        <Card imgSrc={"/images/user-2.svg"} title={"هيئة الأحوال الشخصية"} />
        <Card imgSrc={"/images/pen.svg"} title={"هيئة القضايا الجزائية"} />
        <Card imgSrc={"/images/book.svg"} title={"هيئة التدريب القانوني"} />
        <Card imgSrc={"/images/book.svg"} title={"هيئة التدريب القانوني"} />
        <Card
          imgSrc={"/images/article-2.svg"}
          title={"هيئة البحوث القانونية"}
        />
      </div>
      <BackBtn />
    </div>
  );
}

export default page;
