"use client";

import {useEffect} from "react";
import {environment} from "@/constants/env";

export default function FacebookPixel() {
  useEffect(() => {
    const pixelId = process.env.NEXT_PUBLIC_FB_PIXEL_ID;
    const env = process.env.NODE_ENV;
    console.log("Facebook Pixel Env:", env);
    if (!pixelId) return;

    if (env?.toLowerCase() === environment.PRODUCTION) {
      (async () => {
        const ReactPixel = (await import("react-facebook-pixel")).default;
        ReactPixel.init(pixelId, undefined, {autoConfig: true, debug: false});
        ReactPixel.pageView();
        (window as any).__ReactPixel = ReactPixel;
      })();
    }
  }, []);

  return null;
}
