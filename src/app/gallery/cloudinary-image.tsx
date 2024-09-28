"use client";

import { CldImage } from "next-cloudinary";

interface CloudinaryImageProps {
    public_id: string
}

export default function CloudinaryImage({public_id}: CloudinaryImageProps) {
  return (
    <CldImage
      key={public_id}
      width="300"
      height="300"
      src={public_id}
      sizes="100vw"
      alt="Description of my image"
    />
  );
}
