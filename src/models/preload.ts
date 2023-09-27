import rightSoundSrc from "../assets/audio/right.mp3"
import wrongSoundSrc from "../assets/audio/wrong.mp3"
import clickSoundSrc from "../assets/audio/click.mp3"
import winSoundSrc from "../assets/audio/win.mp3"
import defeatSoundSrc from "../assets/audio/defeat.mp3"
import introSoundSrc from "../assets/audio/Intro.mp3"
import starImgSrc from "/src/assets/gui/star.png"
import heartImgSrc from "/src/assets/gui/heart.png"
import quizImgSrc from "/src/assets/images/quiz.png"
import logoImgSrc from "/src/assets/images/friends_logo.png"

export const sound = {
  right: new Audio(rightSoundSrc),
  wrong: new Audio(wrongSoundSrc),
  click: new Audio(clickSoundSrc),
  win: new Audio(winSoundSrc),
  defeat: new Audio(defeatSoundSrc),
  intro: new Audio(introSoundSrc),
}

export const images: HTMLImageElement[] = []

const imagesNumber = 4

for (let i = 0; i < imagesNumber; i++) {
  images[i] = new Image()
}

images[0].src = starImgSrc
images[1].src = heartImgSrc
images[2].src = quizImgSrc
images[3].src = logoImgSrc
