
export default function handler(req, res) {
  if (req.method === 'POST') {
    // Process a POST request
    const auth = req.body
    console.log(auth)
    res.status(200).json({ ...auth, working: true })
  } else {
    res.handler(405).json({ message: 'Method not allowed' })
  }
}
