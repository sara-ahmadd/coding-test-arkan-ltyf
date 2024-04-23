import Image from "next/image";
import Link from "next/link";
import React from "react";

function LawyerCard({
  imgSrc,
  title,
  subtitle,
  id,
}: {
  imgSrc: string;
  title: string;
  subtitle: string;
  id: string;
}) {
  return (
    <Link
      href={`/details/${id}`}
      role="button"
      className="w-[282px] h-[270px] rounded-[30px] card-shadow card-shadow flex flex-col justify-center items-center lawyer-card"
    >
      <Image
        src={imgSrc}
        alt="محكم"
        width={125}
        height={125}
        className="rounded-full "
      />

      <h4 className="text-[20px] font-bold flex gap-2">
        {title}
        <Image
          src={"/images/treu.svg"}
          alt="right"
          width={13.39}
          height={13.39}
        />
      </h4>
      <h4 className="text-[14px] font-normal gray-color flex gap-2">
        {" "}
        <Image
          src={"/images/crown.svg"}
          alt="right"
          width={13.39}
          height={13.39}
        />
        {subtitle}
      </h4>
      <h4 className="text-[12px] flex gap-2">
        4.56 (35 مراجعة)
        <Image
          src={"/images/star.svg"}
          alt="right"
          width={13.39}
          height={13.39}
        />
      </h4>
    </Link>
  );
}

export default LawyerCard;
