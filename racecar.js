function racecar(target) {
  let position = 0
  let count = 0
  let speed = 1

  while (true) {
    if (position === target) {
      break
    } else {
        count ++
        if (position < target) {
          position += speed
          speed *= 2
        } else {
            if (speed > 0) {
              speed = -1
            } else {
              position += speed
              speed = 1
            }
        }
    }
  }

  return count
}

const result = racecar(6)

console.log(result)
