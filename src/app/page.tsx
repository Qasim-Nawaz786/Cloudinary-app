"use client";
import { CldUploadButton } from "next-cloudinary";
import { CldImage } from "next-cloudinary";
import { useState } from "react";
import { Button } from "@/components/ui/button";

export interface Buttonupload {
  event: "success";
  info: { public_id: string };
}

export default function Home() {
  const [imageId, setImageId] = useState("ekqlu4vmqzzwnsqofvnc");
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Button
        asChild
        className="bg-slate-500 text-white font-semibold  p-4 mb-4 cursor-pointer"
      >
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6  "
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5"
            />
          </svg>
          <CldUploadButton
            className="pl-2"
            uploadPreset="cr0qrjen"
            onUpload={(result) => {
              let res = result as Buttonupload;
              setImageId(res.info.public_id);
            }}
          />
        </div>
      </Button>

      <CldImage
        width="960"
        height="600"
        src={imageId}
        sizes="100vw"
        alt="Description of my image"
      />
    </main>
  );
}
