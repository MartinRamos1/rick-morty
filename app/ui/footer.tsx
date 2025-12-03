import Link from "next/link";


export default function Footer() {
  return (
    <div className="border-t border-gray-200 text-lg bg-gray-100 text-gray-500 text-center p-4 flex items-center justify-center gap-4">    
      <Link target="_blank" className="text-gray-500 hover:underline hover:text-orange-500" href="https://github.com/MartinRamos1/rick-morty">GitHub</Link>
    </div>
  );
}