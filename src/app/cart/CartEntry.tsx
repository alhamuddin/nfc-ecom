"use client";

import { CartItemsWithProducts } from "@/lib/db/cart";
import { formatPrice } from "@/lib/format";
import Image from "next/image";
import Link from "next/link";

interface CartEntryProps {
  cartItem: CartItemsWithProducts;
}
export default function CartEntry({
  cartItem: { product, quantity },
}: CartEntryProps) {
  const quantityOptions: JSX.Element[] = [];
  for (let i = 1; i <= 99; i++) {
    quantityOptions.push(
      <option key={i} value={i}>
        {i}
      </option>,
    );
  }
  return (
    <div>
      <div className="flex flex-wrap items-center gap-3">
        <Image
          src={product.imgUrl}
          width={200}
          height={200}
          alt={product.name}
          className="rounded-lg"
        />
        <div>
          <Link href={"/products/" + product.id} className="font-semibold">
            {product.name}
          </Link>
          <div>Price : {formatPrice(product.price)}</div>
          <div className="my-1 flex items-center gap-2">
            Quantity :
            <select className="select bordered w-full max-w-[80px]">
              {quantityOptions}
            </select>
          </div>
          <div className="flex items-center font-semibold">
            Total Price : {formatPrice(product.price * quantity)}
          </div>
        </div>
      </div>

      <div className="divider" />
    </div>
  );
}
