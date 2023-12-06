"use client";
import React from "react";
import { useState } from "react";
import { useForm } from "react-hook-form";

const Chat = () => {
  const [isChatVisible, setIsChatVisible] = useState(false);
  const toggleChatVisibility = () => {
    setIsChatVisible(!isChatVisible);
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  console.log(errors);

  return (
    <div class="relative">
      <button
        class=" animate-pulse fixed bottom-4 right-4 z-50 bg-blue-500 hover:bg-blue-700 text-white font-bold rounded-full"
        onClick={toggleChatVisibility}
      >
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
            d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z"
          />
        </svg>
      </button>
      <div
        className={`${
          isChatVisible ? "block" : "hidden"
        } fixed absolute right-0 mt-2 bg-white text-black p-4 rounded-lg shadow-lg`}
      >
        <form onSubmit={handleSubmit(onSubmit)}>
          <input
            type="text"
            placeholder="Họ và tên"
            {...register("First name", { required: true, maxLength: 80 })}
          />
          <input
            type="tel"
            placeholder="Số điện thoại"
            {...register("Mobile number", {
              required: true,
              minLength: 6,
              maxLength: 12,
            })}
          />
          <input
            type="text"
            placeholder="Tin nhắn"
            {...register("text", { required: true })}
          />

          <input type="submit" />
        </form>
      </div>
    </div>
  );
};

export default Chat;
