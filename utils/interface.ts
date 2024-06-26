export interface Product {
  _id: string;
  title: string;
  priority: number;
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

export interface Banner {
  _id: string;
  title: string;
  imageUrl: string;
  url: string;
  isActive: boolean;
}

export interface Event {
  _id: string;
  title: string;
  imageUrl: string;
  url: string;
  isActive: boolean;
}
