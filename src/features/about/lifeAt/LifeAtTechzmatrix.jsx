import { motion } from "framer-motion";
import CTA from "../../contact/components/CTA"
import BenefitsAccordion from "./components/BenefitsAccordion";

const LifeAtTechzmatrix = () => {

  const videoStories = [
    {
      name: "Mallika Padmanabhan",
      title: "Finding my purpose and embracing opportunities.",
      videoUrl: "#",
      imgSrc: "/path/to/image1.jpg",
    },
    {
      name: "Greg Synder",
      title: "What does it mean to be a part of a purpose driven company.",
      videoUrl: "#",
      imgSrc: "/path/to/image2.jpg",
    },
    {
      name: "Philippe Monin",
      title: "Building the future with Quest Global.",
      videoUrl: "#",
      imgSrc: "/path/to/image3.jpg",
    },
    {
      name: "Deepika Tripathi",
      title: "There’s something new to do everyday-10 years of growth.",
      videoUrl: "#",
      imgSrc: "/path/to/image4.jpg",
    },
  ];
  const quoteStories = [
    {
      name: "Rubinderjit",
      quote: "From facing my fears to finding my home at Quest Global.",
    },
    {
      name: "Akash Deep",
      quote: "From feeling lost to inspiring engineers across the world at Quest Global.",
    },
    {
      name: "Uma",
      quote: "Never say never: how passion, perseverance, and working at Quest Global fulfilled a lifelong dream.",
    },
    {
      name: "Gonzalo",
      quote: "From passion to proof of concept: my unconventional engineering journey at Quest Global.",
    },
  ];


  const posts = [
    { id: 1, src: "https://source.unsplash.com/600x600/?soccer", alt: "Sports", caption: "Logout, Lace Up!" },
    { id: 2, src: "https://source.unsplash.com/600x600/?office,team", alt: "Team Meeting", caption: "" },
    { id: 3, src: "https://source.unsplash.com/600x600/?cancer,ribbon", alt: "World Cancer Day", caption: "World Cancer Day 2026" },
    { id: 4, src: "https://source.unsplash.com/600x600/?presentation", alt: "Presentation", caption: "" },
    { id: 5, src: "https://source.unsplash.com/600x600/?team,activity", alt: "Outdoor Activity", caption: "" },
    { id: 6, src: "https://source.unsplash.com/600x600/?india,flag", alt: "Republic Day", caption: "Republic Day 2026" },
  ];

  return (
    <section className="relative overflow-hidden">

      <div className="relative w-full overflow-hidden">

        <div
          className="absolute inset-0"
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
            backgroundSize: "100px 60px",
          }}
        />

        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.05),transparent_65%)]" />


        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative z-10 max-w-5xl mx-auto px-6 py-32 text-white"
        >
          <p className="text-sm uppercase tracking-widest text-white/60">
            Life @ TechzMatrix
          </p>

          <h1 className="mt-4 text-4xl md:text-5xl font-semibold text-cyan-400 leading-tight">
            A culture built for builders
          </h1>

          <p className="mt-6 text-lg text-white/70 leading-relaxed max-w-3xl">
            We’re a high-ownership team that values craft, learning, and momentum. The goal: ship meaningful software and keep raising the bar.
          </p>
        </motion.div>
        <div className="tm-glass tm-noise text-white px-6 md:px-14 py-12 md:py-24">
          <div className="max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center gap-8">
            <div className="md:w-1/2">
              <p className="text-lg md:text-lg leading-relaxed">
                We value diversity and believe that our people’s unique experiences,
                backgrounds, and perspectives help us solve the most complex engineering
                challenges. When you join Techzmatrix Software technologies, you can be yourself and embrace your
                individuality, while contributing to a company that is changing the world
                one innovative solution at a time.
              </p>
            </div>


            <div className="md:w-1/2 w-full">
              <div className="aspect-w-16 aspect-h-9">
                <video
                  src="/path-to-your-video.mp4"
                  controls
                  className="w-full h-full rounded-xl object-cover"
                />
              </div>
            </div>

          </div>
        </div>


        <div className="max-w-7xl mx-auto px-6 sm:px-8 md:px-12 pt-12 sm:pt-16 mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-cyan-400 mb-4">
            People stories
          </h2>
          <p className="text-sm md:text-base text-white/80 mb-10">
            Here are just some of the ways our people feel part of an organization that truly embraces culture and inclusion, and how it flourishes in the experiences we create together.
          </p>


          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mb-10">
            {videoStories.map((video, idx) => (
              <div key={idx} className="bg-white/20 tm-glass tm-noise backdrop-blur-lg rounded-lg overflow-hidden group">
                <div className="relative">
                  <img src={video.imgSrc} alt={video.name} className="w-full h-48 object-cover" />
                  <a
                    href={video.videoUrl}
                    className="absolute inset-0 flex items-center justify-center bg-black/30 opacity-0 group-hover:opacity-100 transition"
                  >
                    <div className="w-12 h-12 bg-cyan-400 rounded-full flex items-center justify-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6 text-white"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M14.752 11.168l-6.518-3.76a1 1 0 00-1.434.896v7.504a1 1 0 001.434.896l6.518-3.76a1 1 0 000-1.792z" />
                      </svg>
                    </div>
                  </a>
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-white">{video.title}</h3>
                  <p className="text-sm text-white/70 mt-1">{video.name}</p>
                </div>
              </div>
            ))}
          </div>


          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {quoteStories.map((quote, idx) => (
              <div key={idx} className="bg-white text-black p-6 rounded-lg flex flex-col justify-between shadow-md">
                <p className="text-lg font-medium mb-4">&ldquo;{quote.quote}&rdquo;</p>
                <p className="font-semibold">{quote.name}</p>

              </div>
            ))}
          </div>
        </div>

        <div className=" text-white py-12 px-4 md:px-8">
          <h2 className="text-3xl font-bold mb-4">Work-life balance</h2>
          <p className="mb-8 text-sm md:text-base">
            At Quest Global, we don't just work hard, we play hard too. Get together, holiday parties, offsite events and celebrating our diverse cultures are all part of what makes us different. Take a look inside our world across the globe.
          </p>

          <div className="grid grid-cols-1  sm:grid-cols-2 md:grid-cols-3 gap-4">
            {posts.map((post) => (
              <div key={post.id} className="relative tm-glass tm-noise overflow-hidden rounded-lg shadow-lg">
                <img
                  src={post.src}
                  alt={post.alt}
                  className="w-full h-64 object-cover transition-transform duration-300 hover:scale-105"
                />
                {post.caption && (
                  <div className="absolute bottom-0 left-0 right-0 bg-black/50 text-cyan-400 font-bold p-2 text-center">
                    {post.caption}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      <BenefitsAccordion/>
      </div>
      <CTA />
    </section>
  );
};

export default LifeAtTechzmatrix