"use client";
import React from "react";

const Phone = () => {
  return (
    <button class=" animate-zoom fixed bottom-4 left-4 md:translate-x-0 bg-blue-500 text-white rounded-full z-50">
      <svg
        class="h-12 w-12 text-white"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        stroke-width="2"
        stroke="currentColor"
        fill="none"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        {" "}
        <path stroke="none" d="M0 0h24v24H0z" />{" "}
        <path d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2" />
      </svg>
    </button>
  );
};

export default Phone;
