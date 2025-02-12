import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import NoteCard from "../../components/Cards/NoteCard";
import { MdAdd } from "react-icons/md";

const Home = () => {
  return (
    <>
      <Navbar />
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mt-8 px-10 md:px-8 lg:px-16">
          <NoteCard
            title="This is a sample note"
            date="04.11.2025"
            content="This is a sample note"
            tags="#Personal"
            isPinned={true}
            onEdit={() => console.log("Edit")}
            onDelete={() => console.log("Delete")}
            onPinNote={() => console.log("Pin")}
          />
          <button
            className="w-16 h-16 flex items-center justify-center rounded-2xl bg-blue-500 hover:bg-blue-600 absolute right-10 bottom-10"
            onClick={() => console.log("Add")}
          >
            <MdAdd className="text-[32px] text-white" />
          </button>
        </div>
      </div>
    </>
  );
};

export default Home;
