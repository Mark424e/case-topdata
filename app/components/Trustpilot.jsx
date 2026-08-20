import React from "react";
import Image from "next/image";

import ReviewCard from "./ReviewCard";

const Trustpilot = ({ reviews }) => {
  return (
    <div>
      <div className="container mx-auto">
        <div className="flex flex-col justify-center items-center space-y-8 py-30">
          <div className="flex space-x-8">
            <p className="text-5xl font-extrabold">Fremragende</p>
            <Image
              src="/trustpilot-rating.svg"
              alt="Trustpilot Rating"
              width={250}
              height={100}
            />
          </div>
          <div className="flex justify-center items-center text-2xl space-x-6">
            <p>bedømt til <strong>4,5</strong> ud af 5 baseret på <strong>437 anmeldelser</strong></p>
            <Image
              src="/trustpilot-logo.svg"
              alt="Trustpilot Logo"
              width={200}
              height={100}
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {reviews.map((review) => (
              <ReviewCard
                key={review.id}
                name={review.name}
                title={review.title}
                comment={review.comment}
                rating={review.rating}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Trustpilot;
