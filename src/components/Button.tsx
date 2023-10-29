export function Button({
  label,
  onClick,
  disabled = false,
}: {
  label: string
  onClick: () => void
  disabled?: boolean
}) {
  return (
    <button
      disabled={disabled}
      onClick={onClick}
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
