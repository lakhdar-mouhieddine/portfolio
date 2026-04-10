import { motion } from 'framer-motion'
import { User } from 'lucide-react'
import SectionHeader from './SectionHeader'

export default function About() {
  return (
    <motion.section 
      id="about"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.7 }}
      className="scroll-mt-24"
    >
      <SectionHeader title="About" icon={<User size={28} />} />
      <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
        <div className="md:col-span-8 text-textMuted text-lg leading-relaxed space-y-6">
          <p>
            I began at ESI Algiers — one of Algeria's most selective CS schools — 
            where intensive preparatory classes built my foundations in algorithms, 
            systems, and mathematics.
          </p>
          <p>
            Now at Université Grenoble Alpes, I build projects that span from 
            resilient FTP Servers and UNIX Shells to distributed network 
            architectures. I like working close to the machine — diving deep 
            into TCP/IP protocols, sockets, and the infrastructure underneath 
            the abstractions.
          </p>
        </div>
        
        <div className="md:col-span-4 grid grid-cols-2 gap-4">
          {[
            { label: "Projects", val: "7" },
            { label: "Internships", val: "3" },
            { label: "Universities", val: "2" },
            { label: "Languages", val: "4" }
          ].map((stat, i) => (
            <div key={i} className="bg-white/60 backdrop-blur-xl border border-white/50 shadow-sm rounded-2xl p-4 flex flex-col justify-center items-center text-center hover:bg-white/80 transition-colors">
              <span className="text-3xl font-bold text-accentNavy mb-1">{stat.val}</span>
              <span className="text-sm text-textMuted font-medium">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
    </motion.section>
  )
}
