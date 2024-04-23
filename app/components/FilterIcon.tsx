"use client";
import axios from "axios";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { getCountries } from "../lib/getCountries";
import { getCities } from "../lib/getCities";

function FilterIcon({ showList }: { showList: () => void }) {
  return (
    <div>
      <button className="absolute top-4 left-[30px]" onClick={showList}>
        <Image src={"/images/filter.svg"} alt="filter" width={32} height={32} />
      </button>
    </div>
  );
}

export default FilterIcon;
