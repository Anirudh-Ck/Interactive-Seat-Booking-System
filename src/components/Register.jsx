import React, { useState } from "react";
import Modal from "react-modal";
import { IoMdClose } from "react-icons/io";
import { useDispatch } from "react-redux";
import { userRegister } from "../redux/reducers/userSlice";
import { Toaster, toast } from 'sonner'

Modal.setAppElement("#root");

function Register({ isOpen, onClose }) {
  const [formData, setFormData] = useState({ name: "", phone : ""})
  const dispatch = useDispatch();

  const handleChange = (e) =>{
    setFormData({...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    try{
      dispatch(userRegister(formData));
      toast.success("Registered Successfully");
      
    }
    catch(error){
      console.log(error);
      toast.error(error);
      
    }
    onClose();
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      contentLabel="Register Modal"
      className="flex items-center justify-center fixed inset-0 bg-gray-100 bg-opacity-50"
      overlayClassName="fixed inset-0"
    >
       <Toaster position="top-right" richColors />
      <div className="bg-white rounded-lg p-6 w-96 shadow-lg relative">
        {/* Header */}
        <div className="flex justify-between items-center  pb-2">
          <h2 className="text-xl font-semibold">Register</h2>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
            <IoMdClose size={24} />
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="mt-4">
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Name:</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Phone:</label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-700 transition"
          >
            Submit
          </button>
        </form>
      </div>
    </Modal>
  );
}

export default Register;
