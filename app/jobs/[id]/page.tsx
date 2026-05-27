const jobs = [
  {
    id: 1,
    title: "Frontend Developer",
    company: "Google",
    location: "Remote",
    salary: "$120k",
    description:
      "We are looking for a React developer to build modern interfaces.",
  },
  {
    id: 2,
    title: "Backend Engineer",
    company: "Amazon",
    location: "Hyderabad",
    salary: "$140k",
    description:
      "Build APIs and scalable backend systems using Node.js.",
  },
  {
    id: 3,
    title: "UI/UX Designer",
    company: "Microsoft",
    location: "Bangalore",
    salary: "$90k",
    description:
      "Design beautiful and user-friendly experiences.",
  },
];

export default async function JobDetails({
  params,
}: {
  params: Promise<{ id: string }>;
}) {

  const { id } = await params;

  const job = jobs.find(
    (j) => j.id === Number(id)
  );

  if (!job) {
    return (
      <div className="p-10 text-2xl">
        Job not found
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-gray-100 p-8">

      <div className="max-w-3xl mx-auto bg-white p-8 rounded-2xl shadow">

        <h1 className="text-4xl font-bold">
          {job.title}
        </h1>

        <p className="text-gray-600 mt-2">
          {job.company} • {job.location}
        </p>

        <p className="mt-4 text-lg font-medium">
          Salary: {job.salary}
        </p>

        <p className="mt-6 text-gray-700">
          {job.description}
        </p>

        <button className="mt-8 bg-black text-white px-6 py-3 rounded-xl">
          Apply Now
        </button>

      </div>

    </main>
  );
}