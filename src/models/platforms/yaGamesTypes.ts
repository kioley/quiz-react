export {}
declare global {
  interface Window {
    YaGames: {
      init: () => Promise<IYsdk>
    }
  }
}

export interface IPlayer {
  getMode: () => string
  setStats: <T extends IStats>(stats: T) => Promise<boolean>
  getStats: <T extends IStats>(stats: T | void) => Promise<T>
}

interface IStats {
  gains: number
}

export interface IYsdk {
  features: { LoadingAPI: { ready: () => void } }
  getPlayer: ({ scopes }: { scopes: boolean }) => Promise<IPlayer>
}
