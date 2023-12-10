import FormSubmitButton from "@/components/FormSubmitButton";
import { prisma } from "@/lib/db/prisma";
import { redirect } from "next/navigation";
import React from "react";
export const metadata = {
  title: "Add Product Page || NFC",
};

async function addProduct(formData: FormData) {
  "use server";
  const name = formData.get("name")?.toString();
  const description = formData.get("description")?.toString();
  const imgUrl = formData.get("imgUrl")?.toString();
  const price = Number(formData.get("price") || 0);

  if (!name || !description || !imgUrl || !price) {
    throw Error("Missing data in the field");
  }
  await prisma.product.create({
    data: { name, description, imgUrl, price },
  });
  redirect("/");
}

function addProductPage() {
  return (
    <div className=" flex flex-col items-center bg-slate-500 pl-4">
      <h1 className="mb-3 text-lg font-bold text-rose-200">
        {" "}
        Add your product
      </h1>
      <form action={addProduct} className="">
        <input
          type="text"
          placeholder="Name of the product"
          required
          name="name"
          className="input input-bordered input-primary mb-3 min-w-full"
        />
        <textarea
          className="textarea textarea-bordered textarea-primary mb-3 min-w-full "
          name="description"
          required
          placeholder="Write the description of product"
        />
        <input
          type="url"
          placeholder="Product image url"
          required
          name="imgUrl"
          className="input input-bordered input-primary mb-3 block min-w-full "
        />
        <input
          type="number"
          placeholder="Price of the product"
          required
          name="price"
          className="input input-bordered input-primary mb-5  min-w-full  "
        />
        <FormSubmitButton>Submit Now</FormSubmitButton>
      </form>
    </div>
  );
}

export default addProductPage;
