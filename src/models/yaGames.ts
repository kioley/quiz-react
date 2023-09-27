/* eslint-disable @typescript-eslint/ban-ts-comment */
// const YaGames = window.YaGames
// import { YaGames } from "https://yandex.ru/games/sdk/v2"

import { IPlayer } from "./IYaGames"

let ysdk
let player: IPlayer
let mode: string

export function initGame() {
  window.YaGames.init()
    .then((_sdk) => {
      ysdk = _sdk

      ysdk.features.LoadingAPI?.ready()

      ysdk.getPlayer({ scopes: false }).then((_player) => {
        player = _player
        mode = player.getMode()
      })
      // .catch((err) => {
      // Ошибка при инициализации объекта Player.
      // })
    })
    .catch(console.error)
}

export function setStars(data: number) {
  if (mode != "light") {
    player.setStats({
      stars: data,
    })
  }
}
export function getStars() {
  if (mode != "light") {
    return player.getStats()
  }
}
