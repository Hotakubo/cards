const ORIGIN = 'http://localhost'

export const URLPath = (url: string | undefined) => {
  if (!url) return ''

  const { pathname } = new URL(ORIGIN.concat(url))

  return pathname
}
