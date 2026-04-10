export default function SectionHeader({ title, icon }) {
  return (
    <div className="mb-10 flex flex-col sm:flex-row items-center text-center sm:text-left gap-3">
      {icon && <div className="text-accentNavy bg-accentNavy/5 p-3 rounded-xl border border-accentNavy/10">{icon}</div>}
      <h2 className="text-2xl sm:text-3xl font-bold text-textMain">{title}</h2>
    </div>
  )
}
