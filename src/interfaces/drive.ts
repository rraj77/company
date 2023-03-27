export interface DisplayCardProps {
  title: string;
  image: string;
}
export interface DriveCardProps {
  cardDetails: IDriveFiles;
  onDeleteFile: (id: number) => void;
  onOpenFileFolder: (file: IDriveFiles) => void;
}
export interface IDriveFiles {
  id: number;
  name: string;
  path: string;
}
export interface IUploadFile {
  files: IDriveFiles[];
  setFiles: React.Dispatch<React.SetStateAction<IDriveFiles[]>>;
  uploadFile: boolean;
  setUploadFile: React.Dispatch<React.SetStateAction<boolean>>;
  breadPath: IBreadPath[];
}
export interface IDisplayCard {
  files: IDriveFiles[];
  setFiles: React.Dispatch<React.SetStateAction<IDriveFiles[]>>;
  uploadFile: boolean;
  setUploadFile: React.Dispatch<React.SetStateAction<boolean>>;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  open: boolean;
}
export interface IBreadPath {
  id: number;
  name: string;
}

export interface IDriveBreadCrumb {
  breadPath: IBreadPath[];
  handleClick(id: number): void;
}
export interface IDriveCreateFolder {
  files: IDriveFiles[];
  setFiles: React.Dispatch<React.SetStateAction<IDriveFiles[]>>;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  open: boolean;
  breadPath: IBreadPath[];
}
