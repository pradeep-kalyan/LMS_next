"use client";
import { useState } from "react";
import InputBox from "./_components/inputBox";
import { Key, User } from "lucide-react";
import { login } from "./actions/auth/login";

export default function Home() {
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const gen_login = async (formData: FormData) => {
    const email = formData.get("UserName");
    const password = formData.get("Password");

    if (!email || !password) {
      setError("Fill all the fields");
      return;
    }

    try {
      setLoading(true);
      const res = await login({
        email: email as string,
        password: password as string,
      });

      if (!res.success) {
        setError(res.message || "Invalid credentials");
      } else {
        // Redirect or success state
      }
    } catch (err) {
      setError("Something went wrong. Try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full h-screen flex justify-center items-center bg-gradient-to-br from-purple-900 to-indigo-800 px-4">
      <div className="w-full max-w-md bg-white/20 rounded-3xl shadow-2xl backdrop-blur-lg p-8 flex flex-col gap-8 items-center border border-white/30">
        <h2 className="font-semibold text-3xl text-white tracking-wide text-center">
          Leave Management System
        </h2>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            const formData = new FormData(e.currentTarget);
            gen_login(formData);
          }}
          className="flex flex-col justify-center items-center gap-6 w-full"
        >
          <InputBox
            name="UserName"
            label="User Name"
            type="text"
            placeholder="e.g., John Doe"
            icon={User}
          />
          <InputBox
            name="Password"
            label="Password"
            type="password"
            placeholder="e.g., 6-12 characters"
            icon={Key}
          />

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-white text-amber-600 font-semibold py-3 rounded-xl shadow-md hover:bg-amber-100 transition-all cursor-pointer disabled:opacity-60"
          >
            {loading ? "Logging in..." : "Submit"}
          </button>

          {error && <h2 className="text-red-500">{error}</h2>}
          <h2 className="text-gray-800 text-center">
            Don't have an account? Contact HR department.
          </h2>
        </form>
      </div>
    </div>
  );
}
