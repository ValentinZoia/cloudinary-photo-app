"use client";


import { CldImage } from "next-cloudinary";
import { setAsFavoriteAction } from "./actions";
import { useState, useTransition } from "react";

import { HeartFilledIcon, HeartIcon } from "@radix-ui/react-icons";
import { usePathname } from "next/navigation";
import { SearchResult } from "./page";

interface CloudinaryImageProps {
  public_id: string;
  imageData: SearchResult;
  onFavorite?:( unheartedResource:SearchResult) => void
}

export default function CloudinaryImage({ public_id, imageData, onFavorite }: CloudinaryImageProps) {
  const isFavorite = imageData.tags.includes("favorite");
  const [trasition, startTransition] = useTransition()
  const [changeColor, setChangeColor] = useState<boolean>(isFavorite);//this is only for the user experience
  
  
  return (
    <>
      <div className="relative max-w-[300px]">
        <CldImage
          key={public_id}
          width="300"
          height="300"
          src={public_id}
          sizes="100vw"
          alt="Description of my image"
        />
        {
        changeColor
        ?(
         <>
         
         <HeartFilledIcon className="absolute top-2 right-2 mr-2 h-6 w-6 text-red-500 cursor-pointer hover:text-red-500 " onClick={()=>{
          onFavorite?.(imageData)
          setChangeColor(false);
          startTransition(()=>{
            setAsFavoriteAction(public_id, true)
          })
          
        }} />
         
         </> 
        )
        :(
          <>
          <HeartIcon className="absolute top-2 right-2 mr-2 h-6 w-6 cursor-pointer hover:text-red-500 " onClick={()=>{
          setChangeColor(true);
          startTransition(()=>{
            setAsFavoriteAction(public_id, false)
          })
          
        }} />
          </>
        )
        }

        
      </div>
    </>
  );
}
