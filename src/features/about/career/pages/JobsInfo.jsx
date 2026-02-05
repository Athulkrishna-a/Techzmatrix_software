import { useParams } from "react-router-dom";
import { jobs } from "../data/Jobs";
import JobApplyForm from "../components/JobApplyForm"

export default function JobInfo() {
    const { jobId } = useParams();
    const job = jobs.find(j => j.id === jobId);

    if (!job) {
        return (
            <div className="min-h-screen flex items-center justify-center text-white">
                Job not found
            </div>
        );
    }

    return (
        <div className="relative min-h-screen px-6 py-24 text-white max-w-4xl mx-auto space-y-16">
            <div
                className="absolute inset-0 z-0"
                style={{
                    backgroundImage: `
         linear-gradient(
    to right,
    rgba(355, 255, 255, 0.035) 1px,
    transparent 1px
  ),
  linear-gradient(
    to bottom,
    rgba(255, 255, 255, 0.055) 1px,
    transparent 1px
  ),
  radial-gradient(
    circle 800px at 0% 200px,
    rgba(95, 153, 196, 0.35),
    transparent 0%
  )
      `,
                    backgroundSize: "96px 64px, 96px 64px, 100% 100%",
                }}
            />

            <section >

                <h1 className="text-3xl font-semibold">{job.role}</h1>
                <p className="text-gray-400 mt-2">
                    {job.id} • {job.type} • {job.experience}
                </p>

                <p className="mt-6 text-white/80">{job.description}</p>

                <h3 className="mt-8 font-semibold">Responsibilities</h3>
                <ul className="list-disc list-inside text-white/70">
                    {job.responsibilities.map((r, i) => (
                        <li key={i}>{r}</li>
                    ))}
                </ul>

                <h3 className="mt-8 font-semibold">Skills</h3>
                <ul className="flex flex-wrap gap-2 mt-2">
                    {job.skills.map((s, i) => (
                        <span key={i} className="px-3 py-1 bg-white/10 rounded-full text-sm">
                            {s}
                        </span>
                    ))}
                </ul>
            </section>


            <JobApplyForm />

        </div>
    );
}
