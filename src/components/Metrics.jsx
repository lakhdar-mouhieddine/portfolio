import { motion } from 'framer-motion'
import { BarChart } from 'lucide-react'
import SectionHeader from './SectionHeader'

export default function Metrics() {
  return (
    <motion.section 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.7 }}
      className="scroll-mt-24"
    >
      <SectionHeader title="By the numbers" icon={<BarChart size={28} />} />
      <div className="flex flex-wrap gap-4">
        {[
          { v: "7", l: "Projects on GitHub" },
          { v: "3", l: "Professional experiences" },
          { v: "2", l: "Universities (ESI + UGA)" },
          { v: "4", l: "Languages spoken (Arabic, French, English, Italian)" }
        ].map((m, i) => (
          <div key={i} className="flex-1 min-w-[200px] bg-white/60 backdrop-blur-xl border border-white/50 shadow-sm py-6 px-6 rounded-2xl flex flex-col justify-center hover:bg-white/80 transition-colors">
            <span className="text-3xl font-extrabold text-accentNavy mb-2">{m.v}</span>
            <span className="text-sm font-medium text-textMuted">{m.l}</span>
          </div>
        ))}
      </div>
    </motion.section>
  )
}
