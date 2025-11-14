import React from "react";

const CreateForm = ({ onClose }) => {
  return (
    <div className="fixed h-fit inset-0 bg-transparent bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-3xl shadow-2xl w-full max-w-lg p-6 md:p-8 relative animate-fadeIn">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-600 hover:text-gray-800 text-2xl"
        >
          ✖
        </button>

        {/* Title */}
        <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center">
          ✈️ Create New Trip
        </h2>

        {/* Form Inputs */}
        <form className="flex flex-col gap-4">
          <div className="flex flex-col">
            <label className="mb-1 font-medium">🏷 Trip Name</label>
            <input
              type="text"
              placeholder="e.g., Summer Adventure"
              className="w-full p-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
            />
          </div>

          <div className="flex flex-col">
            <label className="mb-1 font-medium">🌍 Destination</label>
            <input
              type="text"
              placeholder="e.g., Bali, Indonesia"
              className="w-full p-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex flex-col">
              <label className="mb-1 font-medium">📅 Start Date</label>
              <input
                type="date"
                className="w-full p-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
              />
            </div>
            <div className="flex flex-col">
              <label className="mb-1 font-medium">🏁 End Date</label>
              <input
                type="date"
                className="w-full p-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
              />
            </div>
          </div>

          <div className="flex flex-col">
            <label className="mb-1 font-medium">💰 Budget</label>
            <input
              type="number"
              placeholder="e.g., 2000"
              className="w-full p-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
            />
          </div>

          <div className="flex flex-col">
            <label className="mb-1 font-medium">📝 Notes</label>
            <textarea
              placeholder="Add some notes or details about your trip..."
              className="w-full p-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400 transition resize-none"
              rows={3}
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="mt-4 bg-blue-600 text-white py-3 rounded-xl text-lg font-semibold hover:bg-blue-700 transition"
          >
            🚀 Create Trip
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreateForm;
