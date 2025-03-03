import React from 'react'
import Modal from "react-modal";

function Register() {
    const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <div>
        <Modal isOpen={isModalOpen} onRequestClose={() => setIsModalOpen(false)} className="flex justify-center items-center h-screen">
        <div className="bg-white p-6 rounded-lg shadow-lg text-center w-11/12 max-w-sm md:max-w-md lg:max-w-lg">
          <h2 className="text-2xl font-bold text-green-500">Booking Confirmed!</h2>
          <div className="flex items-center justify-center">
                {/* <div className="w-[180px] h-[180px] md:w-[200px] md:h-[200px]">
                  <Lottie options={defaultOptions} />
                </div> */}
              </div>
          <p className="mt-2 text-gray-600">Your booking has been successfully processed.</p>
          <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-lg hover:cursor-pointer">
            Go to Home page 
          </button>
        </div>
      </Modal>
    </div>
  )
}

export default Register