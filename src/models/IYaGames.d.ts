export {}
declare global {
  /*~ Here, declare things that go in the global namespace, or augment
   *~ existing declarations in the global namespace
   */
  interface String {
    fancyFormat(): string
  }

  interface Window {
    YaGames: {
      init: () => Promise<{
        features: { LoadingAPI: { ready: () => void } }
        getPlayer: ({ scopes }: { scopes: boolean }) => Promise<IPlayer>
      }>
      setStats: <T extends object>(stats: T) => Promise<boolean>
      getStats: <T extends object>(stats: T | null) => Promise<T>
    }
  }
}

export interface IPlayer {
  getMode: () => string
  setStats: <T extends object>(stats: T) => Promise<boolean>
  getStats: <T extends object>(stats: T | void) => Promise<T>
}
