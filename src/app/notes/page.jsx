
"use client";

import { useEffect, useState } from "react";
import {
  BookOpen,
  FileText,
  GraduationCap,
  Search,
  ExternalLink,
  Loader2,
  FolderOpen,
} from "lucide-react";

export default function NotesPage() {

  const [classes, setClasses] = useState([]);
  const [subjects, setSubjects] = useState([]);
  const [notes, setNotes] = useState([]);

  const [selectedClass, setSelectedClass] = useState("");
  const [selectedSubject, setSelectedSubject] = useState("");

  const [loadingClasses, setLoadingClasses] = useState(true);
  const [loadingSubjects, setLoadingSubjects] = useState(false);
  const [loadingNotes, setLoadingNotes] = useState(false);

  const [error, setError] = useState("");

  // --------------------------------
  // 1. LOAD CLASSES
  // --------------------------------

  useEffect(() => {

    async function loadClasses() {
      try {
        const response = await fetch("/api/classes");
        const data = await response.json();

        if (!response.ok || !data.success) {
          throw new Error(data.error || "Unable to load classes");
        }

        setClasses(data.classes);

      } catch (err) {
        setError(err.message);
      } finally {
        setLoadingClasses(false);
      }
    }

    loadClasses();

  }, []);

  // --------------------------------
  // 2. LOAD SUBJECTS WHEN CLASS CHANGES
  // --------------------------------

  useEffect(() => {

    if (!selectedClass) return;

    const controller = new AbortController();

    async function loadSubjects() {
      try {
        setLoadingSubjects(true);
        setSubjects([]);
        setNotes([]);
        setSelectedSubject("");
        setError("");

        const response = await fetch(
          `/api/subjects?className=${encodeURIComponent(selectedClass)}`,
          { signal: controller.signal }
        );

        const data = await response.json();

        if (!response.ok || !data.success) {
          throw new Error(data.error || "Unable to load subjects");
        }

        setSubjects(data.subjects);

      } catch (err) {
        if (err.name !== "AbortError") {
          setError(err.message);
        }
      } finally {
        if (!controller.signal.aborted) {
          setLoadingSubjects(false);
        }
      }
    }

    loadSubjects();

    return () => controller.abort();

  }, [selectedClass]);

  // --------------------------------
  // 3. LOAD NOTES WHEN SUBJECT CHANGES
  // --------------------------------

  useEffect(() => {

    if (!selectedClass || !selectedSubject) return;

    const controller = new AbortController();

    async function loadNotes() {
      try {
        setLoadingNotes(true);
        setNotes([]);
        setError("");

        const params = new URLSearchParams({
          className: selectedClass,
          subjectName: selectedSubject,
        });

        const response = await fetch(
          `/api/notes?${params.toString()}`,
          { signal: controller.signal }
        );

        const data = await response.json();

        if (!response.ok || !data.success) {
          throw new Error(data.error || "Unable to load notes");
        }

        setNotes(data.notes);

      } catch (err) {
        if (err.name !== "AbortError") {
          setError(err.message);
        }
      } finally {
        if (!controller.signal.aborted) {
          setLoadingNotes(false);
        }
      }
    }

    loadNotes();

    return () => controller.abort();

  }, [selectedClass, selectedSubject]);

  // --------------------------------
  // 4. OPEN PDF IN NEW BROWSER TAB
  // --------------------------------

  function openPDF(note) {

    const params = new URLSearchParams({
      className: selectedClass,
      subjectName: selectedSubject,
      id: String(note.id),
    });

    const pdfURL = `/api/notes/pdf?${params.toString()}`;

    window.open(pdfURL, "_blank", "noopener,noreferrer");
  }

  // --------------------------------
  // 5. FRONTEND UI
  // --------------------------------

  return (

    <main className="min-h-screen bg-slate-50 px-4 py-8 sm:px-8">

      <div className="mx-auto max-w-6xl">

        {/* HEADER */}

        <div className="mb-8">

          <div className="mb-3 flex items-center gap-3">

            <div className="rounded-xl bg-blue-600 p-3 text-white">
              <BookOpen size={27} />
            </div>

            <div>
              <h1 className="text-2xl font-bold text-slate-900 sm:text-3xl">
                Study Notes
              </h1>

              <p className="text-sm text-slate-500">
                Find and read your study materials
              </p>
            </div>

          </div>

        </div>

        {/* FILTER SECTION */}

        <div className="mb-8 grid grid-cols-1 gap-5 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm md:grid-cols-2">

          {/* CLASS DROPDOWN */}

          <div>

            <label className="mb-2 flex items-center gap-2 text-sm font-semibold text-slate-700">
              <GraduationCap size={18} />
              Select Class
            </label>

            <select
              value={selectedClass}
              onChange={(e) => {
                setSelectedClass(e.target.value);
                setSelectedSubject("");
                setSubjects([]);
                setNotes([]);
                setError("");
              }}
              disabled={loadingClasses}
              className="w-full rounded-xl border border-slate-300 bg-white p-3.5 text-slate-700 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
            >

              <option value="">
                {loadingClasses ? "Loading classes..." : "Select Class"}
              </option>

              {classes.map((item) => (
                <option key={item.id} value={item.name}>
                  {item.name}
                </option>
              ))}

            </select>

          </div>

          {/* SUBJECT DROPDOWN */}

          <div>

            <label className="mb-2 flex items-center gap-2 text-sm font-semibold text-slate-700">
              <BookOpen size={18} />
              Select Subject
            </label>

            <select
              value={selectedSubject}
              onChange={(e) => setSelectedSubject(e.target.value)}
              disabled={!selectedClass || loadingSubjects}
              className="w-full rounded-xl border border-slate-300 bg-white p-3.5 text-slate-700 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100 disabled:cursor-not-allowed disabled:bg-slate-100"
            >

              <option value="">
                {!selectedClass
                  ? "Select class first"
                  : loadingSubjects
                  ? "Loading subjects..."
                  : "Select Subject"}
              </option>

              {subjects.map((item) => (
                <option key={item.id} value={item.name}>
                  {item.name}
                </option>
              ))}

            </select>

          </div>

        </div>

        {/* ERROR MESSAGE */}

        {error && (
          <div className="mb-6 rounded-xl border border-red-200 bg-red-50 p-4 text-sm text-red-600">
            {error}
          </div>
        )}

        {/* NOTES HEADER */}

        <div className="mb-5 flex flex-wrap items-center justify-between gap-3">

          <div>

            <h2 className="text-xl font-bold text-slate-800">
              Available Chapters
            </h2>

            <p className="mt-1 text-sm text-slate-500">
              {selectedSubject
                ? `${selectedClass} / ${selectedSubject}`
                : "Select a class and subject to view chapters"}
            </p>

          </div>

          {selectedSubject && !loadingNotes && (
            <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700">
              {notes.length} Chapters
            </span>
          )}

        </div>

        {/* LOADING */}

        {loadingNotes && (

          <div className="flex flex-col items-center justify-center py-16 text-slate-500">

            <Loader2 size={35} className="animate-spin text-blue-600" />

            <p className="mt-3 text-sm">
              Loading chapters...
            </p>

          </div>

        )}

        {/* EMPTY STATE */}

        {!loadingNotes && !selectedClass && (

          <div className="rounded-2xl border border-dashed border-slate-300 bg-white py-16 text-center">

            <GraduationCap size={45} className="mx-auto text-slate-300" />

            <h3 className="mt-4 font-semibold text-slate-700">
              Select your class
            </h3>

            <p className="mt-2 text-sm text-slate-500">
              Choose a class to see available subjects.
            </p>

          </div>

        )}

        {!loadingNotes && selectedClass && !selectedSubject && (

          <div className="rounded-2xl border border-dashed border-slate-300 bg-white py-16 text-center">

            <FolderOpen size={45} className="mx-auto text-slate-300" />

            <h3 className="mt-4 font-semibold text-slate-700">
              Select a subject
            </h3>

            <p className="mt-2 text-sm text-slate-500">
              Choose a subject to see its chapters.
            </p>

          </div>

        )}

        {/* NO NOTES */}

        {!loadingNotes &&
          selectedClass &&
          selectedSubject &&
          notes.length === 0 &&
          !error && (

          <div className="rounded-2xl border border-dashed border-slate-300 bg-white py-16 text-center">

            <FileText size={45} className="mx-auto text-slate-300" />

            <h3 className="mt-4 font-semibold text-slate-700">
              No chapters available
            </h3>

            <p className="mt-2 text-sm text-slate-500">
              No notes have been uploaded for this subject yet.
            </p>

          </div>
        )}

        {/* CHAPTER CARDS */}

        {!loadingNotes && notes.length > 0 && (

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">

            {notes.map((note, index) => (

              <div
                key={note.id}
                className="group rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-lg"
              >

                <div className="mb-5 flex items-start justify-between">

                  <div className="rounded-xl bg-blue-50 p-3 text-blue-600">
                    <FileText size={25} />
                  </div>

                  <span className="rounded-lg bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-500">
                    Chapter {index + 1}
                  </span>

                </div>

                <h3 className="min-h-14 text-lg font-bold leading-6 text-slate-800">
                  {note.name}
                </h3>

                <p className="mt-2 text-sm text-slate-500">
                  {selectedSubject}
                </p>

                <div className="mt-5 border-t border-slate-100 pt-4">

                  <button
                    onClick={() => openPDF(note)}
                    className="flex w-full items-center justify-center gap-2 rounded-xl bg-blue-600 px-4 py-3 font-semibold text-white transition hover:bg-blue-700 active:scale-[0.98]"
                  >

                    <ExternalLink size={18} />

                    Open PDF

                  </button>

                </div>

              </div>

            ))}

          </div>

        )}

      </div>

    </main>
  );
}
