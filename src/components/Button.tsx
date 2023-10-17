import {
  useCallback,
  useEffect,
  useLayoutEffect,
  useMemo,
  useRef,
  useState,
} from "react"

export function Button({
  label,
  onClick,
}: {
  label: string
  onClick: () => void
}) {
  const [disabled, setDisabled] = useState(false)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  // const disabled = useRef(false)

  const clickHandler = useCallback(() => {
    setDisabled(true)
    // disabled.current = true
    onClick()
  }, [onClick])

  useLayoutEffect(() => {
    // console.log("pre:", disabled, label)
    setDisabled(false)
    // console.log("post:", disabled, label)
  }, [label])
  // console.log("in:", disabled, label)

  return (
    <button
      disabled={disabled}
      onClick={clickHandler}
      className="
      basis-1/5 w-full text-white text-[5cqi] font-bold
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
