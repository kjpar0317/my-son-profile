"use client";

import type { ReactElement } from "react";

import { useState, useEffect } from "react";
import { Chrono } from "react-chrono";
import useSound from "use-sound";

import { convertTimeline } from "@/util/timeline-utils";
import BgVideo from "@/assets/videos/background.mp4";
import BgSound from "@/assets/sounds/moonEmbracingTheSun.mp3";

export default function HomePage(): ReactElement {
  const [isClient, setIsClient] = useState(false);
  const [timelines, setTimelines] = useState([]);
  const [play, { stop }] = useSound(BgSound);

  useEffect(() => {
    stop();
    play();
    getTimelines();
    setIsClient(true); // Component has mounted, update state to trigger re-render
  }, [play, stop]);

  async function getTimelines() {
    const res = await fetch(`/api/timeline`);
    const result = await res.json();
    return setTimelines(result);
  }

  return (
    <main className="flex min-h-screen w-full h-full flex-col items-center justify-between pt-10">
      <video
        src={BgVideo}
        autoPlay
        loop
        muted
        className="w-full h-screen object-cover absolute top-0"
      />
      <div className="relative w-11/12 h-[calc(100vh_-_65px)] flex overflow-y-auto">
        {isClient && timelines && (
          <Chrono
            items={convertTimeline(timelines)}
            mode="HORIZONTAL"
            cardWidth={450}
            cardHeight={600}
            // itemWidth={500}
            mediaHeight={450}
            parseDetailsAsHTML
            slideShow
            slideItemDuration={5000}
            highlightCardsOnHover
            // disableInteraction={true}
            enableLayoutSwitch={false}
            enableQuickJump={false}
            allowDynamicUpdate
            showAllCardsHorizontal
            // scrollable
            mediaSettings={{ align: "right", fit: "contain" }}
            textDensity="LOW"
            className="bg-black"
            theme={{
              primary: "#865E92",
              secondary: "#E1FAC5",
              cardBgColor: "#E9E2EB",
              cardForeColor: "#E9E2EB",
              titleColor: "#08ACBC",
              titleColorActive: "#0A86F3",
              cardTitleColor: "#485639",
              cardSubtitleColor: "#485639",
            }}
            classNames={{
              title: "bg-slate-300",
            }}
            buttonTexts={{
              first: "처음",
              last: "마지막",
              next: "다음",
              previous: "이전",
              play: "재생",
            }}
          />
        )}
      </div>
    </main>
  );
}
