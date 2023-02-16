export interface IProduct {
	id: number;
	name: string;
	category: string;
	subCategory: string;
	description: string;
	tax: number;
	discount: number;
}

export interface AddProductFormPro {
	onSubmitProductForm: (inputs: IProduct) => void;
	userProducts: IProduct;
	setuserProducts: React.Dispatch<React.SetStateAction<IProduct>>;
}
