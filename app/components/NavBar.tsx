import Image from "next/image";
import React from "react";

function NavBar() {
  return (
    <div className="w-100 flex justify-between items-center py-3 px-[50px]">
      <Image
        src={"/images/burger-icon.svg"}
        alt="burger-icon"
        width={48}
        height={48}
      />

      <ul className="flex justify-center gap-5 items-center">
        <li>
          <a href=".">سياسة الخصوصية</a>
        </li>
        <li>
          <a href=".">ارقام التشغيل</a>
        </li>
        <li>
          <a href=".">الدعم الفني</a>
        </li>
        <li>
          <a href=".">اتصل بنا</a>
        </li>
        <li>
          <a href=".">من نحن</a>
        </li>
        <li>
          <a href=".">الرئيسية</a>
        </li>
      </ul>
      <Image src={"/images/logo.svg"} alt="logo" width={138.28} height={67} />
    </div>
  );
}

export default NavBar;
