export async function loadBlob(url: string): Promise<string> {
  const response = await fetch(url)
  const blob = await response.blob()
  return URL.createObjectURL(blob)
}

export class imagesPreloader {
  imageURLs: string[]
  preloadImagesCount: number
  imageNames: string[]
  path: string
  preloadCounter: number

  constructor(preloadImagesCount: number, imageNames: string[], path: string) {
    this.imageURLs = []
    this.preloadImagesCount = preloadImagesCount
    this.imageNames = imageNames
    this.path = path
    this.preloadCounter = 0
    this._preloadAtStart()
  }

  _preloadAtStart() {
    while (this.preloadCounter < this.preloadImagesCount) {
      const i = this.preloadCounter
      this._preloadImage(i).then((url) => (this.imageURLs[i] = url))
      this.preloadCounter++
    }
  }

  async _preloadImage(num: number) {
    const src = this.path + this.imageNames[num]
    return await loadBlob(src)
  }

  rotate() {
    const i = this.preloadCounter
    if (i < this.imageNames.length) {
      this._preloadImage(i).then((url) => (this.imageURLs[i] = url))
      this.preloadCounter++
    }
  }

  getImageURL(num: number): string {
    console.log(this.preloadCounter - 2)
    console.log(this.imageURLs)
    console.log(this.imageURLs[num])

    return this.imageURLs[num]
  }
}

// export function loadBlobWithCache(url: string): Promise<string> {
//   const cache = new Map()

//   console.log("cache has", cache.has(url))
//   if (cache.has(url)) {
//     console.log("cache:", cache)

//     // если кеш содержит такой x,
//     return cache.get(url) // читаем из него результат
//   }

//   const result = loadBlob(url) // иначе, вызываем функцию

//   cache.set(url, result) // и кешируем (запоминаем) результат
//   console.log("cache+:", cache)
//   return result
// }

function cachingDecorator<T, R>(func: (x: T) => R): (x: T) => R {
  const cache = new Map()

  return function (x: T) {
    if (cache.has(x)) {
      // console.log(0, cache)
      // если кеш содержит такой x,
      return cache.get(x) // читаем из него результат
    }

    const result = func(x) // иначе, вызываем функцию

    cache.set(x, result) // и кешируем (запоминаем) результат
    // console.log(1, cache)
    return result
  }
}

export const loadBlobWithCache = cachingDecorator(loadBlob)
