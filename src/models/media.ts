import rightSoundSrc from "../assets/audio/right.mp3"
import wrongSoundSrc from "../assets/audio/wrong.mp3"
import clickSoundSrc from "../assets/audio/click.mp3"
import winSoundSrc from "../assets/audio/win.mp3"
import defeatSoundSrc from "../assets/audio/defeat.mp3"
import introSoundSrc from "../assets/audio/Intro.mp3"
import { gameSettings } from "../settings"

export const sound = {
  right: createAudio(rightSoundSrc),
  wrong: createAudio(wrongSoundSrc),
  click: createAudio(clickSoundSrc),
  win: createAudio(winSoundSrc),
  defeat: createAudio(defeatSoundSrc),
  music: createAudio(
    introSoundSrc,
    !gameSettings.music,
    gameSettings.loopMusic
  ),
}

function createAudio(
  url: string,
  disable: boolean | void,
  loop: boolean | void
) {
  if (disable) return () => undefined

  const audio = new Audio(url)
  audio.loop = loop || false

  return () => {
    audio.play()
  }
}
