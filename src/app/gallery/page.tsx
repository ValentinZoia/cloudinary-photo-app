"use client";
import { Button } from "@/components/ui/button";
import { Upload } from "lucide-react";
import { CldUploadWidget } from "next-cloudinary";

import React, { useState } from "react";

export default function GalleryPage() {
  const [imageId, setImageId] = useState<string>("");

  return (
    <main>
      <section>
        <div className="flex justify-between">
          <h1 className="text-4xl font-bold">Gallery</h1>
          <CldUploadWidget
            uploadPreset="yh61a5a8"
            onSuccess={(result) => {
              const info = result.info as { public_id: string };
              setImageId(info.public_id);
            }}
          >
            {({ open }) => {
              return (
                <Button variant="blue" onClick={() => open()}>
                  <Upload className="mr-2 h-4 w-4" />  
                  Upload
                </Button>
                
              );
            }}
          </CldUploadWidget>
        </div>
      </section>
    </main>
  );
}
