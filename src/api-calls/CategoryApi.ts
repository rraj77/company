import axios from 'axios';
export const getCategory = async () => {
  try {
    const url = process.env.REACT_APP_API_URL;
    const path = process.env.REACT_APP_CATEGORY_API_BASE_PATH;
    const data = await axios.get(`${url}${path}`);
    return data.data;
  } catch (error) {
    return error;
  }
};

export const AddCategory = async () => {
  const categoryData = {
    name: 'hshudhj',
    parentId: 1
  };
  try {
    const url = process.env.REACT_APP_API_URL;
    const path = process.env.REACT_APP_CATEGORY_API_BASE_PATH;
    const data = await axios.post(`${url}${path}`, categoryData, {
      headers: {
        companyId: 1
      }
    });
    return data.data;
  } catch (error) {
    return error;
  }
};

export const DeleteCategory = async (id: number) => {
  try {
    const url = process.env.REACT_APP_API_URL;
    const path = process.env.REACT_APP_CATEGORY_API_BASE_PATH;
    const data = await axios.delete(`${url}${path}/${id}`);
    return data.data;
  } catch (error) {
    return error;
  }
};

export const UpdateCategory = async () => {
  const categoryData = {
    name: 'simran',
    parentId: 5
  };
  const id = 2;

  return await axios.put(
    `${process.env.REACT_APP_API_URL}${process.env.REACT_APP_CATEGORY_API_BASE_PATH}/${id}`,
    categoryData,
    {
      headers: {
        companyId: 1
      }
    }
  );
};
