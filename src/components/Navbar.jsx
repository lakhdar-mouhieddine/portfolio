import ThemeToggle from './ThemeToggle'

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-bgCard/80 backdrop-blur-xl border-b border-borderSubtle transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6 sm:px-12 py-4 flex justify-between items-center text-sm font-medium">
        <div className="text-textMain select-none text-xl font-bold tracking-tight">
          LB<span className="text-accentNavy">.</span>
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
