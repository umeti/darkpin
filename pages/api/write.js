import fetch from "node-fetch"

const owner = "umeti"
const repo = "darkpin"
const token = process.env["GITHUB_API_TOKEN"]

export default (req, res) => {
  try {
    var param = JSON.parse(req.body)
    var path = "db/content/" + param.name
    var data = param.data
  } catch (err) {
    res.status(500).send(err)
  }

  let body = JSON.stringify({
    message: "create content",
    content: Buffer.from(data).toString('base64'),
    branch: "main"
  })
  
  fetch(`https://api.github.com/repos/${owner}/${repo}/contents/${path}`, {
    method: "PUT",
    headers: {
      'Authorization': `token ${token}`
    },
    body,
  })
    .then(res => res.text())
    .then(data => {
      console.log(data)
      res.status(200).send(data)
    })
    .catch(err => {
      console.log(err)
      res.status(500).send(err)
    })
}