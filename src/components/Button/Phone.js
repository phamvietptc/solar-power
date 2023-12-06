"use client";
import React from "react";

const Phone = () => {
  return (
    <button class="animate-bounce fixed bottom-4 left-4 md:hidden bg-blue-500 text-white rounded-full z-50">
      <a href="tel:(+84) 399 580 085">
        <svg
          class="h-12 w-12 text-white p-2"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
          />
        </svg>
      </a>
    </button>
  );
};

export default Phone;
