type Stat = {
  title: string,
  data: string
}

export const StatHighlights = (
  { stats }: { stats: Stat[] }
) => {
  return(
    <div className="flex gap-5 justify-center bg-white max-w-screen-lg rounded-lg m-auto">
      {stats.map((stats, i) => (
        <div key={i} className="flex flex-col w-1/4 p-2">
          <h4 className="uppercase">{stats.title}</h4>
          <p className="text-2xl">{stats.data}</p>
        </div>
      ))}
    </div>
  )
}
