"use client";

import { useEffect } from "react";

export default function TawkToChat() {
  useEffect(() => {
    
    (function () {
      const s1 = document.createElement("script"),
        s0 = document.getElementsByTagName("script")[0];
      s1.async = true;
      s1.src = "https://embed.tawk.to/6805eeb8ff4d5b190c3ba7e0/1ipbip0pn";
      s1.charset = "UTF-8";
      s1.setAttribute("crossorigin", "*");
      if (s0.parentNode) {
        s0.parentNode.insertBefore(s1, s0);
      }
    })();
  }, []);

  return null; 
}