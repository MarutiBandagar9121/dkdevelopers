export default function StatsSection() {
    const stats = [
      {
        value: "41",
        label: "YEARS OF MATCHLESS LEGACY",
      },
      {
        value: "45",
        label: "SUCCESSFUL PROJECTS",
      },
      {
        value: "19+",
        label: "ONGOING PROJECTS",
      },
      {
        value: "9M",
        label: "SQ.FT. DELIVERED",
      },
      {
        value: "17M",
        label: "SQ.FT. IN PROGRESS",
      },
      {
        value: "10K",
        label: "HAPPY CUSTOMERS",
      },
    ]
  
    return (
      <section className="py-12 px-4 max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 text-center mb-8">
          {stats.map((stat, index) => (
            <div key={index} className="flex flex-col items-center justify-stretch">
              <span className="text-[#F44336] text-4xl md:text-5xl font-bold mb-2">{stat.value}</span>
              <span className="text-black text-sm md:text-base font-medium tracking-wide">{stat.label}</span>
            </div>
          ))}
        </div>
        <div className="flex justify-center">
          <button className="bg-[#F44336] text-white px-8 py-3 font-medium hover:bg-[#D32F2F] transition-colors duration-200">
            KNOW MORE
          </button>
        </div>
      </section>
    )
  }
  
  