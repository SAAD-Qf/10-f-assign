import { NextResponse } from "next/server";

interface Book {
  id: number;
  title: string;
  author: string;
  image: string;
  available: boolean;
}

let books: Book[] = [
  {
    id: 1,
    title: "1984",
    author: "Allama Iqbal",
    image: "/1984.jpg",
    available: true,
  },
  {
    id: 2,
    title: "The advanture of tom sawyer",
    author: "Mark Twain",
    image: "/advan.jpg",
    available: true,
  },
  {
    id: 3,
    title: "The catcher in the ray",
    author: "Allama Iqbal",
    image: "/khudi.jpg",
    available: true,
  },
  {
    id: 4,
    title: "The Odeysey",
    author: "Allama Iqbal",
    image: "/zarb.jpg",
    available: true,
  },
  {
    id: 5,
    title: "Harry Potter",
    author: "J.K Rowling",
    image: "/harry.jpg",
    available: true,
  },
  {
    id: 6,
    title: "To Kill Making Bird",
    author: "Harper Lee",
    image: "/kill.jpg",
    available: true,
  },
  {
    id: 7,
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    image: "/gatsby.jpg",
    available: true,
  },
  {
    id: 8,
    title: "The Catcher in the Rye",
    author: "J.D. Salinger",
    image: "/catcher.jpg",
    available: true,
  },
  {
    id: 9,
    title: "Pride and prejudice",
    author: "F. Scott Fitzgerald",
    image: "/pride.jpg",
    available: true,
  },
  {
    id: 10,
    title: "The Lord of the Rings",
    author: "J. R. R. Tolkien",
    image: "/mockingbird.jpg",
    available: true,
  }
];

// GET Method
export async function GET() {
  return NextResponse.json(books, { status: 200 });
}

// POST Method
export async function POST(req: Request) {
  try {
    const newBook: Book = await req.json();
    books.push({ ...newBook, id: books.length + 1 });
    return NextResponse.json({ message: "Book added successfully!" }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ message: "Error adding book!",error }, { status: 500 });
  }
}

// PUT Method
export async function PUT(req: Request) {
  try {
    const updatedBook: Book = await req.json();
    books = books.map((book) =>
      book.id === updatedBook.id ? { ...book, ...updatedBook } : book
    );
    return NextResponse.json({ message: "Book updated successfully!" }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: "Error updating book!",error }, { status: 500 });
  }
}

// DELETE Method
export async function DELETE(req: Request) {
  try {
    const { id } = await req.json();
    books = books.filter((book) => book.id !== id);
    return NextResponse.json({ message: "Book deleted successfully!" }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: "Error deleting book!",error }, { status: 500 });
  }
}