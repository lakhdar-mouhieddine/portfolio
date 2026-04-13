import { motion } from 'framer-motion'
import { Briefcase } from 'lucide-react'
import SectionHeader from './SectionHeader'

const exps = [
  {
    role: "Data Science Collaboration",
    company: "Survision Data",
    date: "Feb 2026–Present",
    desc: "Analyzing and visualizing datasets with Python for business intelligence. Stage formalized June–August 2026."
  },
  {
    role: "Lead External Relations",
    company: "GDG Algiers",
    date: "2023–2024",
    desc: "Organized GDG Hack, GDG School and Google I/O Extended. Secured sponsorships with major industrial and technology leaders in Algeria."
  },
  {
    role: "Marketing Lead",
    company: "School of AI Algiers",
    date: "2023–2024",
    desc: "Co-organized the HAICK hackathon and AI Camp events."
  },
  {
    role: "Software Engineering Intern",
    company: "Condor Electronics",
    date: "Aug–Sep 2023",
    desc: "Developed Java applications applying OOP principles in a professional environment."
  },
  {
    role: "IT Intern",
    company: "Fondation Beiban",
    date: "Jul 2023",
    desc: "Technical support, system installation and configuration."
  }
]

export default function Experience() {
  return (
    <motion.section 
      id="experience"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.7 }}
      className="scroll-mt-24"
    >
      <SectionHeader title="Experience" icon={<Briefcase size={28} />} />
      <div className="space-y-6">
        {exps.map((exp, i) => (
          <div key={i} className="flex flex-col sm:flex-row gap-2 sm:gap-6 border-l-2 border-borderSubtle pl-4 py-1">
            <div className="shrink-0 sm:w-40 text-sm font-medium text-textMuted mt-1">
              {exp.date}
            </div>
            <div>
              <h3 className="text-lg font-semibold text-textMain">
                {exp.role} <span className="text-accentTeal font-normal">· {exp.company}</span>
              </h3>
              <p className="text-textMuted mt-2 leading-relaxed">
                {exp.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </motion.section>
  )
}
