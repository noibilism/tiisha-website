"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export function DetectedBanner({ market, name }: { market: string; name: string }) {
  const [show, setShow] = useState(false);
  useEffect(() => {
    try {
      if (sessionStorage.getItem("tiisha_detected") === market) {
        setShow(true);
        sessionStorage.removeItem("tiisha_detected");
      }
    } catch {}
  }, [market]);
  if (!show) return null;
  return (
    <div className="detected on-dark" role="status">
      <span className="msg">Looks like you are in {name}. Showing Tiisha for {name}.</span>
      <Link href="#markets" onClick={() => setShow(false)}>
        Change
      </Link>
      <button type="button" onClick={() => setShow(false)} aria-label="Dismiss">
        Dismiss
      </button>
    </div>
  );
}
