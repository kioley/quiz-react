export function IconBar({
  url,
  name,
  count,
}: {
  url: string
  name: string
  count: number
}) {
  return (
    <div className="basis-1/5 flex flex-row">
      {[...Array(count)].map((_, i) => (
        <div className="basis-[40%] m-[-3%]" key={i}>
          <img src={url} alt={name} />
        </div>
      ))}
    </div>
  )
}
