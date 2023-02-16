export interface ICustomer {
	id: number;
	avatar: string;
	first_name: string;
	last_name: string;
	email: string;
	phone_no: number;
	gst: string;
}

export interface AddCustomerFormPro {
	onSubmitCustomerForm: (inputs: ICustomer, file: string) => void;
	userCustomer: ICustomer;
	setuserCustomer: React.Dispatch<React.SetStateAction<ICustomer>>;
	file: string;
	setFile: (setFile: string) => void;
}
