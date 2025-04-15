"use client";
import { useState } from "react";
import { Bookmark } from "lucide-react";

const CollectionButton = ({
  anime_mal_id,
  user_email,
  anime_image,
  anime_title,
  anime_alt_image,
  initialCollectionStatus,
}) => {
  const [isCreated, setIsCreated] = useState(initialCollectionStatus);

  const handleCollection = async (event) => {
    event.preventDefault();

    const data = {
      anime_mal_id,
      user_email,
      anime_image,
      anime_title,
      anime_alt_image,
    };

    const method = isCreated ? "DELETE" : "POST";

    const response = await fetch("/api/v1/collection", {
      method,
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    const result = await response.json();

    if (method === "POST" && result.isCreated) {
      setIsCreated(true);

      alert("Anime Berhasil Ditambahakan ke Koleksi");
    } else if (method === "DELETE" && result.isDeleted) {
      setIsCreated(false);
      alert("Anime Dihapus dari Koleksi");
    }
  };

  const fillClass = isCreated ? "fill-accent" : "fill-gray-700";
  const size = isCreated ? 50 : 40;

  return (
    <Bookmark
      onClick={handleCollection}
      className={`cursor-pointer text-primary absolute right-0 -top-3 z-10 transition-all duration-300 stroke-secondary ${fillClass}`}
      size={size}
    />
  );
};

export default CollectionButton;
