const link = [104, 116, 116, 112, 115, 58, 47, 47, 119, 119, 119, 46, 121, 111, 117, 116, 117, 98, 101, 46, 99, 111, 109, 47, 119, 97, 116, 99, 104, 63, 118, 61, 100, 81, 119, 52, 119, 57, 87, 103, 88, 99, 81]
const rKey = [ 75, 101, 121, 82 ]
const kKey = [ 75, 101, 121, 75 ]
const lKey = [ 75, 101, 121, 76 ]
const pos = 0
const keyCodes = [ String.fromCharCode(...rKey), String.fromCharCode(...kKey), String.fromCharCode(...rKey), String.fromCharCode(...lKey)]
document.addEventListener('keydown', e => {
  if (e.code === keyCodes[pos]) {
    pos++
    if (pos == keyCodes.length) {
      const link = String.fromCharCode(...link)
      window.location.href = link
    }
  } else pos = 0
})