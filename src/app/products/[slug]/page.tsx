import { products } from "@/data/products";
import { notFound } from "next/navigation";
import ProductClientPage from "@/components/ProductClientPage";

export function generateStaticParams() {
  return products.map((product) => ({
    slug: product.slug,
  }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const product = products.find((p) => p.slug === params.slug);
  if (!product) return {};
  return {
    title: `${product.name} | Hookwell Engineers`,
    description: product.description,
  };
}

export default function ProductPage({ params }: { params: { slug: string } }) {
  const product = products.find((p) => p.slug === params.slug);

  if (!product) {
    notFound();
  }

  return <ProductClientPage product={product} />;
}
