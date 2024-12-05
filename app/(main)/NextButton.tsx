"use client";

import { Button } from "@/components/ui/button";
import React from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";

const NextButton: React.FC = () => {
  const pathname = usePathname();
  const isHomePage = pathname === "/";

  return (
    <div className="sticky bottom-0 w-full bg-red-500 text-white overflow-hidden rounded-t">
      {isHomePage ? (
        <Button variant="ghost" className="text-lg w-full text-white">
          Next week
        </Button>
      ) : (
        <Link href="/">
          <Button variant="ghost" className="text-lg w-full text-white">
            Go to Main Page
          </Button>
        </Link>
      )}
    </div>
  );
};

export default NextButton;
