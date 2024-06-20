import Image from "next/image";
import UploadsFile from "./components/upload-file/UploadFile";

export default function Home() {
  return (
    <div className="m-32">
      <h1 className="text-center text-4xl mb-24">UPLOAD FILE FUNCTION</h1>
      {/* # upload file component */}
      <div className="flex items-center justify-center border-2 py-6">
        <UploadsFile />
      </div>
      {/* # end upload file component */}
    </div>
  );
}
