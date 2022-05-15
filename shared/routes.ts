export const URLPath = (url: string | undefined) => {
  if (!url) return ''

  const { pathname } = new URL('http://localhost'.concat(url))

  return pathname
}
