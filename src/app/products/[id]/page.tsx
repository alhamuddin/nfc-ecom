import PriceTag from "@/components/PriceTag";
import { prisma } from "@/lib/db/prisma";
import { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import React, { cache } from "react";
import AddToCartButton from "./AddToCartButton";
import { incrementProductQuantity } from "./action";


interface ProductPageProps {
  params: {
    id: string;
  };
}
const getProduct = cache(async (id: string) => {
  const product = await prisma.product.findUnique({ where: { id } });
  if (!product) notFound();
  return product;
});

export async function generateMetadata({
  params: { id },
}: ProductPageProps): Promise<Metadata> {
  const product = await getProduct(id);
  return {
    title: product.name + "--NFC E-COM",
    description: product.description,
    openGraph: {
      images: [{ url: product.imgUrl }],
    },
  };
}

async function page({ params: { id } }: ProductPageProps) {
  const product = await getProduct(id);

  //const product = await prisma.product.findUnique({ where: { id } });
  //if (!product) notFound();

  return (
    <div className="flex flex-col gap-4 lg:flex-row lg:items-center">
      <Image
        src={product.imgUrl}
        alt={product.name}
        width={500}
        height={500}
        className="rounded-lg"
        priority
      />
      <div>
        <h1 className="text-5xl font-bold">{product.name}</h1>
        <PriceTag price={product.price} className="mt-4" />
        <p className="py-6">{product.description}</p>
        <AddToCartButton
          productId={product.id}
          incrementalProductQuantity={incrementProductQuantity}
        />
      </div>
    </div>
  );
}

export default page;
