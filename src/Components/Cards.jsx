import React, { useState } from "react";

const userData = [
  {
    id: 1,
    name: "John Doe",
    email: "john@example.com",
    contact: "1234567890",
    skills: ["React", "Node.js", "MongoDB"]
  },
  {
    id: 2,
    name: "Jane Smith",
    email: "jane@example.com",
    contact: "9876543210",
    skills: ["Angular", "TypeScript", "CSS"]
  },
  {
    id: 3,
    name: "Alice Johnson",
    email: "alice@example.com",
    contact: "4561237890",
    skills: ["Python", "Django", "PostgreSQL"]
  },
  {
    id: 4,
    name: "Bob Brown",
    email: "bob@example.com",
    contact: "7894561230",
    skills: ["Java", "Spring Boot", "MySQL"]
  },
  {
    id: 5,
    name: "Emily Davis",
    email: "emily@example.com",
    contact: "7418529630",
    skills: ["PHP", "Laravel", "Vue.js"]
  },
  {
    id: 6,
    name: "Daniel Wilson",
    email: "daniel@example.com",
    contact: "8529637410",
    skills: ["Flutter", "Dart", "Firebase"]
  },
  {
    id: 7,
    name: "Sophia Moore",
    email: "sophia@example.com",
    contact: "9638527410",
    skills: ["Swift", "iOS", "Xcode"]
  },
  {
    id: 8,
    name: "James Taylor",
    email: "james@example.com",
    contact: "3216549870",
    skills: ["C#", ".NET", "Azure"]
  },
  {
    id: 9,
    name: "Grace Hall",
    email: "grace@example.com",
    contact: "1237894560",
    skills: ["Ruby", "Rails", "GraphQL"]
  },
  {
    id: 10,
    name: "Henry Martin",
    email: "henry@example.com",
    contact: "1593574860",
    skills: ["Kotlin", "Android", "Jetpack Compose"]
  },
  {
    id: 11,
    name: "Mia Lee",
    email: "mia@example.com",
    contact: "9517538520",
    skills: ["Go", "Docker", "Kubernetes"]
  },
  {
    id: 12,
    name: "Liam Walker",
    email: "liam@example.com",
    contact: "7531598520",
    skills: ["Rust", "WebAssembly", "WASM"]
  },
  {
    id: 13,
    name: "Radhika Sharma",
    email: "radha@example.com",
    contact: "123456789",
    skills: ["Rust", "WebAssembly", "WASM", "React", "Node.js"]
  }
];


const CardSlider = () => {
  const [index, setIndex] = useState(0);
  const user = userData[index];

  const handlePrev = () => {
    setIndex((prev) => (prev === 0 ? userData.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setIndex((prev) => (prev === userData.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-yellow-100">
        <h1 className="text-3xl font-bold mb-4">User Profile</h1>
      <div className="bg-white shadow-sm rounded-2xl p-6 w-96 h-60 text-center transition-all duration-300 ease-in-out">
        <h2 className="text-2xl font-bold mb-2">{user.name}</h2>
        <p className="text-gray-600 mb-1">Email: {user.email}</p>
        <p className="text-gray-600 mb-1">Contact: {user.contact}</p>
        <div className="mt-3">
          <p className="font-semibold">Skills:</p>
          <ul className="flex flex-wrap justify-center gap-5 mt-2">
            {user.skills.map((skill, idx) => (
              <li
                key={idx}
                className="bg-green-100 text-green-700 px-3 py-1 rounded-10 text-sm"
              >
                {skill}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="flex justify-between mt-6 w-60">
        <button
          onClick={handlePrev}
          className="px-4 py-2 bg-yellow-500 text-white rounded-lg hover:bg-yellow-600 transition"
        >
          Previous
        </button>
        <button
          onClick={handleNext}
          className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default CardSlider;
