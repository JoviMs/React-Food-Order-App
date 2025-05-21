let users = []; // In-memory users array (resets on every deployment!)

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { email, password } = req.body;

    if (!email || !password) {
      return res
        .status(400)
        .json({ success: false, message: "Email and password are required." });
    }

    if (users.find((u) => u.email === email)) {
      return res
        .status(409)
        .json({ success: false, message: "Email already exists!" });
    }

    users.push({ email, password }); // In production, hash the password!
    return res
      .status(200)
      .json({ success: true, message: "Registration successful!" });
  }
  res.status(405).json({ success: false, message: "Method not allowed" });
}
