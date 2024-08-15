import { Github } from 'lucide-react';
import dynamic from 'next/dynamic';
import Link from 'next/link';

const MapComponent = dynamic(() => import('./_components/MapComponent'), {
  ssr: false,
});

export default function Home() {
  return (
    <div className="h-dvh flex flex-col">
      <div className="bg-gray-200 border-b">
        <div className="flex items-center justify-between px-5 py-3 container mx-auto">
          <h1 className="text-xl font-bold">Map</h1>
          <Link href={"https://github.com/codewitham/map"}>
            <button className="h-10 w-10 rounded-md bg-slate-800 hover:bg-slate-600 flex items-center justify-center text-white">
              <Github className="h-4 w-4" />
            </button>
          </Link>
        </div>
      </div>
      <div className="flex-1 flex flex-col justify-center items-center p-5">
        <div className="h-[500px] max-w-[800px] w-full border-8 border-gray-200 rounded-lg overflow-hidden">
          <MapComponent />
        </div>
      </div>
    </div>
  );
}
