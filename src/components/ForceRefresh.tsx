"use client"
import { useRouter } from 'next/navigation';
import React from 'react'

export default function ForceRefresh() {
    const router = useRouter();
    router.refresh();

  return (
    <>
    </>
  )
}
