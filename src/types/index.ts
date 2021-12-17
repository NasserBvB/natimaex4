export interface IProduct {
  id: number;
  title: string;
  price: string;
  description: string;
  image: string;
  rating: IRating;
  properties: IProperty[];
}

export interface IRating {
  count: number;
  rate: number;
}

export interface IProperty {
  label: string;
  content: string[];
}
