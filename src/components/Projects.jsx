import { motion } from 'framer-motion'
import { TerminalSquare, Network, Cpu, Terminal, Bot, Database, Globe, Activity } from 'lucide-react'
import SectionHeader from './SectionHeader'

const projects = [
  {
    icon: <Network size={22} />,
    name: "FTP Server with Load Balancing",
    desc: "Round-Robin load balancing, persistent TCP connections, fork() process pool and fault-tolerant resume downloads. Compiles with zero warnings under gcc -Wall -Wextra.",
    tech: "C · POSIX · Networking · Systems",
    link: "https://github.com/lakhdar-mouhieddine/Transfert-de-fichiers-FTP-"
  },
  {
    icon: <Cpu size={22} />,
    name: "ELF/ARM Linker",
    desc: "Custom linker for ELF/ARM binaries — symbol resolution, section merging and relocation handling in pure C.",
    tech: "C · Systems · Low-level · Compilers",
    link: "https://github.com/lakhdar-mouhieddine/ELF-arm-linker"
  },
  {
    icon: <Terminal size={22} />,
    name: "Mini-Shell UNIX",
    desc: "UNIX shell interpreter with job control, pipelines and POSIX signal handling built from scratch.",
    tech: "C · Unix · Systems · POSIX",
    link: "https://github.com/lakhdar-mouhieddine/Mini-SHELL"
  },
  {
    icon: <Bot size={22} />,
    name: "Sokoban AI Solver",
    desc: "Autonomous AI agent using optimized A* search — zero-allocation BFS heuristic, bipartite matching and advanced deadlock detection.",
    tech: "Java · AI · Algorithms · MVC",
    link: "https://github.com/lakhdar-mouhieddine/Sokoban"
  },
  {
    icon: <Database size={22} />,
    name: "Olympic Games Database",
    desc: "Relational database with SQL triggers, Excel data extraction and modular Python architecture.",
    tech: "Python · SQLite · SQL · Data",
    link: "https://github.com/lakhdar-mouhieddine/CEBD"
  },
  {
    icon: <Globe size={22} />,
    name: "Educational Ideation Platform",
    desc: "Full-stack collaborative platform with NLP chatbot, Google OAuth2 and REST API. Team of 6.",
    tech: "React · FastAPI · TypeScript · NLP",
    link: "https://github.com/lakhdar-mouhieddine/Educational-Ideation-Platform-for-ESI"
  },
  {
    icon: <Activity size={22} />,
    name: "Medical Practice Manager",
    desc: "Desktop application for managing appointments, consultations and patient records.",
    tech: "Java · JavaFX · OOP",
    link: "https://github.com/lakhdar-mouhieddine/App-m-dicale-JavaFX-"
  }
]

export default function Projects() {
  return (
    <motion.section 
      id="projects"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.7 }}
      className="scroll-mt-24"
    >
      <SectionHeader title="Selected Projects" icon={<TerminalSquare size={28} />} />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((p, i) => (
          <div key={i} className="group bg-bgCard/60 backdrop-blur-xl border border-borderSubtle/50 rounded-2xl p-6 flex flex-col shadow-sm hover:-translate-y-1 hover:shadow-xl hover:shadow-accentTeal/10 transition-all duration-300">
            <div className="flex items-center gap-3 mb-3">
              <span className="text-accentNavy bg-bgCard/80 border border-borderSubtle/50 p-2 rounded-md shadow-sm">
                {p.icon}
              </span>
              <h3 className="text-lg font-bold text-textMain leading-tight">{p.name}</h3>
            </div>
            <div className="text-xs font-mono text-accentTeal mb-4">
              {p.tech}
            </div>
            <p className="text-sm text-textMuted mb-6 flex-1 leading-relaxed">
              {p.desc}
            </p>
            <a href={p.link} target="_blank" rel="noreferrer" className="inline-flex w-fit items-center text-sm font-medium text-accentNavy hover:text-accentTeal transition-colors">
              View Source <span className="ml-1 text-lg leading-none">↗</span>
            </a>
          </div>
        ))}
      </div>
    </motion.section>
  )
}
