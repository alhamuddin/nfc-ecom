/* eslint-disable react/no-unescaped-entities */
import Link from "next/link";
import React from "react";

async function signin(formData: FormData) {
  "use server";
}

function Login() {
  return (
    <div className="my-[100px] grid place-items-center">
      <div className="rounded-lg border-t-4 border-green-500 p-3 shadow-lg">
        <h1 className="my-3 text-xl font-semibold">
          Enter your login credentials
        </h1>
        <form className="flex flex-col gap-5" action={signin}>
          <input
            className="w-[400px] border border-gray-200 bg-zinc-200/40 px-6 py-2"
            type="email"
            placeholder="Enter your email"
            required
          />
          <input
            className="w-[400px] border border-gray-200 bg-zinc-200/40 px-6 py-2"
            type="password"
            placeholder="Enter your password"
            required
          />
          <button className="btn btn-primary text-white">Login</button>
          <Link className="mt-3 text-right text-sm" href={"/signup"}>
            {" "}
            Don't have an account? Please
            <span className="underline"> Sign up</span>
          </Link>
        </form>
      </div>
    </div>
  );
}

export default Login;
