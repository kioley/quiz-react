export function ProgressBar() {
  const a = 60 + "%"
  return (
    <div className="h-3/4 basis-7/12 shadow-[0px_0px_3px_#FC05FF] bg-neutral-200 dark:bg-neutral-600 rounded-xl overflow-hidden">
      <div style={{ width: a }} className="h-full bg-sky-500"></div>
    </div>
  )
}
