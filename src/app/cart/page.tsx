import { getCart } from "@/lib/db/cart";
import React from "react";
import CartEntry from "./CartEntry";

export const metadata = {
  title: "Shopping cart",
};

async function CartPage() {
  const cart = await getCart();
  return (
    <div className="">
      <h1 className="mb-5 text-5xl font-bold ">Your shopping busket</h1>
      {cart?.items.map((cartItem) => (
        <CartEntry cartItem={cartItem} key={cartItem.product.id} />
      ))}
    </div>
  );
}

export default CartPage;
