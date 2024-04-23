"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";

function BackBtn() {
  const router = useRouter();
  return (
    <button
      className="me-auto fixed bottom-0 left-0"
      onClick={() => router.back()}
    >
      <Image src={"/images/left.svg"} alt="back" width={70} height={70} />
    </button>
  );
}

export default BackBtn;
