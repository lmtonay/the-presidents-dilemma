import type { Metadata } from "next";
import { Cinzel, Inter, Noto_Color_Emoji, Tiro_Bangla } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";
import { StatsProvider } from "@/contexts/StatsContext";
import { EventsProvider } from "@/contexts/EventsContext";
import Stats from "./(main)/Stats";

const cinzel = Cinzel({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal"],
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-inter",
});

const notoColorEmoji = Noto_Color_Emoji({
  subsets: ["emoji"],
  weight: "400",
  variable: "--font-noto-color-emoji",
});

const tiroBangla = Tiro_Bangla({
  subsets: ["bengali"],
  weight: "400",
  style: ["normal"],
});

export const metadata: Metadata = {
  title: "The President's Dilemma",
  description: "A game to govern your desired state like a president.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <EventsProvider>
      <StatsProvider>
        <html>
          <body
            className={cn(
              cinzel.className,
              inter.className,
              notoColorEmoji.className,
              tiroBangla.className,
              "antialiased"
            )}
          >
            <ResizablePanelGroup direction="horizontal">
              <ResizablePanel minSize={20}>
                <div className="h-screen overflow-auto scroll">
                  <Stats />
                </div>
              </ResizablePanel>
              <ResizableHandle withHandle />
              <ResizablePanel defaultSize={50} minSize={20}>
                <div className="h-screen overflow-auto scroll">{children}</div>
              </ResizablePanel>
              <ResizableHandle withHandle />
              <ResizablePanel minSize={20}>
                <div className="h-screen overflow-auto scroll">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Excepturi, nesciunt? Odio nobis nihil, ullam molestiae aut
                  quidem officia quod accusamus ipsum, quae tempore labore iusto
                  assumenda alias provident nemo. Eveniet assumenda maiores
                  molestias veritatis eos consequuntur accusamus odio nesciunt,
                  dolor perferendis explicabo ad sunt expedita maxime soluta eum
                  est. Numquam alias saepe natus accusamus, earum ipsam repellat
                  excepturi consequuntur consequatur voluptatibus sint
                  perspiciatis iusto minima quia, in sed consectetur expedita,
                  quos quasi vel commodi minus nemo aut? Mollitia repellendus
                  architecto laborum at amet repudiandae molestiae est
                  voluptatibus fugiat porro temporibus, rerum reiciendis
                  dignissimos suscipit nostrum voluptate hic sit ratione
                  expedita possimus perferendis sequi. Voluptatem, aliquid
                  praesentium? Modi quod vero ducimus quas nihil animi quis
                  corporis saepe atque neque, laudantium consectetur facere
                  harum voluptas. Eveniet, cum? Fugiat, deserunt ullam deleniti
                  itaque perspiciatis repudiandae dicta, omnis ab, tenetur iure
                  aperiam porro? Sunt eaque nesciunt maiores veniam accusamus
                  laboriosam expedita consequatur similique molestias ipsum
                  quos, incidunt suscipit? Eos, obcaecati fugit delectus tempore
                  illum in dolores dolore, fuga quam nesciunt vero natus qui
                  officia! Quia minima reprehenderit, assumenda sit nihil ipsa
                  officiis nostrum quibusdam iure! Quaerat suscipit est quae,
                  labore illo dicta perferendis perspiciatis officia alias
                  facere accusamus sequi earum maiores ratione praesentium
                  officiis?
                </div>
              </ResizablePanel>
            </ResizablePanelGroup>
          </body>
        </html>
      </StatsProvider>
    </EventsProvider>
  );
}
