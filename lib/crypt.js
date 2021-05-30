import crypto from "crypto"
import g from "lib/g"

export function kdf(password) {
  let key = crypto.createHash('sha256')
    .update(password)
    .digest('base64')
  return key
}

export function encrypt(data) {
  let key = Buffer.from(g.state.key,'base64')
  let iv = crypto.randomFillSync(Buffer.alloc(16))
  data = Buffer.from(data)
  let cipher = crypto
    .createCipheriv('aes-256-cbc',key,iv)

  let size = Buffer.alloc(4)
  size.writeInt32LE(data.length)
  let encrypted = cipher.update(data)
  console.log(typeof iv)
  console.log(typeof size)
  console.log(typeof encrypted)
  
  let res = Buffer.concat([iv,size,encrypted])
  return res.toString('base64')
}

export default {
  kdf,
  encrypt
}