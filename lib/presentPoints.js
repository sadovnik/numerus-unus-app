const joinCharacter = ' '

const appendZerosUpTo3 = (number) => {
  const numberString = number.toString()
  const zeroCountToAppend = 3 - numberString.length

  return '0'.repeat(zeroCountToAppend) + numberString
}

export default function presentPoints (points) {
  if (points < 999) {
    return points.toString()
  }

  const quotient = ~~(points / 1000)
  const remainder = points % 1000

  return presentPoints(quotient) + joinCharacter + appendZerosUpTo3(remainder)
}
