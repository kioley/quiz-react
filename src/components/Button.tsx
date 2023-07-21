import { useCallback, useState } from "react"

export function Button({
  label,
  onClick,
}: {
  label: string
  onClick: () => boolean
}) {
  const [state, setState] = useState(false)

  const clickHandler = useCallback(() => setState(!onClick()), [onClick])

  return (
    <button
      disabled={state}
      onClick={clickHandler}
      className="
      basis-1/5 w-full text-white text-[5cqi]
      bg-button bg-[length:100%_100%] bg-no-repeat
      hover:bg-button-hover
      active:bg-button
      disabled:bg-button-wrong
      after:bg-button-hover
      before:bg-button-wrong
      "
    >
      {label}
    </button>
  )
}
