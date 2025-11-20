import React from 'react'

export const lazyLoadImage = (src: string): Promise<string> => {
  return new Promise((resolve, reject) => {
    const img = new Image()
    img.onload = () => resolve(src)
    img.onerror = reject
    img.src = src
  })
}

export const useImageLazyLoad = (src: string) => {
  const [imageSrc, setImageSrc] = React.useState<string | null>(null)
  const [isLoading, setIsLoading] = React.useState(true)

  React.useEffect(() => {
    setIsLoading(true)
    lazyLoadImage(src)
      .then(setImageSrc)
      .catch(() => setImageSrc(src))
      .finally(() => setIsLoading(false))
  }, [src])

  return { imageSrc, isLoading }
}
