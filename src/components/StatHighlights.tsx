type Stat = {
  title: string,
  data: string
}

export const StatHighlights = (
  { stats }: { stats: Stat[] }
) => {
  return(
    <div className="flex gap-5 justify-center bg-white max-w-screen-lg rounded-lg m-auto p-8 shadow-md">
      {stats.map((stats, i) => (
        <div key={i} className="flex flex-col w-1/4 border-l first:border-l-0 pl-8">
          <h4 className="text-xs tracking-widest uppercase text-dark-gray">{stats.title}</h4>
          <p className="text-2xl font-medium text-very-dark-gray">{stats.data}</p>
        </div>
      ))}
    </div>
  )
}
