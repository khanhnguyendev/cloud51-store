import { client } from "@/sanity/lib/client";

export async function getProducts() {
  const query = `*[_type == "sanPham"] {
    _id,
    title,
    slug,
    price,
    detail,
    "imageUrl": image.asset->url,
    tag[]->{
      _id, 
      name, 
      slug
    },
  }`;
  return await client.fetch(query);
}

export async function getBannerImages() {
  const query = `*[_type == "banner" && isActive == true] {
    _id,
    title,
    "imageUrl": image.asset->url,
    url,
    isActive
  }`;
  return await client.fetch(query);
}

export async function getLatestEventImage() {
  const query = `*[_type == "event" && isActive == true] | order(_createdAt desc)[0] {
    _id,
    title,
    "imageUrl": image.asset->url,
    url,
    isActive
}`;
  return await client.fetch(query);
}
