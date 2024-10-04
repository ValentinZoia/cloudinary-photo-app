"use client"
import { SearchResult } from '@/app/gallery/page';
import React, { ReactNode } from 'react';

interface ImageGridProps {
  result: SearchResult[];
  getImage: (imageData: SearchResult) => ReactNode;
}

export default function ImageGrid({ result, getImage }: ImageGridProps) {
  const MAX_COLUMNS = 5;

  function getColumns(colIndex: number) {
    return result.filter(
      (resources, index) => index % MAX_COLUMNS === colIndex
    );
  }

  // Check if result is an array before proceeding
  if (!Array.isArray(result)) {
    return <div>No results available</div>;
  }

  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
      {[getColumns(0), getColumns(1), getColumns(2), getColumns(3), getColumns(4)].map(
        (column, index) => (
          <div key={index} className="flex flex-col gap-4">
            {column && column.map(getImage)}
          </div>
        )
      )}
    </div>
  );
}
