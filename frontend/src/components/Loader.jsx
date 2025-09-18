import React from "react";
import { ClipLoader } from "react-spinners";

export default function Loader() {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-white z-50">
      <ClipLoader color="#2563EB" size={50} />
    </div>
  );
}
