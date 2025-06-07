// src/pages/ApplyForm.jsx
import { UploadCloud } from 'lucide-react';
import React from 'react';

export default function ApplyForm() {
  return (
    <div className="bg-[#F4F3F1] min-h-screen flex items-center justify-center px-4 py-8">
      <div className="w-full max-w-4xl border  p-10 rounded-[20px] shadow-sm space-y-8">
        
        {/* Section 1: Name & Contact */}
        <div className="grid grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-semibold mb-2">First Name</label>
            <input type="text" placeholder="Enter Your First Name" className="w-full border border-gray-300 rounded-md px-3 py-2" />
          </div>
          <div>
            <label className="block text-sm font-semibold mb-2">Last Name</label>
            <input type="text" placeholder="Enter Your Last Name" className="w-full border border-gray-300 rounded-md px-3 py-2" />
          </div>
          <div>
            <label className="block text-sm font-semibold mb-2">Phone Number</label>
            <input type="text" placeholder="Enter Your Phone Number" className="w-full border border-gray-300 rounded-md px-3 py-2" />
          </div>
          <div>
            <label className="block text-sm font-semibold mb-2">Email</label>
            <input type="email" placeholder="Enter Your Email" className="w-full border border-gray-300 rounded-md px-3 py-2" />
          </div>
        </div>


        {/* Section 2: Birthdate & Gender */}
        <div className="grid grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-semibold mb-2">Birthdate</label>
            <div className="flex gap-2">
              <select className="border border-gray-300 rounded-md px-2 py-2 w-1/3">
                <option>Day</option>
              </select>
              <select className="border border-gray-300 rounded-md px-2 py-2 w-1/3">
                <option>Month</option>
              </select>
              <select className="border border-gray-300 rounded-md px-2 py-2 w-1/3">
                <option>Year</option>
              </select>
            </div>
          </div>
          <div>
            <label className="block text-sm font-semibold mb-2">Gender</label>
            <div className="flex items-center gap-6 mt-2">
              <label className="flex items-center gap-2">
                <input type="radio" name="gender" className="accent-black" />
                Male
              </label>
              <label className="flex items-center gap-2">
                <input type="radio" name="gender" className="accent-black" />
                Female
              </label>
            </div>
          </div>
        </div>

        <hr className="border-t-[1.5px] border-black" />

        {/* Section 3: Location */}
        <div className="grid grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-semibold mb-2">City</label>
            <select className="w-full border border-gray-300 rounded-md px-3 py-2">
              <option>Select City</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-semibold mb-2">Area</label>
            <select className="w-full border border-gray-300 rounded-md px-3 py-2">
              <option>Select Area</option>
            </select>
          </div>
        </div>

        <hr className="border-t-[1.5px] border-black" />

        {/* Section 4: Education */}
        <div className="grid grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-semibold mb-2">Graduation Date</label>
            <input type="text" className="w-full border border-gray-300 rounded-md px-3 py-2" />
          </div>
          <div>
            <label className="block text-sm font-semibold mb-2">University</label>
            <select className="w-full border border-gray-300 rounded-md px-3 py-2">
              <option>Select University</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-semibold mb-2">Degree</label>
            <input type="text" className="w-full border border-gray-300 rounded-md px-3 py-2" />
          </div>
          <div>
            <label className="block text-sm font-semibold mb-2">Internship Experience</label>
            <input type="text" className="w-full border border-gray-300 rounded-md px-3 py-2" />
          </div>
        </div>

        <hr className="border-t-[1.5px] border-black" />

        {/* Section 5: Salary & Experience */}
        <div className="grid grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-semibold mb-2">Expected Salary</label>
            <input type="text" className="w-full border border-gray-300 rounded-md px-3 py-2" />
          </div>
          <div>
            <label className="block text-sm font-semibold mb-2">Experience</label>
            <input type="text" className="w-full border border-gray-300 rounded-md px-3 py-2" />
          </div>
        </div>

        <hr className="border-t-[1.5px] border-black" />

        {/* Section 6: Upload CV */}
        <div>
      <label className="text-[#5E503F] text-lg font-semibold">Your CV</label>
      <div className="relative">
        <input
          type="file"
          className="peer absolute inset-0 opacity-0 z-10 cursor-pointer"
        />
        <div className="flex items-center justify-end w-full h-12 bg-[#F6F6F6] rounded-md px-4 border border-gray-200 pointer-events-none">
        <svg width="24" height="28" viewBox="0 0 24 28" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M23.9827 19.3333C23.9827 19.1933 23.9773 19.052 23.9307 18.912L21.264 10.912C21.0827 10.3667 20.5747 10 20 10H14.6667V12.6667H19.0387L21.2613 19.3333H2.73867L4.96133 12.6667H9.33333V10H4C3.42533 10 2.91733 10.3667 2.736 10.912L0.0693334 18.912C0.0226667 19.052 0.0173333 19.1933 0.0173333 19.3333C1.49012e-08 19.3333 0 26 0 26C0 26.7373 0.596 27.3333 1.33333 27.3333H22.6667C23.404 27.3333 24 26.7373 24 26C24 26 24 19.3333 23.9827 19.3333Z" fill="#A8A3A3"/>
<path d="M17.3353 8.53867C17.6806 8.53867 18.0259 8.412 18.2779 8.16133C18.7979 7.64133 18.7979 6.796 18.2779 6.276L12.0019 0L5.72594 6.276C5.20594 6.796 5.20594 7.64133 5.72594 8.16133C5.97794 8.41333 6.32327 8.53867 6.6686 8.53867C7.01394 8.53867 7.35927 8.41333 7.61127 8.16133L10.6686 5.104V14C10.6686 14.736 11.2659 15.3333 12.0019 15.3333C12.7379 15.3333 13.3353 14.736 13.3353 14V5.104L16.3926 8.16133C16.6446 8.41333 16.9899 8.53867 17.3353 8.53867Z" fill="#A8A3A3"/>
</svg> 
        </div>
      </div>
    </div>

        {/* Button */}
        <div className="text-center pt-4">
          <button className="bg-[#776A5D] hover:bg-[#5e534a] text-white font-semibold px-8 py-2 rounded-md">
            Apply
          </button>
        </div>
      </div>
    </div>
  );
}
