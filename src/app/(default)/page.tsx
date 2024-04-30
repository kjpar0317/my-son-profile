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
            cardWidth={450}
            cardHeight={300}
            parseDetailsAsHTML
            slideShow
          />
        )}
      </div>
    </main>
  );
}
