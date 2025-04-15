"use client";
import { Rat, Send } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import Rating from "./Rating";
const CommentInput = ({
  anime_mal_id,
  user_email,
  username,
  anime_title,
  anime_image,
  anime_alt_image,
}) => {
  const [comment, setComment] = useState("");
  const [isCreated, setIsCreated] = useState(false);
  const router = useRouter();
  const [rating, setRating] = useState(0);

  const handleCommentChange = (event) => {
    setComment(event.target.value);
  };
  const handleCommentPosting = async (event) => {
    event.preventDefault();
    if (!comment.trim()) {
      return;
    }
    const data = {
      anime_mal_id,
      user_email,
      username,
      comment,
      anime_title,
      anime_image,
      anime_alt_image,
      rating,
    };
    const response = await fetch("/api/v1/comment", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    const postCommnet = await response.json();
    if (postCommnet.isCreated) {
      setIsCreated(true);
      alert("Komentar Berhasil Terkirim");
      setComment("");
      router.refresh();
    }
  };

  return (
    <>
      <div className="w-full flex flex-col items-center">
        <textarea
          placeholder="Komentar........"
          value={comment}
          type="text"
          className="bg-primary text-secondary w-full h-32 text-md p-2 rounded-md "
          onChange={handleCommentChange}
        />
        <div className="flex items-center w-full justify-between">
          <div className="">
            <Rating rating={rating} setRating={setRating} />
          </div>
          <button
            className="flex items-center justify-center bg-accent text-secondary font-bold w-fit p-2 m-2 rounded-md border border-secondary"
            onClick={handleCommentPosting}
          >
            Kirim <Send color="black" />
          </button>
        </div>
      </div>
    </>
  );
};
export default CommentInput;
