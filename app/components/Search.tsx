"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import FilterIcon from "./FilterIcon";
import { getCountries } from "../lib/getCountries";
import { getCities } from "../lib/getCities";
import { getDistricts } from "../lib/getDistricts";
import axios from "axios";
import { getCategories } from "../lib/getCategories";

function Search() {
  const [countries, setCountries] = useState<any[]>([]);
  const [cities, setCities] = useState<any[]>([]);
  const [districts, setDistricts] = useState<any[]>([]);
  const [Categories, setCategories] = useState<any[]>([]);
  const [show, setShow] = useState(false);
  const [lawyerName, setLawyerName] = useState("");
  const [searchItem, setSearchItem] = useState<{
    category_id: string;
    country_id: string;
    city_id: string;
    district_id: string;
    gender: string;
  }>({
    category_id: "",
    country_id: "",
    city_id: "",
    district_id: "",
    gender: "",
  });
  useEffect(() => {
    getCountries(setCountries);
    getCities(setCities);
    getDistricts(setDistricts);
    getCategories(setCategories);
  }, []);
  const sendSearchObject = () => {
    setShow(false);
    const formData = new FormData();
    formData.append("category_id", searchItem.category_id);
    formData.append("country_id", searchItem.country_id);
    formData.append("city_id", searchItem.city_id);
    formData.append("district_id", searchItem.district_id);
    formData.append("gender", searchItem.gender);
    formData.append("name", lawyerName);
    if (
      searchItem.category_id &&
      searchItem.city_id &&
      searchItem.district_id &&
      searchItem.gender
    ) {
      axios
        .post(`https://ymtaz.sa/api/client/digital-guide/search`, formData, {
          headers: {
            Authorization:
              "bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwczovL3ltdGF6LnNhL2FwaS9jbGllbnQvbG9naW4iLCJpYXQiOjE3MTMxODgxOTAsImV4cCI6MjE2MDE3MTMxODgxOTAsIm5iZiI6MTcxMzE4ODE5MCwianRpIjoiOXVZU0lsOHY2UkkzNGxHciIsInN1YiI6IjE2NTEiLCJwcnYiOiIyYTg0NjYyYzMzMTU3NTQ2YzQzZjQwMzc1NDY0MTViYzcwZDc4YmJjIn0.jn7AwKiHQhN-z4qraZ0udGn_321-6V7JQJX3GyabQU4",
          },
        })
        .then((res) => {
          //on success i have to set a state that holds lawyers, but i found no lawyers returned from the api, so i left lawyers written statically
          console.log(res);
        });
    }
  };
  return (
    <div className="flex justify-center items-center relative">
      <FilterIcon showList={() => setShow(!show)} />
      <input
        type="text"
        value={lawyerName}
        onChange={(e) => setLawyerName(e.target.value)}
        placeholder="ادخل الاسم"
        className="w-[723.5px] h-[64px] rounded-[6px] px-[65px] text-right"
        width={723.5}
        height={64}
      />
      <button
        className="absolute top-4 right-[30px]"
        onClick={sendSearchObject}
      >
        <Image src={"/images/search.svg"} alt="search" width={32} height={32} />
      </button>
      {show && (
        <div className="absolute z-50 top-[50px] left-[30px] p-3 rounded-[10px] bg-white  shadow-md">
          <ul>
            <li
              className="w-full flex justify-between items-center"
              role="button"
            >
              <select
                onChange={(e) => {
                  setSearchItem((prev) => ({
                    ...prev,
                    category_id: e.target.value,
                  }));

                  console.log(searchItem);
                }}
                className="w-full cursor-pointer bg-white p-3  max-h-60 overflow-y-scroll"
              >
                <option value="">--اختر القسم--</option>
                {Categories?.map((c) => (
                  <option key={c.id} value={c.id} id={c.title}>
                    {c.title}
                  </option>
                ))}
              </select>
            </li>
            <li
              className="w-full flex justify-between items-center"
              role="button"
            >
              <select
                onChange={(e) => {
                  setSearchItem((prev) => ({
                    ...prev,
                    country_id: e.target.value,
                  }));

                  console.log(searchItem);
                }}
                className="w-full cursor-pointer bg-white p-3  max-h-60 overflow-y-scroll"
              >
                <option value="">--اختر دولة--</option>
                {countries?.map((c) => (
                  <option key={c.id} value={c.id} id={c.name}>
                    {c.name}
                  </option>
                ))}
              </select>
            </li>
            <li
              className="w-full flex justify-between items-center"
              role="button"
            >
              <select
                onChange={(e) => {
                  setSearchItem((prev) => ({
                    ...prev,
                    city_id: e.target.value,
                  }));

                  console.log(searchItem);
                }}
                className="w-full cursor-pointer bg-white p-3  max-h-60 overflow-y-scroll"
              >
                <option value="">--اختر مدينة--</option>
                {cities?.map((c) => (
                  <option key={c.id} value={c.id} id={c.title}>
                    {c.title}
                  </option>
                ))}
              </select>
            </li>
            <li
              className="w-full flex justify-between items-center"
              role="button"
            >
              <select
                onChange={(e) => {
                  setSearchItem((prev) => ({
                    ...prev,
                    district_id: e.target.value,
                  }));

                  console.log(searchItem);
                }}
                className="w-full cursor-pointer bg-white p-3 max-h-60 overflow-y-scroll"
              >
                <option value="">--اختر مقاطعة--</option>
                {districts?.map((c) => (
                  <option key={c.id} value={c.id} id={c.title}>
                    {c.title}
                  </option>
                ))}
              </select>
            </li>
            <li
              className="w-full flex justify-between items-center"
              role="button"
            >
              <select
                onChange={(e) => {
                  setSearchItem((prev) => ({
                    ...prev,
                    gender: e.target.value,
                  }));

                  console.log(searchItem);
                }}
                className="w-full cursor-pointer bg-white p-3 max-h-60 overflow-y-scroll"
              >
                <option value="">--اختر النوع--</option>

                <option value={"Male"}>ذكر</option>
                <option value={"Female"}>انثي</option>
              </select>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}

export default Search;
