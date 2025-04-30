import React from "react";

export default function Hw() {
  const items = [
    { name: "Sun–Glass", price: 1.75, time: "07h 09m 12s" },
    { name: "Sun–Glass", price: 1.75, time: "07h 09m 12s"},
    { name: "Sun–Glass", price: 1.75, time: "07h 09m 12s" },
    { name: "NuEvey", price: 1.25, time: "19h 09m 12s"},
    { name: "Sun–Glass", price: 1.75, time: "07h 09m 12s" },
    { name: "NuEvey", price: 1.25, time: "19h 09m 12s"},
    { name: "Sun–Glass", price: 1.75, time: "07h 09m 12s"},
    { name: "Sun–Glass", price: 1.75, time: "07h 09m 12s"},
  ];

  return (
    <div>
      <div className="flex gap-2 mb-6 justify-center">
        <button className="px-4 py-2 bg-white shadow rounded-full border-2">All</button>
        <button className="px-4 py-2 bg-white shadow rounded-full border-2">Category</button>
        <button className="px-4 py-2 bg-white shadow rounded-full border-2">Collection</button>
        <button className="px-4 py-2 bg-white shadow rounded-full border-2">Price</button>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {items.map((item, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-md overflow-hidden p-4 flex flex-col items-center"
          >

            <div className="relative h-50 w-full bg-gradient-to-br from-orange-300 to-pink-300 rounded-xl mb-4">
              <div className="absolute top-2 right-2 bg-gray-200 text-xs px-2 py-1 rounded-md font-medium">
                {item.time}
              </div>
            </div>

            <h2 className="text-lg font-medium">{item.name}</h2>

            <div className="flex items-center justify-between gap-4 mt-3">
              <div>
                <p className="text-sm text-gray-500">Current bid</p>
                <p className="text-base font-bold">{item.price} ETH</p>
              </div>
              <button className="px-4 py-2 bg-black text-white rounded-2xl text-sm">
                PLACE BID
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
