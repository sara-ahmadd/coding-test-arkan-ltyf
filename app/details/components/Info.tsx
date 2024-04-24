"use client";
import Heading from "@/app/components/Heading";
import ServiceCard from "@/app/components/ServiceCard";
import axios from "axios";
import Image from "next/image";
import React, { useEffect, useState } from "react";

function Info({ id }: { id: string }) {
  const [activeTab, setActiveTab] = useState("اسعار الخدمات");
  const [services, setServices] = useState<any[]>();

  useEffect(() => {
    axios
      .get(`https://ymtaz.sa/api/client/lawyer/${id}`, {
        headers: {
          Authorization:
            "bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwczovL3ltdGF6LnNhL2FwaS9jbGllbnQvbG9naW4iLCJpYXQiOjE3MTMxODgxOTAsImV4cCI6MjE2MDE3MTMxODgxOTAsIm5iZiI6MTcxMzE4ODE5MCwianRpIjoiOXVZU0lsOHY2UkkzNGxHciIsInN1YiI6IjE2NTEiLCJwcnYiOiIyYTg0NjYyYzMzMTU3NTQ2YzQzZjQwMzc1NDY0MTViYzcwZDc4YmJjIn0.jn7AwKiHQhN-z4qraZ0udGn_321-6V7JQJX3GyabQU4",
        },
      })
      .then((res) => {
        setServices(res.data.data.lawyer.services);
      });
  }, [id]);
  const time = (
    <li
      role="button"
      className="hover:bg-[#ddb762] flex justify-center items-center text-[16px] px-1  rounded-[8px] hover:text-white text-[#a3a4a5] w-[65px] h-[30px] z-[2]"
    >
      10:00 <span>ص</span>
    </li>
  );
  return (
    <div className="flex flex-col justify-center items-end flex-1">
      <div className="flex flex-col justify-start items-end gap-4">
        <div className="rounded-[8px] bg-white py-4 flex flex-col justify-start items-end gap-4  w-[709.5px]">
          <div className="px-5">
            <Heading text="معلومات الحجز" />
          </div>
          <div className="w-full flex justify-center gap-[40px] items-center gray-color border-b-2">
            <button
              className={`text-[20px] px-5 ${
                activeTab == "اوقات العمل" ? "active-tab" : ""
              }`}
              onClick={() => setActiveTab("اوقات العمل")}
            >
              اوقات العمل
            </button>
            <button
              className={`text-[20px] px-5 ${
                activeTab == "اسعار الخدمات" ? "active-tab" : ""
              }`}
              onClick={() => setActiveTab("اسعار الخدمات")}
            >
              اسعار الخدمات{" "}
            </button>
          </div>
          {activeTab === "اسعار الخدمات" && (
            <div className="w-full flex-col gap-3 flex justify-center items-center">
              {services?.map((s) => (
                <ServiceCard
                  key={s.service_id}
                  title={s.title}
                  price={s.ymtaz_price}
                  intro={s.intro}
                  imgSrc={s.image}
                />
              ))}

              <ServiceCard
                price="300"
                title={"خدمة الاستشارة المرئية"}
                imgSrc="/images/pause.svg"
                intro="نقدم فيها استشارة من خلال الهاتف والاجابة على كافة الاسئلة"
              />
              <ServiceCard
                price="300"
                title={"خدمة الاستشارة المكتوبة"}
                imgSrc="/images/pen.svg"
                intro="نقدم فيها استشارة من خلال الهاتف والاجابة على كافة الاسئلة"
              />
            </div>
          )}
          {activeTab === "اوقات العمل" && (
            <div className="w-full bg-white gap-3 flex justify-center items-center relative">
              <div className="absolute z-[1] w-full flex justify-between items-center px-2">
                <Image
                  src={"/images/left.svg"}
                  alt="left"
                  width={32}
                  height={32}
                />
                <Image
                  src={"/images/right.svg"}
                  alt="right"
                  width={32}
                  height={32}
                />
              </div>
              <div className="flex text-[16px] justify-start gap-1 items-center flex-col main-bg w-[133px] min-h-[272.36px]">
                <p className="w-full text-center bg-yellow p-2 text-white rounded-tr-[8px] rounded-tl-[8px] ">
                  الاثنين 02/03
                </p>
                <ul className="flex flex-col justify-center items-center gap-2 py-3">
                  {[1, 2, 3, 4, 5, 6].map((x) => time)}
                </ul>
              </div>
              <div className="flex text-[16px] justify-start gap-1 items-center flex-col main-bg w-[133px] min-h-[272.36px]">
                <p className="w-full text-center bg-yellow p-2 text-white rounded-tr-[8px] rounded-tl-[8px] ">
                  غدا{" "}
                </p>
                <ul className="flex flex-col justify-center items-center gap-2 py-3">
                  {[1, 2, 3, 4, 5, 6].map((x) => time)}
                </ul>
              </div>
              <div className="flex text-[16px] justify-start gap-3 items-center flex-col main-bg w-[133px] min-h-[272.36px]">
                <p className="w-full text-[16px] text-center bg-yellow p-2 text-white rounded-tr-[8px] rounded-tl-[8px] ">
                  اليوم
                </p>

                <p className="w-full text-[16px] px-3 text-center gray-color my-auto h-ft">
                  لا يوجد مواعيد متاحة
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Info;
