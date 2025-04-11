// components/shared/ResumeUploader.tsx
"use client";
import { useState } from 'react';

export default function ResumeUploader() {
  const [file, setFile] = useState<File | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) setFile(e.target.files[0]);
  };

  const handleUpload = async () => {
    if (!file) return;
    const formData = new FormData();
    formData.append('resume', file);
    await fetch('/api/upload', {
      method: 'POST',
      body: formData,
    });
  };

  return (
    <div>
      <input type="file" onChange={handleChange} />
      <button
        onClick={handleUpload}
        className="bg-green-600 text-white px-4 py-2 rounded-xl mt-2"
      >
        Upload Resume
      </button>
    </div>
  );
}