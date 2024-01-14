import React from 'react'
import Navbar from './components/Navbar'
import Bottombar from './components/Bottombar'

const Branches = () => {
  return (
    <div>
      <Navbar/>
      <br/>
      {HorizontalForm()}
      <br/>
      <img className="max-h-screen"  src="/src/assets/Screenshot (53).png"/>
      <br/>
      <Bottombar/>
    </div>
  )
}

export default Branches



const HorizontalForm = () => {
  return (
    <form className="flex items-center justify-center bg-red-400 text-black p-6 rounded-xl h-20 w-25
     ">
      <div className="grid grid-cols-4 gap-4">
        <div>
          <label htmlFor="text" className="block text-gray-700 text-sm font-bold mb-2">
            Text Field
          </label>
          <input
            type="number"
            id="text"
            name="text"
            className="w-full p-2 border rounded"
            placeholder="Enter pincode"
            required
          />
        </div>
        <div>
          <label htmlFor="dropdown1" className="block text-gray-700 text-sm font-bold mb-2">
            Radius
          </label>
          <select
            id="dropdown1"
            name="dropdown1"
            className="w-full p-2 border rounded"
            required
          >
            <option value="" disabled selected>
              Select an option
            </option>
            <option value="option1">10 km</option>
            <option value="option2">25 km</option>
            <option value="option3">50 km</option>
            <option value="option1">100 km</option>
            <option value="option2">150 km</option>
            <option value="option3">200 km</option>
          </select>
        </div>
        <div>
          <label htmlFor="dropdown2" className="block text-gray-700 text-sm font-bold mb-2 rounded-xl">
            Results
          </label>
          <select
            id="dropdown2"
            name="dropdown2"
            className="w-full p-2 border rounded"
            required
          >
            <option value="" disabled selected>
              Select an option
            </option>
            <option value="optionA">25</option>
            <option value="optionB">50</option>
            <option value="optionC">75</option>
            <option value="optionC">100</option>
          </select>
        </div>
        <button type="submit" className="mt-4 bg-red-600 hover:bg-red-500 text-white p-2 rounded">
        Submit
      </button>
      </div>
      
    </form>
  );
};


