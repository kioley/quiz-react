import { yaGames } from "../models/yaGames"
import * as store from "./store"
import { Platforms, gameSettings } from "../gameSettings"

export function init() {
  // if (sound.intro) {
  //   sound.intro.loop = gameSettings.loopMusic
  // }

  let platform
  const platformName = gameSettings.platform
  if (platformName === Platforms.YaGames) {
    platform = yaGames
  } else {
    platform = undefined
  }

  platform?.initGame()
  platform?.getGains(store.setGains)
  //   store.setGains(gains ? await gains : 0)
  return platform
}
