"use client";

import { Button } from "@/components/ui/button";
import React from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";

const NextButton: React.FC = () => {
  const pathname = usePathname();
  const isHomePage = pathname === "/";

  return (
    <div className="sticky bottom-5 flex justify-center">
      {isHomePage ? (
        <Button variant="danger" className="text-lg p-5 px-10">
          Next week
        </Button>
      ) : (
        <Link href="/">
          <Button variant="danger" className="text-lg p-5 px-10">
            Go to Main Page
          </Button>
        </Link>
      )}
    </div>
  );
};

export default NextButton;
