import React, { useState } from 'react';
import { TextField, Button, Typography } from '@mui/material';
import { Box } from '@mui/system';
import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/Add';
import styles from '../../styles/styles.module.scss';
import { ICategory, CategoryProp } from '../../interfaces/category';

export default function AddCategorySubCategory({
  tableData,
  setTableData,
  edit,
  setEdit,
  onAdd,
  setEditSubCategory,
  editSubCategory
}: CategoryProp) {
  const [state, setstate] = useState<boolean>(true);
  const onCategoryValueChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEdit({ ...edit, [e.target.name]: e.target.value });
    if (tableData[0] !== undefined) {
      const d = tableData.find((data) => data.category === e.target.value);
      if (d === undefined) {
        setstate(true);
      } else {
        setstate(false);
      }
    } else {
      setstate(true);
    }
  };

  const addFormFields = (name: string, index: number) => {
    if (name === 'subCategory') {
      edit.subCategory.push({
        id: 0,
        name: '',
        children: []
      });
    } else {
      edit.subCategory[index].children.push({
        id: 0,
        name: '',
        children: []
      });
    }
    setEdit({ ...edit });
  };

  const onHandleValueChange = (
    index: number,
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    i: number | null
  ) => {
    if (e.target.name === 'subCategory') {
      edit.subCategory[index] = {
        id: 0,
        name: e.target.value,
        children: [...edit.subCategory[index].children]
      };
      setEdit({ ...edit });
    } else {
      if (i !== null) {
        edit.subCategory[index].children[i].name = e.target.value;

        setEdit({ ...edit });
      }
    }
  };

  const removeFormFields = (name: string, index: number, i: number) => {
    if (name === 'subCategory') {
      edit.subCategory.splice(index, 1);
    } else {
      edit.subCategory[index].children.splice(i, 1);
    }
    setEdit({ ...edit });
  };

  const onCancelForm = () => {
    setEdit({
      id: 0,
      category: '',
      subCategory: [{ id: 0, name: '', children: [] }]
    });
    setEditSubCategory(true);
  };

  const onFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const list = [...tableData];
    const d = list.find((data) => data.id === edit.id);
    const index = list.findIndex((data) => data.id === edit.id);
    if (d === undefined) {
      edit.id = Math.random();
      onAdd(edit);
    } else {
      const subCategories: ICategory[] = [];
      let subSubCategory: ICategory[] = [];
      edit.subCategory.map((data, index) => {
        if (data.name !== '') {
          subCategories.push(data);
          data.children.map((d) => {
            if (d.name !== '') {
              subSubCategory.push(d);
            }
          });
          edit.subCategory[index].children = subSubCategory;
          subSubCategory = [];
        }
      });
      if (editSubCategory === false) {
        list[index].subCategory.map((data, idx) => {
          edit.subCategory.map((d) => {
            if (d.id === data.id && d.name !== '') {
              list[index].subCategory[idx] = d;
            } else {
              if (d.id) {
                d.id = Math.random();
                list[index].subCategory.push(d);
              }
            }
          });
        });
        setTableData(list);
      } else {
        edit.subCategory = subCategories;
        edit.subCategory.map((data) => {
          if (data.id) {
            data.id = Math.random();
          }
        });
        list[index] = edit;
        setTableData(list);
      }
    }
    setEdit({
      id: 0,
      category: '',
      subCategory: [{ id: 0, name: '', children: [] }]
    });
    setEditSubCategory(true);
  };

  return (
    <Box>
      <Box component="form" onSubmit={onFormSubmit}>
        {editSubCategory ? (
          <>
            <Box className={styles.title}>
              <Typography variant="h5">
                {edit.id ? 'Edit ' + edit.category : 'Add category'}
              </Typography>
            </Box>
            <Box className={styles.input_field}>
              <TextField
                size="small"
                label="Enter category"
                name="category"
                value={edit.category}
                onChange={onCategoryValueChange}
                fullWidth
              />
              {state ? null : <div className={styles.form_error}>enter new category</div>}
            </Box>
          </>
        ) : null}
        {edit.subCategory.map((data, index) => (
          <Box key={index}>
            <Box className={styles.title}>
              <Typography>Add sub category</Typography>
            </Box>
            <Box key={index} className={styles.input_field + ' ' + styles.display_flex}>
              <Box className={styles.width_100}>
                <TextField
                  type="text"
                  name="subCategory"
                  label="Enter sub category"
                  size="small"
                  fullWidth
                  value={data.name}
                  onChange={(e) => onHandleValueChange(index, e, null)}
                  className={styles.padding_right}
                />
              </Box>
              <Box className={styles.margin_left + ' ' + styles.display_flex}>
                <Button
                  type="button"
                  className={styles.padding_right}
                  onClick={() => removeFormFields('subCategory', index, index)}
                  color="error"
                >
                  <DeleteIcon />
                </Button>
                <Button
                  onClick={() => addFormFields('subCategory', index)}
                  type="button"
                  color="primary"
                >
                  <AddIcon />
                </Button>
              </Box>
            </Box>
            {edit.subCategory[index]?.children?.map((d, i) => (
              <Box key={i} className={styles.display_flex + ' ' + styles.input_field}>
                <Box>
                  <TextField
                    type="text"
                    name="sCategory"
                    label="Enter sub category"
                    size="small"
                    value={d.name}
                    onChange={(e) => onHandleValueChange(index, e, i)}
                  />
                </Box>
                <Box className={styles.display_flex}>
                  <Button
                    type="button"
                    className={styles.padding_right}
                    color="error"
                    onClick={() => removeFormFields('sCategory', index, i)}
                  >
                    <DeleteIcon />
                  </Button>
                  <Button
                    type="button"
                    onClick={() => addFormFields('sCategory', index)}
                    color="primary"
                  >
                    <AddIcon />
                  </Button>
                </Box>
              </Box>
            ))}
          </Box>
        ))}
        {state ? (
          edit.category ? (
            <Box className={styles.display_flex}>
              <Button type="button" color="warning" onClick={onCancelForm} fullWidth>
                cancel
              </Button>
              <Button type="submit" variant="contained" fullWidth>
                Submit
              </Button>
            </Box>
          ) : (
            <Box className={styles.display_flex}>
              <Button disabled type="submit" variant="contained" fullWidth>
                Submit
              </Button>
            </Box>
          )
        ) : (
          <Box className={styles.display_flex}>
            <Button type="button" color="warning" onClick={onCancelForm} fullWidth>
              cancel
            </Button>
            <Button disabled type="submit" variant="contained" fullWidth>
              Submit
            </Button>
          </Box>
        )}
      </Box>
    </Box>
  );
}
