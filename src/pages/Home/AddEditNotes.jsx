import React from "react";
import TagInput from "../../components/TagInput";

const AddEditNotes = () => {
  const [tags, setTags] = React.useState([]);
  const [title, setTitle] = React.useState("");
  const [content, setContent] = React.useState("");

  return (
    <div>
      <div className="flex flex-col gap-2">
        <label className="input-label">Title</label>
        <input
          type="text"
          placeholder="Enter title"
          className="text-2xl text-slate-950 outline-none"
          value={title}
          OnChange={(target) => setTitle(target.value)}
        />
      </div>
      <div className="flex flex-col gap-2 mt-4">
        <label className="input-label">Content</label>
        <textarea
          placeholder="Enter content"
          className="text-2xl text-slate-950 outline-none"
          rows={10}
          value={content}
          onChange={(target) => setContent(target.value)}
        />
      </div>
      <div className="flex flex-col gap-2 mt-4">
        <label className="input-label">Tags</label>
        <TagInput tags={tags} setTags={setTags} />
      </div>
      <button
        className="btn-primary font-medium mt-5 p-3"
        onClick={() => console.log("Add")}
      >
        Add
      </button>
    </div>
  );
};

export default AddEditNotes;
