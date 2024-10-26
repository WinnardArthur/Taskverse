import React from "react";
import { Medal } from "lucide-react";
import localFont from "next/font/local";
import { Poppins } from "next/font/google";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const headingFont = localFont({ src: "../../public/assets/fonts/font.woff2" });
const textFont = Poppins({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "600", "800", "900"],
});
const MarketingPage = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <div
        className={cn(
          "flex flex-col items-center justify-self-center",
          headingFont.className
        )}
      >
        <div className="mb-4 flex items-center border shadow-sm p-4 bg-amber-100 text-amber-700 rounded-full uppercase">
          <Medal className="h-6 w-6 mr-2" />
          No 1 task management
        </div>
        <h1 className="text-3xl md:text-6xl text-center text-neutral-800 mb-6">
          Stay Organized and Boost Productivity with
        </h1>
        <div className="text-3xl md:text-6xl bg-gradient-to-r from-fuchsia-600 to-pink-600 text-white px-4 p-2 rounded-md pb-4 w-fit">
          Taskverse
        </div>
      </div>

      <div
        className={cn(
          "text-sm md:text-lg text-neutral-500 mt-4 max-w-xs md:max-w-2xl text-center mx-auto",
          textFont.className
        )}
      >
        Collaborate effectively, manage projects, and attain new productivity
        peaks. From corporate towers to home offices, Taskverse supports your
        team&apos;s unique working style to achieve all your goals.
      </div>

      <Button className="mt-6" size="lg" asChild>
        <Link href={"/sign-up"}>Get Taskverse for free</Link>
      </Button>
    </div>
  );
};

export default MarketingPage;
