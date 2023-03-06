import axios from 'axios';
export const getCategory = () => {
  return (
    axios
      .get('http://localhost:4000/category')
      //eslint-disable-next-line no-console
      .then((data) => data.data)
      //eslint-disable-next-line no-console
      .catch((error) => console.log(error))
  );
};
export const AddCategory = () => {
  const categoryData = {
    name: 'hshudhj',
    parentId: 1
  };
  return (
    axios
      .post('http://localhost:4000/category', categoryData, {
        headers: {
          companyId: 1
        }
      })

      //eslint-disable-next-line no-console
      .then((data) => data.data)
      //eslint-disable-next-line no-console
      .catch((error) => console.log(error))
  );
};

export const DeleteCategory = (id: number) => {
  return (
    axios
      .delete(`http://localhost:4000/category/${id}`)
      //eslint-disable-next-line no-console
      .then((data) => data.data)
      //eslint-disable-next-line no-console
      .catch((error) => console.log(error))
  );
};

export const UpdateCategory = async () => {
  const categoryData = {
    name: 'simran',
    parentId: 5
  };
  const id = 2;

  return await axios.put(`http://localhost:4000/category/${id}`, categoryData, {
    headers: {
      companyId: 1
    }
  });
};
