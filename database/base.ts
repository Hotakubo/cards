import type { TypeCards } from './cards'
import fs from 'fs/promises'

const DATABASE_PATH = process.env.DATABASE_PATH

export const read = async (): Promise<TypeCards[]> => {
  try {
    if (DATABASE_PATH) {
      const cards = await fs.readFile(DATABASE_PATH, 'utf8')

      return JSON.parse(cards)
    }
    return []
  } catch (error) {
    throw error
  }
}

export const update = async (data: TypeCards[]) => {
  if (DATABASE_PATH) return await fs.writeFile(DATABASE_PATH, JSON.stringify(data))
}
