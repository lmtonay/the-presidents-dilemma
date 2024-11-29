"use client";

import { Button } from "@/components/ui/button";
import React from "react";

const NextButton: React.FC = () => {
  return (
    <div className="sticky bottom-5 flex justify-center">
      <Button variant="danger" className="text-lg p-5 px-10">
        Next week
      </Button>
    </div>
  );
};

export default NextButton;
