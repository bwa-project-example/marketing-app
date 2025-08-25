"use client";

import { useEffect } from "react";

export default function FacebookPixel() {
  useEffect(() => {
    const pixelId = process.env.NEXT_PUBLIC_FB_PIXEL_ID;
    if (!pixelId) return;

    (async () => {
      const ReactPixel = (await import("react-facebook-pixel")).default;
      ReactPixel.init(pixelId, undefined, { autoConfig: true, debug: false });
      ReactPixel.pageView();
      (window as any).__ReactPixel = ReactPixel;
    })();
  }, []);

  return null;
}
