import Link from "next/link";
import Image from "next/image";
import { redirect } from "next/navigation";
import { getCart } from "@/lib/db/cart";
import ShoppingCartButton from "./ShoppingCartButton";

async function searchProduct(formData: FormData) {
  "use server";
  const searchQuery = formData.get("searchQuery")?.toString();
  if (searchQuery) {
    redirect("/search?query=" + searchQuery);
  }
}

export async function Navbar() {
  const cart = await getCart();
  return (
    <div>
      <div className="navbar my-2 justify-between rounded-md bg-slate-300 p-2 sm:flex-row">
        <div className="">
          <Link href={"/"} className=" mr-6 flex rounded-md pr-3">
            <Image
              className=""
              src={"/logo-color.svg"}
              alt={"logo"}
              width={80}
              height={60}
            />
            <div className="mt-5 gap-2 p-2">
              <span className=" font-serif text-3xl font-bold text-cyan-50 shadow-md">
                NFC{" "}
              </span>
              <span className="font-serif text-3xl font-bold text-cyan-400 shadow-md">
                Communication
              </span>
            </div>
          </Link>
        </div>
        <div className="content-end">
          <div className=" flex gap-2">
            <form action={searchProduct}>
              <div className="form-control">
                <input
                  type="text"
                  name="searchQuery"
                  placeholder="Search here"
                  className="input input-bordered w-full min-w-[100px]"
                />
              </div>
            </form>
            <ShoppingCartButton cart={cart} />
          </div>
        </div>
      </div>
    </div>
  );
}
