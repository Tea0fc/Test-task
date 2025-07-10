export const generateRandomNumber = (length: number): number => {
  let result = ''

  for (let i = 0; i < length; i++) {
    const randomDigit = Math.floor(Math.random() * 10)
    result += randomDigit.toString()
  }

  return parseInt(result, 10)
}
