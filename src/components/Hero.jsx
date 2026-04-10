import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <motion.section 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="pt-24 pb-12 flex flex-col items-center text-center relative z-10"
    >
      <div className="mb-6 terminal-text text-sm sm:text-base text-textMuted bg-white/60 backdrop-blur-md px-4 py-2 rounded-lg border border-white/50 shadow-sm">
        <span className="text-accentTeal">lakhdar@uga</span>:<span className="text-accentNavy">~$</span> whoami
      </div>
      
      <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-textMain tracking-tight mb-6">
        Lakhdar Mouhieddine <br className="hidden sm:block" /> Bouguerra
      </h1>
      
      <p className="text-lg sm:text-xl text-textMuted max-w-2xl mb-8 leading-relaxed">
        Computer Science Student at Université Grenoble Alpes · ESI Algiers Alumni · Specializing in Network Infrastructure, Systems Architecture, and Low-Level Programming.
      </p>

      <div className="flex flex-wrap justify-center gap-2 mb-10">
        {['C', 'Python', 'Java', 'React', 'FastAPI', 'Linux', 'TCP/IP', 'Docker'].map((tech) => (
          <span key={tech} className="px-3 py-1 bg-bgCard/60 backdrop-blur-md border border-borderSubtle/50 shadow-sm rounded-full text-sm text-textMuted font-medium hover:text-accentNavy transition-colors cursor-default">
            {tech}
          </span>
        ))}
      </div>

      <div className="flex flex-col sm:flex-row gap-4">
        <a href="#projects" className="px-6 py-3 bg-gradient-to-r from-accentNavy to-accentTeal text-white font-medium rounded-lg shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all">
          View Projects
        </a>
        <a href="https://github.com/lakhdar-mouhieddine" target="_blank" rel="noreferrer" className="px-6 py-3 bg-white/60 backdrop-blur-md border-2 border-borderSubtle text-textMain font-medium rounded-lg hover:border-accentTeal hover:text-accentNavy transition-colors">
          GitHub
        </a>
      </div>
    </motion.section>
  )
}
