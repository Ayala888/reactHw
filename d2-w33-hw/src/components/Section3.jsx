import React from "react";

const works = [
  {
    year: "2020",
    title: "Designing Dashboards",
    category: "Dashboard",
    description:
      "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWweXd6vWIWAR_9vgiWYgiq6ufmuL5wpm1ng&s"
  },
  {
    year: "2018",
    title: "Vibrant Portraits of 2020",
    category: "Illustration",
    description:
      "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYfUWwx6EMkaI0Ec5vBmPZhdCz_vzO3hbVhg&s"
  },
  {
    year: "2018",
    title: "36 Days of Malayalam type",
    category: "Typography",
    description:
      "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzAgOe78ays02mTUxH6MbHh9oroAOgy6HlrQ&s"
  }
];

export default function Section3() {
  return (
    <div className="max-w-5xl mx-auto px-4">
      <h2 className="text-lg md:text-xl font-semibold mb-8">Featured works</h2>
      <div className="space-y-10">
        {works.map((work, index) => (
          <div key={index} className="flex flex-col md:flex-row gap-4 md:gap-6 border-b pb-6">
            <img
              src={work.image}
              alt={work.title}
              className="w-full md:w-48 h-auto md:h-32 object-cover rounded"
            />
            <div>
              <h3 className="text-lg md:text-xl font-bold mb-2">{work.title}</h3>
              <div className="flex items-center flex-wrap gap-2 mb-3">
                <span className="bg-blue-200 text-blue-800 text-sm font-bold px-3 py-1 rounded-md">
                  {work.year}
                </span>
                <span className="text-gray-500 text-sm">{work.category}</span>
              </div>
              <p className="text-gray-700 text-sm">{work.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}




