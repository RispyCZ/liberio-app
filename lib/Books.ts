import books from '../books.json'

export const getBookById = (id: string) => {
  return books.filter((book) => book.id === id)[0]
}