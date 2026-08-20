"use client";

import React, { useState } from "react";
import Image from "next/image";

const ReviewCard = ({ name, rating, comment, title }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="bg-primary/5 p-6 rounded shadow-md">
      <div>
        {rating >= 5 && (
          <Image
            src="/trustpilot-rating.svg"
            alt="Rating"
            width={125}
            height={20}
          />
        )}
      </div>
      <div className="space-y-2 mt-4">
        <p className="opacity-50">Af {name}</p>
        <p className="text-lg font-bold">{title}</p>
        <div>
          <p className={isExpanded ? "line-clamp-none" : "line-clamp-3"}>
            {comment}
          </p>
          {comment.length > 180 && (
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="opacity-50 hover:opacity-100 transition duration-300 mt-2 cursor-pointer"
            >
              {isExpanded ? "Vis mindre" : "Vis mere"}
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ReviewCard;
