import React, { useEffect, useState } from "react";
import { SearchResult } from "../gallery/page";
import CloudinaryImage from "../gallery/cloudinary-image";
import ImageGrid from "@/components/image-grid";

interface FavoritesListProps {
  initialResources: SearchResult[];
}

export default function FavoritesList({
  initialResources,
}: FavoritesListProps) {
  const [resources, setResources] = useState(initialResources);

  useEffect(() => {
    setResources(initialResources);
  }, [initialResources]);

  return (
    <ImageGrid
      result={resources}
      getImage={(imageData: SearchResult) => {
        return (
          <CloudinaryImage
            public_id={imageData.public_id}
            imageData={imageData}
            onFavorite={(unheartedResource) => {
                setResources((currentResources)=>
                    currentResources.filter(
                        (resource) => resource.public_id !== unheartedResource.public_id
                    ))
            }}
          />
        );
      }}
    />
  );
}
