import React from "react";
import Profile from "../components/Profile";
import Info from "../components/Info";

function page({ params: { id } }: { params: { id: string } }) {
  return (
    <div className="flex justify-end gap-3 flex-wrap items-start px-[40px] py-10">
      <Info id={id} />
      <Profile id={id} />
    </div>
  );
}

export default page;
