"use client";
import { CldImage } from "next-cloudinary";
import cloudinary from "cloudinary";
import React from "react";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { Addtag } from "./heartaction";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { Forserefresh } from "@/components/forse-refresh";

const View = ({ src, tags }: { src: string; tags: string[] }) => {
  const router = useRouter();
  const [fav, setFav] = useState(tags.includes("favourite"));
  return (
    <div className="relative">
      <CldImage
        className="rounded-lg"
        width="960"
        height="600"
        src={src}
        sizes="100vw"
        alt="Description of my image"
      />
      <div
        onClick={() => {
          setFav(false);
          router.refresh();
          Addtag(src, fav);
        }}
      >
        {fav ? (
          <AiFillHeart className="w-8 h-8 absolute top-0 right-2 mt-2 text-red-500 hover:text-white cursor-pointer duration-300" />
        ) : (
          <AiOutlineHeart className="w-8 h-8 absolute top-0 right-2 mt-2 text-white hover:text-red-500 cursor-pointer duration-300" />
        )}
      </div>
    </div>
  );
};

export default View;
