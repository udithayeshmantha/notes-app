import React from "react";
import TagInput from "../../components/TagInput";
import { MdClose } from "react-icons/md";

const AddEditNotes = ({ noteData, type, onClose }) => {
  const [tags, setTags] = React.useState([]);
  const [title, setTitle] = React.useState("");
  const [content, setContent] = React.useState("");

  const [error, setError] = React.useState(null);

  //addNewnote function
  const addNewnote = async () => {};

  //editNote function
  const editNote = async () => {};

  const handleAddNote = () => {
    if (!title) {
      setError("Title is required");
      return;
    }
    if (!content) {
      setError("Content is required");
      return;
    }
    setError("");

    if (type === "edit") {
      editNote();
    } else {
      addNewnote();
    }
  };

  return (
    <div className="relative">
      <button
        className="w-10 h-10 rounded-full flex items-center justify-center absolute -top-0 right-0"
        onClick={onClose}
      >
        <MdClose />
      </button>
      <div className="flex flex-col gap-2">
        <label className="input-label">Title</label>
        <input
          type="text"
          placeholder="Enter title"
          className="text-2xl text-slate-950 outline-none"
          value={title}
          onChange={({ target }) => setTitle(target.value)}
        />
      </div>
      <div className="flex flex-col gap-2 mt-4">
        <label className="input-label">Content</label>
        <textarea
          placeholder="Enter content"
          className="text-2xl text-slate-950 outline-none"
          rows={10}
          value={content}
          onChange={({ target }) => setContent(target.value)}
        />
      </div>
      <div className="flex flex-col gap-2 mt-4">
        <label className="input-label">Tags</label>
        <TagInput tags={tags} setTags={setTags} />
      </div>
      {error && <p className="text-red-500 text-sm mt-5">{error}</p>}
      <button
        className="btn-primary font-medium mt-5 p-3"
        onClick={handleAddNote}
      >
        Add
      </button>
    </div>
  );
};

export default AddEditNotes;
