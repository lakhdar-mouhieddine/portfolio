export default function Footer() {
  return (
    <footer className="border-t border-borderSubtle bg-bgCard mt-auto relative z-10">
      <div className="max-w-7xl mx-auto px-6 sm:px-12 py-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-textMuted font-medium">
        <div>
          © 2026 Lakhdar Mouhieddine Bouguerra
        </div>
        <div className="flex gap-6">
          <a href="https://github.com/lakhdar-mouhieddine" target="_blank" rel="noreferrer" className="hover:text-accentNavy transition-colors">GitHub</a>
          <a href="mailto:mouhieddine.lakhdar@gmail.com" className="hover:text-accentNavy transition-colors">Email</a>
          <a href="https://lakhdar-mouhieddine.github.io/portfolio/" className="hover:text-accentNavy transition-colors">Portfolio</a>
        </div>
      </div>
    </footer>
  )
}
