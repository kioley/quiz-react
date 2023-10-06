import rightSoundSrc from "../assets/audio/right.mp3"
import wrongSoundSrc from "../assets/audio/wrong.mp3"
import clickSoundSrc from "../assets/audio/click.mp3"
import winSoundSrc from "../assets/audio/win.mp3"
import defeatSoundSrc from "../assets/audio/defeat.mp3"
import introSoundSrc from "../assets/audio/Intro.mp3"
import starImgSrc from "/src/assets/gui/star.png"
import heartImgSrc from "/src/assets/gui/heart.png"
import quizImgSrc from "/src/assets/images/quiz.png"
import friendsImgSrc from "/src/assets/images/friends_logo.png"
import { preloadAsURL } from "../utils/preloaders"
import { gameSettings } from "../gameSettings"

export const sound = {
  right: createAudio(rightSoundSrc),
  wrong: createAudio(wrongSoundSrc),
  click: createAudio(clickSoundSrc),
  win: createAudio(winSoundSrc),
  defeat: createAudio(defeatSoundSrc),
  intro: createAudio(
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
  const audioPromise = preloadAsURL(url).then((src) => {
    const audio = new Audio(src)
    audio.loop = loop || false
    return audio
  })

  return () => {
    if (!disable) audioPromise.then((audio) => audio.play())
  }
}

console.log(sound.win)

export const images = {
  star: starImgSrc,
  heart: heartImgSrc,
  friends: friendsImgSrc,
  quiz: quizImgSrc,
}

for (const _name in images) {
  const name = _name as keyof typeof images
  preloadAsURL(images[name]).then((url) => (images[name] = url))
}
