
"use client";

import { useEffect, useState } from "react";
import { FileQuestion, Eye, Loader2 } from "lucide-react";

export default function QuestionsPage() {
  const [questions, setQuestions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function loadQuestions() {
      try {
        const response = await fetch("/api/questions");
        const data = await response.json();

        if (!response.ok || !data.success) {
          throw new Error(data.message || "Unable to load questions");
        }

        setQuestions(data.questions);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    loadQuestions();
  }, []);

  function openQuestion(id) {
    window.open(
      `/api/questions/pdf?id=${id}`,
      "_blank",
      "noopener,noreferrer"
    );
  }

  return (
    <main className="min-h-screen bg-slate-100 px-6 py-12">

      <div className="mb-10 text-center">
        <div className="mb-4 flex justify-center">
          <div className="rounded-2xl bg-blue-100 p-4 text-blue-600">
            <FileQuestion size={38} />
          </div>
        </div>

        <h1 className="text-4xl font-extrabold text-slate-900">
          NEB QUESTION PAPERS
        </h1>

        <p className="mt-3 text-gray-600">
          Explore previous question papers and practice for your exams.
        </p>
      </div>

      {loading && (
        <div className="flex justify-center items-center gap-3 py-16 text-blue-600">
          <Loader2 className="animate-spin" size={25} />
          Loading question papers...
        </div>
      )}

      {!loading && error && (
        <p className="py-10 text-center text-red-600">{error}</p>
      )}

      {!loading && !error && questions.length > 0 && (
        <div className="mx-auto grid max-w-7xl grid-cols-1 justify-items-center gap-8 sm:grid-cols-2 lg:grid-cols-3">

          {questions.map((question) => (
            <div
              key={question.id}
              className="group w-full max-w-sm overflow-hidden rounded-2xl bg-white shadow-lg transition duration-300 hover:-translate-y-2 hover:shadow-2xl"
            >
              <div className="flex h-48 items-center justify-center bg-gradient-to-br from-indigo-100 to-blue-200">
                <FileQuestion
                  size={75}
                  className="text-blue-600 transition duration-300 group-hover:scale-110"
                />
              </div>

              <div className="p-6">
                <h2 className="mb-3 text-2xl font-bold text-gray-900">
                  {question.name}
                </h2>

                <p className="mb-6 text-sm text-gray-600">
                  Class: {question.Class}
                </p>

                <button
                  type="button"
                  onClick={() => openQuestion(question.id)}
                  className="flex w-full items-center justify-center gap-2 rounded-xl bg-blue-600 px-5 py-3 font-semibold text-white transition hover:bg-blue-700 active:scale-95"
                >
                  <Eye size={20} />
                  OPEN QUESTION
                </button>
              </div>
            </div>
          ))}

        </div>
      )}

      {!loading && !error && questions.length === 0 && (
        <div className="py-16 text-center">
          <FileQuestion size={55} className="mx-auto mb-4 text-gray-400" />

          <h2 className="text-xl font-bold text-gray-700">
            No Question Papers Available
          </h2>

          <p className="mt-2 text-gray-500">
            No previous question papers have been added yet.
          </p>
        </div>
      )}

    </main>
  );
}
