import { motion } from 'framer-motion'
import { Cpu } from 'lucide-react'
import SectionHeader from './SectionHeader'

const skills = [
  {
    badge: "Core Strength",
    title: "Systems Programming",
    desc: "C, C++, POSIX — building close to the metal. ELF linkers, UNIX shells, FTP servers."
  },
  {
    badge: "Web",
    title: "Full Stack Development",
    desc: "React, TypeScript, FastAPI, Tailwind CSS. REST APIs, authentication, deployment."
  },
  {
    badge: "Data",
    title: "Data Science & BI",
    desc: "Python, pandas, numpy, matplotlib. Data pipelines, visualization, SQLite, MySQL."
  },
  {
    badge: "Infrastructure",
    title: "Systems & Networks",
    desc: "Linux, TCP/IP, POSIX sockets, Git, GitHub. Process management, signal handling."
  },
  {
    badge: "Tools",
    title: "DevOps & Cloud",
    desc: "Docker (deployed projects), CI/CD basics. IBM Full Stack Developer Cert (Dec 2023)."
  },
  {
    badge: "Research",
    title: "AI & Algorithms",
    desc: "A* search, BFS optimization, NLP chatbots. Interested in ML and low-resource NLP."
  }
]

export default function Skills() {
  return (
    <motion.section 
      id="skills"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.7 }}
      className="scroll-mt-24"
    >
      <SectionHeader title="Skills & Technologies" icon={<Cpu size={28} />} />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {skills.map((s, i) => (
          <div key={i} className="bg-bgCard/60 backdrop-blur-xl border border-borderSubtle/50 rounded-2xl p-6 shadow-sm hover:shadow-xl hover:shadow-accentNavy/5 hover:-translate-y-1 transition-all">
            <div className="mb-4">
              <span className="inline-block px-3 py-1 bg-gradient-to-r from-accentTeal/20 to-accentNavy/10 text-accentNavy text-xs font-bold uppercase tracking-wider rounded-full border border-borderSubtle/50">
                {s.badge}
              </span>
            </div>
            <h3 className="text-lg font-bold text-textMain mb-2">{s.title}</h3>
            <p className="text-textMuted text-sm leading-relaxed">{s.desc}</p>
          </div>
        ))}
      </div>
    </motion.section>
  )
}
