import ThemeToggle from './ThemeToggle'

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-bgCard/80 backdrop-blur-xl border-b border-borderSubtle transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6 sm:px-12 py-4 flex justify-between items-center text-sm font-medium">
        <div className="flex items-center gap-3">
          <div className="flex items-center justify-center w-9 h-9 rounded-xl bg-gradient-to-br from-accentNavy to-accentTeal text-white shadow-lg shadow-accentNavy/20 group hover:scale-105 transition-transform cursor-pointer">
            <span className="font-bold text-sm tracking-widest ml-0.5">LB</span>
          </div>
        </div>
        <div className="flex items-center gap-6">
          <div className="hidden sm:flex gap-6 text-textMuted">
            <a href="#about" className="hover:text-accentNavy transition-colors">About</a>
            <a href="#experience" className="hover:text-accentNavy transition-colors">Experience</a>
            <a href="#skills" className="hover:text-accentNavy transition-colors">Skills</a>
            <a href="#projects" className="hover:text-accentNavy transition-colors">Projects</a>
            <a href="#contact" className="hover:text-accentNavy transition-colors">Contact</a>
          </div>
          <ThemeToggle />
        </div>
      </div>
    </nav>
  );
}
