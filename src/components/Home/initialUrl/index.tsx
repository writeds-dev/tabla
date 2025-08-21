"use client";
import { useEffect } from "react";

export default function InitialUrl() {

  useEffect(() => {
    if (typeof window !== "undefined") {
  
        // Only run on the client
          const hasInitialUrl = sessionStorage.getItem('initial_url');
          if (!hasInitialUrl) {
            const initialUrl = window.location.href;
            sessionStorage.setItem('initial_url', initialUrl);
          }
    }
  }, []);

  return null;
}
