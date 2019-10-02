/*
 * Функция `convertBytesToHuman` должна принимать
 * аргумент `bytes` только числового типа.
 * Необходимо предусмотреть защиту от
 * передачи аргументов неправильного типа
 * и класса (например, отрицательные числа)
 */

export default function convertBytesToHuman(bytes) {
  if ((typeof bytes == 'number') && (bytes >= 0) && !(isNaN(bytes))) {
    let answer
    const sizes = {
      Byte: 1,
      KB: 1024,
      MB: 1024**2,
      GB: 1024**3
    }
    let floor = 0
    let key
    for (key of Object.keys(sizes).reverse()) {
      answer = bytes / sizes[key]
      floor = Math.floor(answer)
      if (floor)
        break
    }
    answer = `${answer.toFixed(2)} ${key}`
    return answer
  }
  return false
}
