/* eslint-disable @typescript-eslint/ban-ts-comment */
// const YaGames = window.YaGames
// import { YaGames } from "https://yandex.ru/games/sdk/v2"

import { IPlayer } from "./types"

let ysdk
let player: IPlayer
let mode: string

export const yaGames = {
  initGame: () => {
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
  },

  setGains: (data: number): Promise<boolean> | void => {
    if (mode != "light") {
      player.setStats({
        gains: data,
      })
    }
  },

  getGains: function (setter: (gains: number) => void): Promise<number> | void {
    if (mode != "light") {
      player.getStats().then((s) => setter(s.gains))
    }
  },
}
