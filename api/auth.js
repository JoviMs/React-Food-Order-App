let users = []; // Shared in-memory users array

export default function handler(req, res) {
  if (req.method === "POST") {
    const { action, email, password } = req.body;

    if (!email || !password) {
      return res
        .status(400)
        .json({ success: false, message: "Email and password are required." });
    }

    if (action === "register") {
      if (users.find((u) => u.email === email)) {
        return res
          .status(409)
          .json({ success: false, message: "Email already exists!" });
      }
      users.push({ email, password });
      return res
        .status(200)
        .json({ success: true, message: "Registration successful!" });
    }

    if (action === "login") {
      const user = users.find(
        (u) => u.email === email && u.password === password
      );
      if (user) {
        return res
          .status(200)
          .json({ success: true, message: "Login successful!" });
      }
      return res
        .status(401)
        .json({ success: false, message: "Invalid credentials!" });
    }

    return res.status(400).json({ success: false, message: "Invalid action." });
  }
  res.status(405).json({ success: false, message: "Method not allowed" });
}
