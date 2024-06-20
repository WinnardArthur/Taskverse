import React from "react";
import Image from "next/image";
import Link from "next/link";
import localFont from "next/font/local";

import { cn } from "@/lib/utils";

const headingFont = localFont({ src: "../public/assets/fonts/font.woff2" });

export const Logo = () => {
  return (
    <Link href="/">
      <div className="hover:opacity-75 transition items-center gap-x-2 hidden md:flex">
        <Image
          src={"/assets/images/logo.png"}
          alt="Logo"
          width={30}
          height={30}
        />
        <p
          className={cn("text-lg text-neutral-700 pb-1", headingFont.className)}
        >
          Taskverse
        </p>
      </div>
    </Link>
  );
};
