import { CldImage } from "next-cloudinary";
import UploadButton from "./upload-button";
import cloudinary from "cloudinary";
import CloudinaryImage from "./cloudinary-image";

type SearchResult = {
  
      public_id: string;
    
};
export default async function GalleryPage() {
  const result = (await cloudinary.v2.search
    .expression(`resource_type:image`)
    .sort_by("public_id", "desc")
    .max_results(5)
    .execute()) as { resources:SearchResult[]};
   

  return (
    <main>
      <div className="flex flex-col gap-8">
        <section>
        <div className="flex justify-between">
          <h1 className="text-4xl font-bold">Gallery</h1>
          <UploadButton />
        </div>
      </section>
      <section>
        <div className="grid grid-cols-4 gap-4">
          {result &&
          result.resources.map((file) => (
            <div key={file.public_id}>
              <CloudinaryImage public_id={file.public_id} />
            </div>
            
          ))}
        </div>
      </section>
      </div>
      
    </main>
  );
}
