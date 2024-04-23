import React from "react";
import Card from "../components/Card";
import Image from "next/image";
import LawyerCard from "../components/LawyerCard";
import BackBtn from "../components/BackBtn";
import Search from "../components/Search";

function page() {
  return (
    <div className="mx-auto flex flex-col justify-content-center gap-3 items-center relative">
      <h2 className="font-bold text-[32px]">محامي مرخص</h2>

      <Search />
      <div className="grid grid-cols-3 grid-rows-3 gap-[20px] mx-auto flex-wrap">
        <LawyerCard
          id={"5218"}
          imgSrc={"/images/person.svg"}
          subtitle="مستشار قانوني"
          title={"عبد العزيز عبد الرحمن الربعي"}
        />
        <LawyerCard
          id={"5218"}
          imgSrc={"/images/person.svg"}
          subtitle="مستشار قانوني"
          title={"عبد العزيز عبد الرحمن الربعي"}
        />
        <LawyerCard
          id={"5218"}
          imgSrc={"/images/person.svg"}
          subtitle="مستشار قانوني"
          title={"عبد العزيز عبد الرحمن الربعي"}
        />
        <LawyerCard
          id={"5218"}
          imgSrc={"/images/person.svg"}
          subtitle="مستشار قانوني"
          title={"عبد العزيز عبد الرحمن الربعي"}
        />
        <LawyerCard
          id={"5218"}
          imgSrc={"/images/person.svg"}
          subtitle="مستشار قانوني"
          title={"عبد العزيز عبد الرحمن الربعي"}
        />
        <LawyerCard
          id={"5218"}
          imgSrc={"/images/person.svg"}
          subtitle="مستشار قانوني"
          title="عبد العزيز عبد الرحمن الربعي"
        />
      </div>
      <BackBtn />
    </div>
  );
}

export default page;
