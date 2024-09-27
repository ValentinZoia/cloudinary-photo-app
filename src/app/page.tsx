"use client";
import { CldImage, CldUploadWidget } from "next-cloudinary";
import { useState } from "react";

export default function Home() {
  const [imageId, setImageId] = useState<string>("");

  return (
    <main className="w-full h-screen flex justify-center items-center">
      <CldUploadWidget
        uploadPreset="yh61a5a8"
        onSuccess={(result) => {
          const info = result.info as { public_id: string };
          setImageId(info.public_id);
          
        }}
      >
        {({ open }) => {
          return (
            <button
              className="text-white bg-blue-500 px-4 py-2 rounded-lg"
              onClick={() => open()}
            >
              Upload
            </button>
          );
        }}
      </CldUploadWidget>
      {imageId && (
        <CldImage
          width="960"
          height="600"
          src={imageId}
          sizes="100vw"
          alt="Description of my image"
        />
      )}
    </main>
  );
}
