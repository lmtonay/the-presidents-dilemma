"use client"

import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="p-10">
      <Button variant="default">Click me</Button>
      <Button variant="secondary">Click me</Button>
      <Button variant="danger">Click me</Button>
      <Button variant="ghost">Click me</Button>
      <Button variant="outline">Click me</Button>
      <Button variant="outlineSecondary">Click me</Button>
      <Button variant="outlineDanger">Click me</Button>
      <Button variant="outlineGhost">Click me</Button>
    </div>
  );
}
