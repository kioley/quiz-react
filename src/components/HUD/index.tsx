import { IconBar } from "./IconBar"
import { ProgressBar } from "./ProgressBar"
import starImgSrc from "/src/assets/gui/star.png"
import heartImgSrc from "/src/assets/gui/heart.png"
import { useQuizStore } from "../../store"

function Hud() {
  const gainsCount = useQuizStore((s) => s.gains)
  const livesCount = useQuizStore((s) => s.lives)
  const progress = useQuizStore((s) => s.progress)

  return (
    <>
      <div className="w-full h-full flex flex-row items-center justify-between">
        <IconBar url={starImgSrc} name="gains" count={gainsCount} />
        <ProgressBar progress={progress} />
        <IconBar url={heartImgSrc} name="lives" count={livesCount} />
      </div>
    </>
  )
}

export default Hud
