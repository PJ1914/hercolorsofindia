"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
// In a real app, this would use Firebase Auth signInWithEmailAndPassword
// import { signInWithEmailAndPassword } from "firebase/auth";
// import { auth } from "@/lib/firebase/client";

export default function AdminLoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    // Placeholder for actual authentication logic
    setTimeout(() => {
      // Mock successful login
      router.push("/admin/dashboard");
    }, 1000);
  };

  return (
    <div className="w-full max-w-md bg-card p-8 rounded-lg shadow-lg border border-border">
      <div className="text-center mb-8">
        <h1 className="font-serif text-3xl font-bold text-primary mb-2">Admin Access</h1>
        <p className="text-sm text-foreground/70">Sign in to manage Her Colors of India</p>
      </div>

      <form onSubmit={handleLogin} className="space-y-6">
        <div>
          <label className="block text-sm font-medium mb-2">Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-3 border border-border rounded-md bg-background focus:ring-2 focus:ring-primary focus:outline-none"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-2">Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-4 py-3 border border-border rounded-md bg-background focus:ring-2 focus:ring-primary focus:outline-none"
            required
          />
        </div>
        <button
          type="submit"
          disabled={loading}
          className="w-full bg-primary text-primary-foreground font-medium py-3 rounded-md hover:bg-primary/90 transition-colors disabled:opacity-50"
        >
          {loading ? "Authenticating..." : "Sign In"}
        </button>
      </form>
    </div>
  );
}
