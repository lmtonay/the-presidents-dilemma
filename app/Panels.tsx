"use client";

import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";
import Stats from "./(main)/Stats";
import Actions from "./(main)/Actions";
import NewGame from "./NewGame";
import Header from "./(main)/Header";
import NextButton from "./(main)/NextButton";
import dynamic from "next/dynamic";

interface PanelProps {
  children: React.ReactNode;
}

const Panel: React.FC<PanelProps> = ({ children }) => {
  return (
    <main className="relative">
      <ResizablePanelGroup direction="horizontal">
        <ResizablePanel minSize={20} defaultSize={25}>
          <div className="h-screen overflow-auto scroll">
            <Stats />
          </div>
        </ResizablePanel>
        <ResizableHandle withHandle />
        <ResizablePanel defaultSize={50} minSize={20}>
          <div className="relative h-screen">
            <Header />
            <div className="h-screen overflow-auto scroll pb-[200px]">{children}</div>
            <NextButton />
          </div>
        </ResizablePanel>
        <ResizableHandle withHandle />
        <ResizablePanel minSize={20} defaultSize={25}>
          <div className="h-screen overflow-auto scroll">
            <Actions />
          </div>
        </ResizablePanel>
      </ResizablePanelGroup>
      <NewGame />
    </main>
  );
};

export default dynamic(() => Promise.resolve(Panel), {
  ssr: false,
});
