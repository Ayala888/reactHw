import React from 'react';

export default function Section2() {
  return (
    <div className="bg-blue-100 pl-4 md:pl-20">
      <div className="mx-4 md:mx-20 md:p-10">
        {/* Recent posts and View all */}
        <div className="flex flex-col md:flex-row gap-4 md:gap-8 mt-10 pb-2.5">
          <p className="text-lg font-semibold">Recent posts</p>
          <p className="text-blue-600 text-sm md:text-base mt-2 md:mt-0">View all</p>
        </div>

        
        <div className="flex flex-col md:flex-row gap-6 mt-6">
          {/* Post 1 */}
          <div className="bg-white w-full md:w-1/2 p-6 rounded-lg shadow-md">
            <h2 className="text-lg font-semibold">Making a design system from scratch</h2>
            <p className="text-gray-500 mb-4 mt-3 text-sm">12 Feb 2020 | Design, Pattern</p>
            <p className="text-gray-700 text-sm">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita velit, autem eveniet labore cum deserunt ipsam minima nesciunt.
            </p>
          </div>

         
          <div className="bg-white w-full md:w-1/2 p-6 rounded-lg shadow-md">
            <h2 className="text-lg font-semibold">Creating pixel perfect icons in Figma</h2>
            <p className="text-gray-500 mb-4 mt-3 text-sm">10 Feb 2020 | Design, Tools</p>
            <p className="text-gray-700 text-sm">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita velit, autem eveniet labore cum deserunt ipsam minima nesciunt.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}


