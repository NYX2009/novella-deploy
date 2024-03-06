const users = [
    {
        "id": 1,
        "name": "John Doe",
        "email": "john@example.com",
        "image_url": "/users/john.jpeg"
      },
      {
        "id": 2,
        "name": "Jane Smith",
        "email": "jane@example.com",
        "image_url": "/users/jane.ppg"
      },
      {
        "id": 3,
        "name": "Boby Johnson",
        "email": "bob@example.com",
        "image_url": "/users/boby.jpeg"
      }
];

const books =[
    {
      id: 1,
      title: "The Catcher in the Rye",
      description: "The Catcher in the Rye is a novel by American author J. D. Salinger that was partially published in serial form 1945–46 before being novelized in 1951. Originally intended for adults, it is often read by adolescents for its themes of angst and alienation, and as a critique of superficiality in society.[4][5] The novel also deals with themes of innocence, identity, belonging, loss, connection, sex, and depression.",
      author: "J.D. Salinger",
      cover: "/books/catcher-in-the-rye.jpg",        
      genre: "Fiction",
      pages: 224,
      isRented: false,
      stock: 10,
      rentPrice: 2.99,
      sellPrice: 12.99,
      sold: 5,
      ISRN: "978-0-316-76948-0"
    },
    {
        id: 2,
        title: "The Great Gatsby",
        description: "The Great Gatsby is a 1925 novel by American writer F. Scott Fitzgerald. Set in the Jazz Age on Long Island, near New York City, the novel depicts first-person narrator Nick Carraway's interactions with mysterious millionair.The novel was inspired by a youthful romance Fitzgerald had with socialite Ginevra King, and the riotous parties he attended on Long Island's North Shore in 1922.",
        author: "F. Scott Fitzgerald",
        cover: "/books/the-great-gatsby.jpg",
        genre: "Classic",
        pages: 180,
        isRented: false,
        stock: 15,
        rentPrice: 3.49,
        sellPrice: 14.99,
        sold: 8,
        ISRN: "978-0-7432-7356-5"
      },
      {
        id: 3,
        title: "The Fairy Tales",
        description: "A tale of love, wealth, and tragedy in the Jazz Age",
        author: "Goerge .D",
        cover: "/books/fairy tales.jpg",
        genre: "Fantasic",
        pages: 120,
        isRented: false,
        stock: 13,
        rentPrice: 3.49,
        sellPrice: 14.99,
        sold: 8,
        ISRN: "978-0-742-7386-3"
      },
      {
        id: 4,
        title: "The Son Of Earth",
        description: "A tale of love, wealth, and tragedy in the Jazz Age",
        author: "F. Scott Fitzgerald",
        cover: "/books/son.jpg",
        genre: "Classic",
        pages: 180,
        isRented: false,
        stock: 15,
        rentPrice: 3.49,
        sellPrice: 14.99,
        sold: 8,
        ISRN: "978-0-7432-7356-5"
      },
      {
        id: 5,
        title: "The Soul",
        description: "A tale of love, wealth, and tragedy in the Jazz Age",
        author: "Olivia Wilson",
        cover: "/books/soul.jpg",
        genre: "Classic",
        pages: 180,
        isRented: false,
        stock: 15,
        rentPrice: 3.49,
        sellPrice: 14.99,
        sold: 8,
        ISRN: "978-0-7432-7356-5"
      },
      {
        id: 6,
        title: "The Tread",
        description: "A tale of love, wealth, and tragedy in the Jazz Age",
        author: "Olivia Wilson",
        cover: "/books/tread.jpg",
        genre: "Classic",
        pages: 180,
        isRented: false,
        stock: 15,
        rentPrice: 3.49,
        sellPrice: 14.99,
        sold: 8,
        ISRN: "978-0-7432-7356-5"
      },
      {
        id: 7,
        title: "Under The Path",
        description: "A tale of love, wealth, and tragedy in the Jazz Age",
        author: "F. Scott Fitzgerald",
        cover: "/books/under-the-path.jpeg",
        genre: "Classic",
        pages: 180,
        isRented: false,
        stock: 15,
        rentPrice: 3.49,
        sellPrice: 14.99,
        sold: 8,
        ISRN: "978-0-7432-7356-5"
      },
      {
        id: 8,
        title: "Who Am I!",
        description: "A tale of love, wealth, and tragedy in the Jazz Age",
        author: "F. Scott Fitzgerald",
        cover: "/books/who-am-I.png",
        genre: "Classic",
        pages: 180,
        isRented: false,
        stock: 15,
        rentPrice: 3.49,
        sellPrice: 14.99,
        sold: 8,
        ISRN: "978-0-7432-7356-5"
      },
      {
        id: 9,
        title: "The Catcher in the Rye",
        description: "The Catcher in the Rye is a novel by American author J. D. Salinger that was partially published in serial form 1945–46 before being novelized in 1951. Originally intended for adults, it is often read by adolescents for its themes of angst and alienation, and as a critique of superficiality in society.[4][5] The novel also deals with themes of innocence, identity, belonging, loss, connection, sex, and depression.",
        author: "J.D. Salinger",
        cover: "/books/catcher-in-the-rye.jpg",        
        genre: "Fiction",
        pages: 224,
        isRented: false,
        stock: 10,
        rentPrice: 2.99,
        sellPrice: 12.99,
        sold: 5,
        ISRN: "978-0-316-76948-0"
      },
      {
          id: 10,
          title: "The Great Gatsby",
          description: "The Great Gatsby is a 1925 novel by American writer F. Scott Fitzgerald. Set in the Jazz Age on Long Island, near New York City, the novel depicts first-person narrator Nick Carraway's interactions with mysterious millionair.The novel was inspired by a youthful romance Fitzgerald had with socialite Ginevra King, and the riotous parties he attended on Long Island's North Shore in 1922.",
          author: "F. Scott Fitzgerald",
          cover: "/books/the-great-gatsby.jpg",
          genre: "Classic",
          pages: 180,
          isRented: false,
          stock: 15,
          rentPrice: 3.49,
          sellPrice: 14.99,
          sold: 8,
          ISRN: "978-0-7432-7356-5"
        },
        {
          id: 11,
          title: "The Fairy Tales",
          description: "A tale of love, wealth, and tragedy in the Jazz Age",
          author: "Goerge .D",
          cover: "/books/fairy tales.jpg",
          genre: "Fantasic",
          pages: 120,
          isRented: false,
          stock: 13,
          rentPrice: 3.49,
          sellPrice: 14.99,
          sold: 8,
          ISRN: "978-0-742-7386-3"
        },
        {
          id: 12,
          title: "The Son Of Earth",
          description: "A tale of love, wealth, and tragedy in the Jazz Age",
          author: "F. Scott Fitzgerald",
          cover: "/books/son.jpg",
          genre: "Classic",
          pages: 180,
          isRented: false,
          stock: 15,
          rentPrice: 3.49,
          sellPrice: 14.99,
          sold: 8,
          ISRN: "978-0-7432-7356-5"
        },
        {
          id: 13,
          title: "The Soul",
          description: "A tale of love, wealth, and tragedy in the Jazz Age",
          author: "Olivia Wilson",
          cover: "/books/soul.jpg",
          genre: "Classic",
          pages: 180,
          isRented: false,
          stock: 15,
          rentPrice: 3.49,
          sellPrice: 14.99,
          sold: 8,
          ISRN: "978-0-7432-7356-5"
        },
        {
          id: 14,
          title: "The Tread",
          description: "A tale of love, wealth, and tragedy in the Jazz Age",
          author: "Olivia Wilson",
          cover: "/books/tread.jpg",
          genre: "Classic",
          pages: 180,
          isRented: false,
          stock: 15,
          rentPrice: 3.49,
          sellPrice: 14.99,
          sold: 8,
          ISRN: "978-0-7432-7356-5"
        },
        {
          id: 15,
          title: "Under The Path",
          description: "A tale of love, wealth, and tragedy in the Jazz Age",
          author: "F. Scott Fitzgerald",
          cover: "/books/under-the-path.jpeg",
          genre: "Classic",
          pages: 180,
          isRented: false,
          stock: 15,
          rentPrice: 3.49,
          sellPrice: 14.99,
          sold: 8,
          ISRN: "978-0-7432-7356-5"
        },
        {
          id: 16,
          title: "Who Am I!",
          description: "A tale of love, wealth, and tragedy in the Jazz Age",
          author: "F. Scott Fitzgerald",
          cover: "/books/who-am-I.png",
          genre: "Classic",
          pages: 180,
          isRented: false,
          stock: 15,
          rentPrice: 3.49,
          sellPrice: 14.99,
          sold: 8,
          ISRN: "978-0-7432-7356-5"
        }
];




const getAllBooks = () => {
  return books;
};

const getBookById = (id) => {
  return books.find((book) => book.id === parseInt(id));
};


export {
  getAllBooks,
  getBookById
};