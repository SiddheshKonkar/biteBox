import React from 'react'

const Contact = () => {
  return (
    <div className="flex flex-col md:flex-row justify-between items-center px-20 py-10 bg-gray-100 gap-20">
      <div className="md:w-1/2">
        <img src="../assets/contact-graphic.png" alt="Contact Graphic" className="w-full h-auto" />
      </div>
      <div className="md:w-1/2 mt-10 md:mt-0">
        <form className="bg-white shadow-md rounded-lg p-6 space-y-4">
          <div>
            <label htmlFor="name" className="block text-gray-700 font-bold">Name</label>
            <input type="text" id="name" name="name" className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500" />
          </div>
          <div>
            <label htmlFor="email" className="block text-gray-700 font-bold">Email</label>
            <input type="email" id="email" name="email" className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500" />
          </div>
          <div>
            <label htmlFor="message" className="block text-gray-700 font-bold">Message</label>
            <textarea id="message" name="message" rows="4" className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500"></textarea>
          </div>
          <button type="submit" className="bg-amber-600 text-white font-bold py-2 px-4 rounded-lg hover:bg-amber-700">Submit</button>
        </form>
      </div>
    </div>
  )
}

export default Contact