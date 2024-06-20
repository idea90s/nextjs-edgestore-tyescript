"use client";

import { useEdgeStore } from "@/lib/edge-store";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function UploadsFile() {
  const [file, setFile] = useState<File>();
  const [urls, setUrls] = useState<{
    url: string;
    thumbnailUrl: string | null;
  }>();
  const [progress, setProgress] = useState(0);
  const { edgestore } = useEdgeStore();

  return (
    <div className="flex flex-col items-center justify-center space-y-10">
      {file && (
        <Image
          src={URL.createObjectURL(file)}
          alt="file"
          width={200}
          height={200}
        />
      )}
      <input
        type="file"
        name=""
        id=""
        onChange={(e) => setFile(e.target.files?.[0])}
      />

      <div className="h-[1em] w-60 rounded overflow-hidden border" >
        <div className="bg-pink-700 h-full transition-all duration-200" style={{ width: `${progress}%`}} />
      </div>

      <button
        onClick={async () => {
          if (!file) return;
          const res = await edgestore.myPublicImages.upload({
            file,
            onProgressChange: (progress) => setProgress(progress),
          });
          setUrls({
            url: res.url,
            thumbnailUrl: res.thumbnailUrl,
          });
        }}
        className="bg-pink-700 hover:bg-pink-900 text-white py-2 px-4 rounded"
      >
        upload
      </button>

      <div className="my-6">
        {urls?.url && (
          <Link href={urls.url} target="_blank">
            URL
          </Link>
        )}
        {urls?.thumbnailUrl && (
          <Link href={urls.thumbnailUrl} target="_blank">
            Thumbnail URL
          </Link>
        )}
      </div>
    </div>
  );
}
