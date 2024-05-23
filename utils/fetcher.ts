import { Banner, Event, Product } from "./interface";

async function fetchData(query: string) {
  const res = await fetch(
    process.env.SANITY_BASE_URL + "?query=" + encodeURIComponent(query),
    {
      next: { revalidate: 60 },
    }
  );
  const data = await res.json();
  return data.result;
}

export async function fetchProducts(): Promise<Product[]> {
  const query = `*[_type == "sanPham"] {
    _id,
    title,
    priority,
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
  return await fetchData(query);
}

export async function fetchBannerImage(): Promise<Banner[]> {
  const query = `*[_type == "banner" && isActive == true] {
    _id,
    title,
    "imageUrl": image.asset->url,
    url,
    isActive
  }`;
  return await fetchData(query);
}

export async function fetchLatestEvent(): Promise<Event> {
  const query = `*[_type == "event" && isActive == true] | order(_createdAt desc)[0] {
    _id,
    title,
    "imageUrl": image.asset->url,
    url,
    isActive
  }`;
  return await fetchData(query);
}
