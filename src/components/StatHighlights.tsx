type Stat = {
  title: string,
  data: string
}

export const StatHighlights = (
  { stats }: { stats: Stat[] }
) => {
  return(
    <div className="flex flex-col text-center md:text-left md:flex-row gap-5 justify-center bg-white max-w-[1110] rounded-xl m-auto p-6 m:p-8 shadow-md">
      {stats.map((stats, i) => (
        <div key={i} className="flex flex-col gap-1 md:gap-2 md:w-1/4 md:border-l md:first:border-l-0 md:pl-8 md:first:pl-0">
          <h4 className="text-xs font-bold uppercase text-dark-gray">{stats.title}</h4>
          <p className="text-xl lg:text-2xl font-bold text-very-dark-gray">{stats.data}</p>
        </div>
      ))}
    </div>
  )
}
