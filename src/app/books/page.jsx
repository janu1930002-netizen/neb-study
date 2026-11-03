
"use client";

import { useEffect, useState } from "react";
import { BookOpen, Eye, Loader2 } from "lucide-react";

export default function BooksPage() {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function loadBooks() {
      try {
        const response = await fetch("/api/books");
        const data = await response.json();

        if (!response.ok || !data.success) {
          throw new Error(data.message || "Unable to load books");
        }

        setBooks(data.books);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    loadBooks();
  }, []);

  function openBook(id) {
    window.open(
      `/api/books/pdf?id=${id}`,
      "_blank",
      "noopener,noreferrer"
    );
  }

  return (
    <main className="min-h-screen bg-slate-100 px-6 py-12">

      <div className="mb-10 text-center">
        <div className="mb-4 flex justify-center">
          <div className="rounded-2xl bg-blue-100 p-4 text-blue-600">
            <BookOpen size={38} />
          </div>
        </div>

        <h1 className="text-4xl font-extrabold text-slate-900">
          NEB BOOKS
        </h1>

        <p className="mt-3 text-gray-600">
          Explore and read your study books.
        </p>
      </div>

      {loading && (
        <div className="flex justify-center items-center gap-3 py-16 text-blue-600">
          <Loader2 className="animate-spin" size={25} />
          Loading books...
        </div>
      )}

      {!loading && error && (
        <p className="py-10 text-center text-red-600">{error}</p>
      )}

      {!loading && !error && books.length > 0 && (
        <div className="mx-auto grid max-w-7xl grid-cols-1 justify-items-center gap-8 sm:grid-cols-2 lg:grid-cols-3">

          {books.map((book) => (
            <div
              key={book.id}
              className="group w-full max-w-sm overflow-hidden rounded-2xl bg-white shadow-lg transition duration-300 hover:-translate-y-2 hover:shadow-2xl"
            >
              <div className="flex h-48 items-center justify-center bg-gradient-to-br from-blue-100 to-indigo-200">
                <BookOpen
                  size={75}
                  className="text-blue-600 transition duration-300 group-hover:scale-110"
                />
              </div>

              <div className="p-6">
                <h2 className="mb-3 text-2xl font-bold text-gray-900">
                  {book.sname}
                </h2>

                <p className="mb-6 text-sm text-gray-600">
                  Class: {book.Class}
                </p>

                <button
                  type="button"
                  onClick={() => openBook(book.id)}
                  className="flex w-full items-center justify-center gap-2 rounded-xl bg-blue-600 px-5 py-3 font-semibold text-white transition hover:bg-blue-700 active:scale-95"
                >
                  <Eye size={20} />
                  OPEN BOOK
                </button>
              </div>
            </div>
          ))}

        </div>
      )}

      {!loading && !error && books.length === 0 && (
        <div className="py-16 text-center">
          <BookOpen size={55} className="mx-auto mb-4 text-gray-400" />
          <h2 className="text-xl font-bold text-gray-700">
            No Books Available
          </h2>
          <p className="mt-2 text-gray-500">
            No books have been added to the database yet.
          </p>
        </div>
      )}

    </main>
  );
}
