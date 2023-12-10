/* eslint-disable react/no-unescaped-entities */
import Link from "next/link";
import React from "react";
import bcrypt from "bcryptjs";
import { prisma } from "@/lib/db/prisma";
import { string } from "zod";
import FormSubmitButton from "@/components/FormSubmitButton";

async function createUser(formData: FormData) {
  "use server";
  const email = formData.get("email")?.toString();
  const name = formData.get("name")?.toString();
  const password = formData.get("password")?.toString();

  if (!email || !name || !password) {
    const isError = true;
    throw Error("Some field are missing");
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  await prisma.user.create({ data: { email, password: hashedPassword, name } });
}

function signUp() {
  return (
    <div className="my-[100px] grid place-items-center">
      <div className="rounded-lg border-t-4 border-green-500 p-3 shadow-lg">
        <h1 className="my-3 text-xl font-semibold">Enter details to sign up</h1>
        <form className="flex flex-col gap-5" action={createUser}>
          <input
            className="w-[400px] border border-gray-200 bg-zinc-200/40 px-6 py-2"
            type="text"
            name="name"
            placeholder="Enter your name"
            required
          />
          <input
            className="w-[400px] border border-gray-200 bg-zinc-200/40 px-6 py-2"
            type="email"
            name="email"
            placeholder="Enter your email"
            required
          />

          <input
            className="w-[400px] border border-gray-200 bg-zinc-200/40 px-6 py-2"
            type="password"
            name="password"
            placeholder="Enter your password"
            required
          />
          <FormSubmitButton className="btn-block">Sign Up</FormSubmitButton>
          <Link className="mt-3 text-right text-sm" href={"/login"}>
            {" "}
            Already have an account? Please
            <span className="underline"> Login</span>
          </Link>
        </form>
      </div>
    </div>
  );
}

export default signUp;
