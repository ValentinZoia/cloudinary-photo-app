
import CloudinaryImage from "./cloudinary-image";
import ImageGrid from "@/components/image-grid";
import { SearchResult } from "./page";


export default async function GalleryGrid({images}: {images:SearchResult[]}) {
  

  return (
    <main>
      
          <ImageGrid
            result={images}
            getImage={(image: SearchResult) => {
              return (
                <CloudinaryImage public_id={image.public_id} imageData={image} />
              );
            }}
          />
        
    </main>
  );
}
