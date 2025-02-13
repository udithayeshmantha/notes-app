import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import NoteCard from "../../components/Cards/NoteCard";
import { MdAdd } from "react-icons/md";
import AddEditNotes from "./AddEditNotes";
import Modal from "react-modal";

const Home = () => {
  const [openaddEditNotes, setOpenAddEditNotes] = React.useState({
    isShown: false,
    type: "add",
    data: null,
  });

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
        </div>
      </div>

      <button
        className="w-16 h-16 flex items-center justify-center rounded-2xl bg-blue-500 hover:bg-blue-600 absolute right-10 bottom-10"
        onClick={() => {
          setOpenAddEditNotes({ isShown: true, type: "add", data: null });
        }}
      >
        <MdAdd className="text-[32px] text-white" />
      </button>

      <Modal
        isOpen={openaddEditNotes.isShown}
        onRequestClose={() => {}}
        style={{
          overlay: {
            backgroundColor: "rgba(0,0,0,0.2)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          },
        }}
        contentLabel="Add Edit Notes"
        className="w-[60%] xl:w-[35%] lg:w-[50%] max-h-3/4 bg-white rounded-md p-5 overflow-auto"
      >
        <AddEditNotes
        type={openaddEditNotes.type}
          noteData={openaddEditNotes.data}
          onClose={() => {
            setOpenAddEditNotes({ isShown: false, type: "add", data: null });
          }}
        />
      </Modal>
    </>
  );
};

export default Home;
