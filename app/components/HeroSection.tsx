import Image from "next/image";
import React from "react";
import Card from "./Card";
import Link from "next/link";
import Search from "./Search";
import axios from "axios";
import { Category } from "@/types";

async function HeroSection() {
  const response = await axios.get(
    "https://ymtaz.sa/api/client/digital-guide/categories",
    {
      headers: {
        Authorization:
          "bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwczovL3ltdGF6LnNhL2FwaS9jbGllbnQvbG9naW4iLCJpYXQiOjE3MTMxODgxOTAsImV4cCI6MjE2MDE3MTMxODgxOTAsIm5iZiI6MTcxMzE4ODE5MCwianRpIjoiOXVZU0lsOHY2UkkzNGxHciIsInN1YiI6IjE2NTEiLCJwcnYiOiIyYTg0NjYyYzMzMTU3NTQ2YzQzZjQwMzc1NDY0MTViYzcwZDc4YmJjIn0.jn7AwKiHQhN-z4qraZ0udGn_321-6V7JQJX3GyabQU4",
      },
    }
  );
  const sectionsArray: Category[] = response.data.data.categories;
  console.log(response.data.data.lawyer?.sections);

  return (
    <div className="mx-auto flex flex-col justify-content-center gap-3 items-center">
      <h2 className="font-bold text-[32px]">الدليل الرقمي</h2>
      <Search />
      <div className="grid grid-cols-3 grid-rows-3 gap-[20px] mx-auto flex-wrap">
        <Link href={"/lawyer"}>
          <Card imgSrc={`/images/article.svg`} title={"محكم"} />
        </Link>
        <Link href={"/lawyer"}>
          <Card imgSrc={`/images/user-2.svg`} title={"موثق"} />
        </Link>
        <Link href={"/lawyer"}>
          <Card imgSrc={`/images/engineer.svg`} title={"محامي مرخص"} />
        </Link>
        {sectionsArray?.map((s) => (
          <Link href={"/lawyer"} key={s.id}>
            <Card imgSrc={`/${s.image}`} title={s.title} />
          </Link>
        ))}
      </div>
    </div>
  );
}

export default HeroSection;
