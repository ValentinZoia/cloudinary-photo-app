"use client"
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react'
import { Button } from '../ui/button';
import { Heart, Images, Library } from 'lucide-react';

export default function SideMenu() {
  
    const pathname = usePathname();
  return (
    <div className="pb-12 w-1/4">
      <div className="space-y-4 py-4">
        <div className="px-3 py-2">
          <h2 className="mb-2 px-4 text-lg font-semibold tracking-tight">
            Manage
          </h2>
          <div className="space-y-1">
            <Link href="/gallery">
              <Button variant={pathname === '/gallery' ? 'secondary' : 'ghost'} className="w-full justify-start">
                <Images className="mr-2 h-4 w-4" />
                Gallery
              </Button>
            </Link>
            
            <Link href="/albums">
            <Button variant={pathname === '/albums' ? 'secondary' : 'ghost'} className="w-full justify-start">
              <Library className="mr-2 h-4 w-4" />
              Albums
            </Button>
            </Link>

            <Link href="/favorites">
            <Button variant={pathname === '/favorites' ? 'secondary' : 'ghost'} className="w-full justify-start">
              <Heart className="mr-2 h-4 w-4" />
              Favorites
            </Button>
            </Link>


          </div>
        </div>
      </div>
    </div>
  );
}
  
