import { Product } from "@prisma/client";
import Link from "next/link";
import React from "react";
import PriceTag from "./PriceTag";
import Image from "next/image";

interface ProductCardsProps {
  product: Product;
}

function ProductCards({ product }: ProductCardsProps) {
  const isNew =
    Date.now() - new Date(product.createdAt).getTime() <
    1000 * 60 * 60 * 24 * 7;
  return (
    <Link
      href={"/products/" + product.id}
      className="card w-full bg-slate-500 text-white transition-shadow hover:shadow-xl"
    >
      <figure>
        <Image
          src={product.imgUrl}
          alt={product.name}
          height={400}
          width={800}
          className="h-48 object-cover"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{product.name}</h2>
        {isNew && <div className="badge badge-secondary">New</div>}
        <p className="line-clamp-4">{product.description}</p>
        <PriceTag price={product.price} />
      </div>
    </Link>
  );
}

export default ProductCards;
