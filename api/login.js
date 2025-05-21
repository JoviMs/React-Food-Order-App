let users = []; // This will be a different array than in register.js (stateless demo)

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { email, password } = req.body;

    // For demo, always fail (since users array is empty)
    // In production, use a database or shared store!
    return res
      .status(401)
      .json({ success: false, message: "Invalid credentials!" });
  }
  res.status(405).json({ success: false, message: "Method not allowed" });
}
