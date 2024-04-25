"use client";
import React, { useState } from "react";

const Summerize = (text: string) => {
  const [summary, setSummary] = useState<string>("");

  const handleClick = async (body: string) => {};
  return (
    <>
      <div>
        <button
          className="p-3 my-5 backdrop-blur-0 bg-slate-600 text-white font-bold text-center rounded-lg"
          onClick={() => handleClick(text)}
        >
          要約する
        </button>
      </div>
      <div className="w-full">
        <div className="min-w-[100px] min-h-[100px] bg-white my-10 rounded-lg"></div>
      </div>
    </>
  );
};

export default Summerize;
