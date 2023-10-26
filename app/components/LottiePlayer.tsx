"use client";

import "@dotlottie/react-player/dist/index.css";

import { DotLottiePlayer } from "@dotlottie/react-player";
import React from "react";

const LottiePlayer = ({ data }: { data: any }) => {
  return (
    <div className="flex items-center justify-center h-1/4 w-1/4">
      <DotLottiePlayer src={data} autoplay loop />
    </div>
  );
};

export default LottiePlayer;
