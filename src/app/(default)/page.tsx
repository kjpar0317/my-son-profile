"use client";

import type { ReactElement } from "react";

import { useState, useEffect } from "react";
import { Chrono } from "react-chrono";

import { items } from "@/constant/data";

export default function HomePage(): ReactElement {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true); // Component has mounted, update state to trigger re-render
  }, []);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="relative w-full flex">
        {isClient && (
          <Chrono
            items={items}
            mode="HORIZONTAL"
            cardWidth={800}
            cardHeight={600}
            parseDetailsAsHTML
            slideShow
            highlightCardsOnHover
            disableInteraction={true}
            enableLayoutSwitch={false}
            enableQuickJump={false}
            allowDynamicUpdate
            // className="bg-base-200"
            mediaSettings={{ align: "right", fit: "contain" }}
            theme={{
              // primary: 'red',
              // secondary: 'blue',
              cardBgColor: "bg-base-300",
              // titleColor: 'black',
              // titleColorActive: 'red',
            }}
            classNames={{
              card: "bg-base-300 text-base-content",
              cardMedia: "bg-base-200 text-base-content",
              cardSubTitle: "bg-base-200 text-base-content",
              cardText: "bg-base-200 text-base-content",
              cardTitle: "bg-base-200 text-base-content",
              controls: "bg-base-200 text-base-content",
              title: "bg-base-200 text-base-content",
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
