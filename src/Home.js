import React, { useEffect } from "react";
export default function Home() {
  useEffect(() => {
    document
      .querySelector('meta[property="og:title"]')
      .setAttribute("content", "Dynamic Title");
    document
      .querySelector('meta[property="og:description"]')
      .setAttribute("content", "Dynamic Description");
    document
      .querySelector('meta[property="og:image"]')
      .setAttribute("content", "https://example.com/dynamic-image.jpg");
  }, []); // Empty dependency array to run the effect only once

  // Function to share on LinkedIn
  const handleLinkedInShare = () => {
    const sharedUrl = "https://share-functionality.vercel.app/";
    const linkedInShareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(
      sharedUrl
    )}`;
    console.log("LinkedIn Share URL:", linkedInShareUrl);
    window.open(linkedInShareUrl, "_blank");
  };

  // Function to share on WhatsApp
  const handleWhatsAppShare = () => {
    const websiteUrl = "https://s5tqkf.csb.app/page";
    const shareUrl = `https://wa.me/?text=${encodeURIComponent(websiteUrl)}`;
    console.log(shareUrl);
    window.open(shareUrl, "_blank");
  };
  const handleTwitterShare = async () => {
    const url = "https://mw5hz5.csb.app/page";
    if (navigator.share) {
      try {
        await navigator.share({
          url,
        });
      } catch (error) {
        console.error("Error sharing:", error);
      }
    } else {
      const twitterShareUrl = `https://twitter.com/intent/tweet?url=${encodeURIComponent(
        url
      )}`;
      window.open(twitterShareUrl, "_blank");
    }
  };
  return (
    <>
      <h1>Dynamic Title</h1>
      {/* Other content */}
      <button onClick={handleLinkedInShare}>Share via LinkedIn</button>
      <button onClick={handleWhatsAppShare}>Share via WhatsApp</button>
      <button onClick={handleTwitterShare}>Share via Twitter</button>
    </>
  );
}
