import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Spinner from "../../components/Spinner";
import { fetchNotes } from "./notesSlice";
import Note from "./Note";

export default function Notes() {
  const dispatch = useDispatch();
  const { notes, loading } = useSelector((state) => state.notes);

  useEffect(() => {
    dispatch(fetchNotes());
  }, [dispatch]);

  if (loading) return <Spinner />;
  if (!notes.length) return <div className="text-center text-gray-500">No notes found...</div>;

  return (
    <div className="w-full max-w-3xl space-y-3.5">
      {notes.map((note) => (
        <Note key={note.id} note={note} />
      ))}
    </div>
  );
}
