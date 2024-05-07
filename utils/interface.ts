export interface Product {
  _id: string;
  title: string;
  slug: { current: string };
  price: number;
  status: string;
  excerpt: string;
  detail: string;
  imageUrl: string;
  tag: Array<Tag>;
  vendor: Array<Vendor>;
}

export interface Tag {
  _id: string;
  name: string;
  slug: { current: string };
}

export interface Vendor {
  _id: string;
  name: string;
  slug: { current: string };
}
