"use client";

import Link from "next/link";
import { useState } from "react";
import {
  MapPin,
  Briefcase,
  DollarSign,
} from "lucide-react";
const jobs = [
  {
    id: 1,
    title: "Frontend Developer",
    company: "Google",
    location: "Remote",
    salary: "$120k",
  },
  {
    id: 2,
    title: "Backend Engineer",
    company: "Amazon",
    location: "Hyderabad",
    salary: "$140k",
  },
  {
    id: 3,
    title: "UI/UX Designer",
    company: "Microsoft",
    location: "Bangalore",
    salary: "$90k",
  },
];

export default function Home() {
  const [search, setSearch] = useState("");
  return (
    <main className="min-h-screen bg-gray-100 p-8">

      <nav className="bg-black text-white p-5 rounded-2xl mb-10">
        <section className="bg-gradient-to-r from-black to-gray-800 text-white p-10 rounded-3xl mb-10">

  <h1 className="text-5xl font-bold leading-tight">
    Find Your <br /> Dream Job Today
  </h1>

  <p className="mt-4 text-lg text-gray-300">
    Discover top opportunities from leading companies around the world.
  </p>

  <button className="mt-6 bg-white text-black px-6 py-3 rounded-2xl font-semibold hover:scale-105 transition">
    Explore Jobs
  </button>

</section>
  <div className="flex justify-between items-center">
    
    <h1 className="text-3xl font-bold">
      NextHire
    </h1>

    <button className="bg-white text-black px-4 py-2 rounded-xl">
      Post Job
    </button>

  </div>
</nav>

      <div className="max-w-3xl mx-auto">

        <input
  type="text"
  placeholder="Search jobs..."
  value={search}
  onChange={(e) => setSearch(e.target.value)}
  className="w-full p-4 rounded-2xl mb-8 border bg-white shadow-sm focus:outline-none"
/>

        <div className="grid gap-6">

          {jobs.filter((job) =>
  job.title.toLowerCase().includes(search.toLowerCase())
).length === 0 ? (

  <div className="bg-white p-8 rounded-2xl text-center shadow">
    <h2 className="text-2xl font-semibold">
      No jobs found
    </h2>

    <p className="text-gray-500 mt-2">
      Try searching another keyword.
    </p>
  </div>

) : 

  jobs
    .filter((job) =>
      job.title.toLowerCase().includes(search.toLowerCase())
    )
    .map((job) => (
            <div
              key={job.id}
              className="w-full p-4 rounded-2xl mb-8 border bg-white shadow-sm focus:outline-none"
            >
              <h2 className="text-2xl font-semibold">
                {job.title}
              </h2>

              <div className="flex items-center gap-2 mt-3 text-gray-600">
  <Briefcase size={18} />
  <span>{job.company}</span>
</div>

<div className="flex items-center gap-2 mt-2 text-gray-600">
  <MapPin size={18} />
  <span>{job.location}</span>
</div>

              <div className="flex items-center gap-2 mt-4 font-medium text-green-600">
  <DollarSign size={18} />
  <span>{job.salary}</span>
</div>
<div className="flex gap-3 mt-4">

  <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm">
    Remote
  </span>

  <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm">
    Full-Time
  </span>

</div>

              <Link
  href={`/jobs/${job.id}`}
  className="inline-block mt-6 bg-black text-white px-5 py-2 rounded-xl"
>
  View Details
</Link>
            </div>
          ))}

        </div>

      </div>
    </main>
  );
}
<footer className="text-center mt-16 text-gray-500">
  © 2026 NextHire Job Board. All rights reserved.
</footer>

