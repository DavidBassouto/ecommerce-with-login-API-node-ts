interface IProductCreate {
  productName: string;
  price: number;
  description?: string;
}

interface IProductResponse extends IProductCreate {
  id: string;
  created_at: Date;
  update_at: Date;
}

interface IProductUpdate {
  productName?: string;
  price?: number;
  description?: string;
}

export { IProductCreate, IProductResponse, IProductUpdate };
