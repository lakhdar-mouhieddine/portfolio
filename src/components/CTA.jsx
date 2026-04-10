import { motion } from 'framer-motion'
import { Send } from 'lucide-react'

export default function CTA() {
  return (
    <motion.section 
      id="contact"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.7 }}
      className="scroll-mt-24 bg-[#0369A1] dark:bg-slate-900 rounded-3xl p-10 sm:p-16 text-center shadow-lg transition-colors border border-transparent dark:border-slate-800"
    >
      <div className="flex justify-center mb-6">
        <div className="bg-white/20 p-4 rounded-2xl backdrop-blur-sm shadow-inner">
          <Send size={36} className="text-white" />
        </div>
      </div>
      <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Let's build something awesome.</h2>
      <p className="text-sky-100/90 text-lg mb-10 max-w-lg mx-auto">
        I am currently looking for an Alternance in Network Infrastructure / Systems. If your team is looking for a dedicated engineer, let's talk.
      </p>
      
      <div className="flex flex-col sm:flex-row justify-center gap-4">
        <a href="mailto:mouhieddine.lakhdar@gmail.com" className="px-6 py-3 bg-white text-accentNavy font-bold rounded-lg hover:bg-gray-100 transition-colors shadow-sm">
          Send an email
        </a>
        <a href="https://github.com/lakhdar-mouhieddine" target="_blank" rel="noreferrer" className="px-6 py-3 bg-transparent border-2 border-white/20 text-white font-medium rounded-lg hover:bg-white/10 transition-colors">
          View GitHub
        </a>
      </div>
    </motion.section>
  )
}
