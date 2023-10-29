export async function loadBlob(url: string): Promise<string> {
  const response = await fetch(url)
  const blob = await response.blob()
  return URL.createObjectURL(blob)
}

export const loadBlobWithCache = cachingDecorator(loadBlob)

function cachingDecorator<T, R>(func: (x: T) => R): (x: T) => R {
  const cache = new Map()

  return function (x: T) {
    // если кеш содержит такой x,
    if (cache.has(x)) {
      console.log("get image:", x)
      return cache.get(x) // читаем из него результат
    }
    console.log("load image:", x)

    const result = func(x) // иначе, вызываем функцию

    cache.set(x, result) // и кешируем (запоминаем) результат
    return result
  }
}

// const cache = new Map()
// export async function loadBlobWithCache(url: string): Promise<string> {
//   console.log(url)
//   console.log(cache.get(url))

//   if (cache.has(url)) {
//     return cache.get(url)
//   }

//   const blobUrl = await loadBlob(url)

//   cache.set(url, blobUrl)

//   return blobUrl
// }
