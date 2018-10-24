const url = 'https://fish-text.ru/get?type=paragraph&number=5'
const paragraphDelimiter = '\\n\\n'

export default function fetchPointChargeItems () {
  return fetch(url)
    .then((response) => response.json())
    .then((response) => {
      const items = response
        .text
        .split(paragraphDelimiter)
        .filter(Boolean)

      return items
    })
}
