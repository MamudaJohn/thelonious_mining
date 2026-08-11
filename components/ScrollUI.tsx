"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

function ScrollUI() {
  const [progress, setProgress] = useState(0);
  const [showSticky, setShowSticky] = useState(false);

  useEffect(() => {
    function handleScroll() {
      const scrolled = window.scrollY;
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      setProgress(docHeight > 0 ? (scrolled / docHeight) * 100 : 0);
      setShowSticky(scrolled > 500);
    }
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <div className="scroll-progress" style={{ width: `${progress}%` }} />
      <div className={`sticky-cta ${showSticky ? "show" : ""}`}>
        <span>Ready to talk?</span>
        <Link href="/contact">Talk to us</Link>
      </div>
    </>
  );
}

export default ScrollUI;