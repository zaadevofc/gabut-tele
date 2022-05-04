const key = 'zaadevofc'
let log = console.log;
let verify = false

function auth (keys, name) {
  if (keys !== key) return log('Key tidak valid!')
  verify = true
  log(`${name} Logged √`)
}

if (verify) {
  var a = 1
  var b = '1'
} else {
  log('xxxxxxx')
}