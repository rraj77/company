import axios from 'axios';
import { IDriveFiles } from '../interfaces/drive';

export async function getAllFile(parentId: number | string) {
  return axios.get(`http://localhost:4000/file?parentId=${parentId}`);
}

export async function addFile(updoadFileData: File, parentId: number | string) {
  const formData = new FormData();
  if (updoadFileData !== null) {
    formData.append('file', updoadFileData);
  }
  return axios.post(`http://localhost:4000/file`, formData, {
    headers: {
      parentId: parentId
    }
  });
}

export async function addFileFolder(fileFolder: IDriveFiles, parentId: number) {
  const folder = {
    name: fileFolder.name,
    path: fileFolder.path,
    parentId: parentId === 0 ? null : parentId,
    type: 'folder'
  };

  console.log(parentId);
  return axios.post(`http://localhost:4000/file/folder`, folder);
}

export async function deleteFile(id: number) {
  return axios.delete(`http://localhost:4000/file/${id}`);
}
