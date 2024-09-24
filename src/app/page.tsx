import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <h1 className="text-red-500 text-3xl underline">Hello</h1>
      <Link href="/contact">Contact</Link>
    </main>
  );
}
