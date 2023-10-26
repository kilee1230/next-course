"use client";
import { CldImage, CldUploadWidget } from "next-cloudinary";
import React, { useState } from "react";

interface CloudinaryResult {
  public_id: string;
}

const UploadPage = () => {
  const [publicId, setPublicId] = useState("");

  return (
    <>
      {publicId && (
        <CldImage src={publicId} width={270} height={180} alt="testing" />
      )}

      <CldUploadWidget
        uploadPreset="twphyu6y"
        options={{
          sources: ["local"],
          multiple: false,
          maxFiles: 5,
          showAdvancedOptions: true,
          styles: {
            palette: {
              window: "#ffffff",
              sourceBg: "#f4f4f5",
              windowBorder: "#90a0b3",
              tabIcon: "#000000",
              inactiveTabIcon: "#555a5f",
              menuIcons: "#555a5f",
              link: "#0433ff",
              action: "#339933",
              inProgress: "#0433ff",
              complete: "#339933",
              error: "#cc0000",
              textDark: "#000000",
              textLight: "#fcfffd",
            },
            fonts: {
              default: null,
              "sans-serif": {
                url: null,
                active: true,
              },
            },
          },
        }}
        onUpload={(result, widget) => {
          if (result.event !== "success") return;
          const info = result.info as CloudinaryResult;
          console.log({ info, pubc: info.public_id });
          setPublicId(info.public_id);
        }}
      >
        {({ open }) => (
          <button className="btn btn-primary" onClick={() => open()}>
            Upload
          </button>
        )}
      </CldUploadWidget>
    </>
  );
};

export default UploadPage;
