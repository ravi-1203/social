import React, { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    if (typeof window !== "undefined") {
      // Code inside this block will only execute in the browser environment
      document.title = "My Page Title";
      const ogDescriptionMetaTag = document.getElementById("og-description");
      console.log(ogDescriptionMetaTag.getAttribute("content"));
      if (ogDescriptionMetaTag) {
        ogDescriptionMetaTag.setAttribute(
          "content",
          "New description for social media sharing"
        );
      }
    }
  }, []);

  return <div>Page</div>;
}
