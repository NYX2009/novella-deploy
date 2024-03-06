import Image from "next/image";
import Link from "next/link";

const BookCard =({book}) => {
    return(
        <Link href={`/store/${book.id}`}>
        <div className="flex flex-col items-center rounded-xl h-70 m-6 bg-gray-50 p-5  shadow-lg">
            <div className="mb-2 h-13">
                <Image
                className="mr-2 rounded-md"
                src={book.cover}
                alt={book.title}
                width={150}
                height={100}
                style={{height: "200px" ,width: "auto"}}
                priority ={true}
                />
            </div>
            {book.title}
        </div>
        </Link>
    )
}

export default BookCard;