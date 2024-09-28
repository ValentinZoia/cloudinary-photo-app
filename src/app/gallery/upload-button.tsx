

"use client";
import { Button } from "@/components/ui/button";
import { Upload } from "lucide-react";
import { CldUploadWidget } from "next-cloudinary";


export default function UploadButton() {
  return (
    <main>
      <section>
        <div className="flex justify-between">
          
          <CldUploadWidget uploadPreset="yh61a5a8" onSuccess={(result) => {}}>
            {({ open }) => {
              return (
                <Button variant="blue" onClick={() => open()} >
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
