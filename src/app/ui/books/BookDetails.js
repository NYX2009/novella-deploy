import React from "react";
import Image from "next/image";
import BuyOrRent from "./BuyRent";

const BookDetails = ({ book }) => {
  return (
    <div className="pl-20 flex flex-col items-center justify-center text-black">
      <div className="mb-2">
        {book && book.cover && ( // Check if book and cover exist before rendering Image
          <Image
            className="mr-2 rounded-md"
            src={book.cover}
            alt={`Cover image for ${book.title}`}
            width={300}
            height={300}
            priority={true}
          />
        )}
      </div>
      <div className="p-4 flex flex-col items-center justify-center ">
        <p className="text-3xl">
          {book ? `${book.title} by ${book.author}` : "Loading..."}
        </p>
        <p className="mt-3 md:w-2/3">{book ? book.description : "Loading..."}</p>
        <div className="text-xl mt-3 mb-5">
          {book && (
            <p>
              {book.genre} - {book.pages} pages -{" "}
              {book.stock ? `${book.stock} pieces are in stock` : `No Stock`}
            </p>
          )}
        </div>
        {book && <BuyOrRent book={book} />}
      </div>
    </div>
  );
};

export default BookDetails;