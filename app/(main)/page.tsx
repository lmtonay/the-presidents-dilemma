"use client";

import Events from "./Events";
import Header from "./Header";
import NextButton from "./NextButton";

export default function Home() {
  return (
    <div className="relative">
      <Header />
      <Events />
      <NextButton />
    </div>
  );
}
