import React from "react";
import { MdAdd, MdClose } from "react-icons/md";

const TagInput = ({ tags, setTags }) => {
  const [inputValue, setInputValue] = React.useState("");

  const handleAddTag = (e) => {
    setInputValue(e.target.value);
  };

  const addNewTag = () => {
    if (inputValue) {
      setTags([...tags, inputValue.trim()]);
      setInputValue("");
    }
  };
  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      addNewTag();
    }
  };
  const handleRemoveTag = (tagToRemove) => {
    setTags(tags.filter((tag) => tag !== tagToRemove));
  };
  return (
    <div>
      {tags?.length > 0 && (
        <div className="flex items-center gap-2 flex-wrap mt-2">
          {tags.map((tag, index) => (
            <span key={index} className="flex items-center bg-blue-100 text-blue-700 px-2 py-1 rounded">
              #{tag}
              <button onClick={() => handleRemoveTag(tag)} className="ml-2">
                <MdClose />
              </button>
            </span>
          ))}
        </div>
      )}
      <div className="flex items-center gap-4 mt-3">
        <input
          type="text"
          value={inputValue}
          placeholder="Add tags"
          onChange={handleAddTag}
          onKeyDown={handleKeyDown}
          className="text-sm text-gray-700 py-2 px-3 border border-gray-300 rounded outline-none"
        />
        <button
          className="w-10 h-10 flex items-center justify-center bg-blue-100 hover:bg-blue-200 rounded"
          onClick={() => {
            addNewTag();
          }}
        >
          <MdAdd className="text-2xl text-blue-700 hover:text-white" />
        </button>
      </div>
    </div>
  );
};

export default TagInput;