"use client";
import React, { useEffect } from "react";

const RegisterSW = () => {
  useEffect(() => {
    if ("serviceWorker" in navigator) {
      window.addEventListener("load", () => {
        navigator.serviceWorker.register("/service-worker.js").then(
          (registration) => {
            console.log(
              "ServiceWorker registration successful with scope: ",
              registration.scope,
            );
          },
          (err) => {
            console.log("ServiceWorker registration failed: ", err);
          },
        );
      });
    }
  }, []);

  return null;
};

export default RegisterSW;
