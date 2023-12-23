import { useEffect } from "react";
import Spinner from "../../components/Spinner";
import { fetchNotes } from "./notesSlice";
import Note from "./Note";
import { useAppDispatch, useAppSelector } from "@/app/hooks";

export default function Notes() {
  const dispatch = useAppDispatch();
  const { notes, loading } = useAppSelector((state) => state.notes);

  useEffect(() => {
    dispatch(fetchNotes());
  }, [dispatch]);

  if (loading) return <Spinner />;
  if (notes.length === 0) return <div className="text-center text-gray-500">No notes found...</div>;

  return (
    <div className="w-full max-w-3xl space-y-3.5">
      {notes.map((note) => (
        <Note key={note.id} note={note} />
      ))}
    </div>
  );
}
