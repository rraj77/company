export interface ICompanyType {
	id: number;
	name: string;
	email: string;
	phone: number;
	pan: string;
	gst: string;
	cin: string;
}

export interface IAddCompanyFormProp {
	ref: any;
	onSubmitCompanyForm: (dataCompany: ICompanyType) => void;
	editCompany: ICompanyType;
	setEditCompany: React.Dispatch<React.SetStateAction<ICompanyType>>;
}
