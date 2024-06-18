import React, { useState } from 'react';
import { IoMdAddCircle } from "react-icons/io";
import Navbar from './Navbar';

const HomePage = () => {
  const [notesData, setNotesData] = useState([]);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [author, setAuthor] = useState('');
  const [addnInfo, setAddnInfo] = useState('');
  const [editIndex, setEditIndex] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [addButton, setAddButton] = useState(false);

  const handleTitle = (e) => setTitle(e.target.value);
  const handleDescription = (e) => setDescription(e.target.value);
  const handleAuthor = (e) => setAuthor(e.target.value);
  const handleAddnInfo = (e) => setAddnInfo(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const newNote = {
      id: notesData.length + 1,
      title,
      author,
      description,
      addnInfo,
    };

    if (isEditing) {
      const updatedNotes = notesData.map((note, index) =>
        index === editIndex ? newNote : note
      );
      setNotesData(updatedNotes);
      setIsEditing(false);
      setEditIndex(null);
    } else {
      setNotesData([...notesData, newNote]);
    }

    setTitle('');
    setDescription('');
    setAuthor('');
    setAddnInfo('');
    setAddButton(false);
    alert(isEditing ? "Note Updated Successfully" : "Note Created Successfully");
  };

  const handleDelete = (index) => {
    const updatedNotes = [...notesData];
    updatedNotes.splice(index, 1);
    setNotesData(updatedNotes);
  };

  const handleEdit = (index) => {
    const note = notesData[index];
    setTitle(note.title);
    setDescription(note.description);
    setAuthor(note.author);
    setAddnInfo(note.addnInfo);
    setEditIndex(index);
    setIsEditing(true);
    setAddButton(true);
  };

  const handleAddButton = () => setAddButton(true);

  return (
    <>
      <Navbar />
      <div className="p-6 bg-gray-100 min-h-screen">
        {!addButton && (
          <div className="flex justify-center mb-6">
            <IoMdAddCircle className="h-16 w-16 text-green-600 cursor-pointer" onClick={handleAddButton} />
          </div>
        )}

        {addButton && (
          <div className="flex justify-center mb-6">
            <div className="w-full max-w-md bg-white p-6 rounded-lg shadow-md">
              <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
                <label className="font-semibold">Title:</label>
                <input
                  className="p-2 border rounded"
                  placeholder="Title"
                  type="text"
                  value={title}
                  onChange={handleTitle}
                />
                <label className="font-semibold">Description:</label>
                <textarea
                  className="p-2 border rounded"
                  placeholder="Description"
                  value={description}
                  onChange={handleDescription}
                />
                <label className="font-semibold">Author:</label>
                <input
                  className="p-2 border rounded"
                  placeholder="Author"
                  type="text"
                  value={author}
                  onChange={handleAuthor}
                />
                <label className="font-semibold">Additional Details:</label>
                <input
                  className="p-2 border rounded"
                  placeholder="Addn Details"
                  type="text"
                  value={addnInfo}
                  onChange={handleAddnInfo}
                />
                <button type="submit" className="bg-green-600 text-white p-2 rounded mt-4">
                  {isEditing ? 'Update' : 'Submit'}
                </button>
              </form>
            </div>
          </div>
        )}

        <div>
          <h2 className="text-2xl font-bold mb-4 text-center">Total Notes: {notesData.length}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {notesData.length > 0 ? (
              notesData.map((data, index) => (
                <div key={index} className="bg-blue-500 text-white p-4 rounded-lg shadow-md">
                  <div className="font-semibold text-lg mb-2">Title: {data.title}</div>
                  <div className="mb-2">Description: {data.description}</div>
                  <div className="mb-2">Author: {data.author}</div>
                  <div className="mb-2">Additional Info: {data.addnInfo}</div>
                  <div className="flex justify-between">
                    <button className="bg-red-600 p-2 rounded" onClick={() => handleDelete(index)}>Delete</button>
                    <button className="bg-green-600 p-2 rounded" onClick={() => handleEdit(index)}>Edit</button>
                  </div>
                </div>
              ))
            ) : (
              <div className="col-span-full text-center text-gray-500">No notes available</div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
