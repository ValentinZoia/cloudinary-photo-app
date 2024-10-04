

import cloudinary from "cloudinary";
import CloudinaryImage from "../gallery/cloudinary-image";
import ForceRefresh from "@/components/ForceRefresh";
import FavoritesList from "./favorites-list";


type SearchResult = {
  
  public_id: string;
  tags: string[];

};
export default async function FavoritesPage() {
  const result = (await cloudinary.v2.search
    .expression(`resource_type:image AND tags:'favorite'`)
    .sort_by("created_at", "desc")
    .with_field("tags")
    .max_results(30)
    .execute()) as { resources:SearchResult[]};

    


  return (
    <main>
      <ForceRefresh />
      <div className="flex flex-col gap-8">
        <section>
        <div className="flex justify-between">
          <h1 className="text-4xl font-bold">Favorites</h1>
          
        </div>
      </section>
      <section>
        <FavoritesList initialResources={result.resources} />
      </section>
      </div>
      
    </main>
  );
}
