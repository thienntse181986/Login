// export default function HomePage() {
//   return (
//     <div style={{ padding: "40px" }}>
//       <h1>🏠 Welcome to Auth App</h1>
//       <p>
//         Go to <a href="/login">Login</a> or <a href="/register">Register</a>
//       </p>
//     </div>
//   );
// }

"use client";

import Link from "next/link";

export default function HomePage() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        background: "linear-gradient(135deg, #e0f7fa, #fce4ec)",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <div
        style={{
          background: "#fff",
          padding: "40px",
          borderRadius: "16px",
          boxShadow: "0 8px 20px rgba(0,0,0,0.1)",
          textAlign: "center",
          maxWidth: "400px",
          width: "100%",
        }}
      >
        <h1 style={{ marginBottom: "16px", fontSize: "28px", color: "#333" }}>
          🏠 Welcome to <span style={{ color: "#1976d2" }}>Auth App</span>
        </h1>
        <p style={{ marginBottom: "24px", color: "#555", fontSize: "16px" }}>
          Please choose an option below:
        </p>
        <div style={{ display: "flex", gap: "12px", justifyContent: "center" }}>
          <Link
            href="/login"
            style={{
              background: "#1976d2",
              color: "#fff",
              padding: "10px 20px",
              borderRadius: "8px",
              textDecoration: "none",
              fontWeight: "bold",
              transition: "0.3s",
            }}
          >
            Login
          </Link>
          <Link
            href="/register"
            style={{
              background: "#43a047",
              color: "#fff",
              padding: "10px 20px",
              borderRadius: "8px",
              textDecoration: "none",
              fontWeight: "bold",
              transition: "0.3s",
            }}
          >
            Register
          </Link>
        </div>
      </div>
    </div>
  );
}
