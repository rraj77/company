import React, { useState } from 'react';
import Grid from '@mui/material/Unstable_Grid2';
import { Box, Typography } from '@mui/material';
import styles from '../styles/styles.module.scss';
import { ICategory, TableDataProp } from '../interfaces/category';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import TreeView from '@mui/lab/TreeView';
import TreeItem, { TreeItemProps } from '@mui/lab/TreeItem';
import EditIcon from '@mui/icons-material/Edit';
import AddCategorySubCategory from './category-sub-category-form/AddCategorySubCategory';
import DeleteIcon from '@mui/icons-material/Delete';

export default function CategorySubcategoryTable() {
	const [tableData, setTableData] = useState<TableDataProp[]>([]);
	const [edit, setEdit] = useState<TableDataProp>({
		id: 0,
		category: '',
		subCategory: [{ id: 0, name: '', children: [] }]
	});

	const onAdd = (editData: TableDataProp) => {
		let subCategories: ICategory[] = [];
		let subSubCategory: ICategory[] = [];
		editData.subCategory.map((data, index) => {
			if (data.name !== '') {
				data.id = Math.random();
				subCategories.push(data);
				data.children.map((d, i) => {
					if (d.name !== '') {
						d.id = Math.random();
						subSubCategory.push(d);
					}
				});
				editData.subCategory[index].children = subSubCategory;
				subSubCategory = [];
			}
		});
		editData.subCategory = subCategories;
		setTableData([...tableData, editData]);
		subCategories = [];
	};
	const [editSubCategory, setEditSubCategory] = useState<boolean>(true);
	const onEditCategory = (e: React.MouseEvent, name: string, data: TableDataProp | ICategory) => {
		e.stopPropagation();
		setEditSubCategory(true);
		let copiedData = JSON.parse(JSON.stringify(data));
		if (name === 'subCategory') {
			const da = tableData.find((data) => {
				return data.subCategory.find((d) => d.id === copiedData.id);
			});
			let copied = JSON.parse(JSON.stringify(da));

			copied.subCategory = [copiedData];
			copiedData = copied;
		}
		if (copiedData.subCategory[0] === undefined) {
			copiedData.subCategory.push({
				name: '',
				id: '',
				children: []
			});
			setEdit(copiedData);
		} else {
			if (name === 'subCategory') {
				setEditSubCategory(false);
				copiedData.subCategory.map((data: ICategory, index: number) => {
					if (copiedData.subCategory[index].children[0] === undefined) {
						copiedData.subCategory[index].children.push({ name: '' });
					}
				});
			}
			setEdit(copiedData);
		}
	};

	type StyledTreeItemProps = TreeItemProps & {
		name: string;
		labelText: string;
		labelInfo: TableDataProp | ICategory;
	};

	const onDeleteCategory = (id: number | string) => {
		const tableCategory = tableData.filter((data) => data.id !== id);
		setTableData(tableCategory);
	};

	function StyledTreeItem(props: StyledTreeItemProps) {
		const { name, labelInfo, labelText, ...other } = props;
		return (
			<TreeItem
				label={
					<Box className={styles.display_flex}>
						<Typography className={styles.tree_item}>{labelText}</Typography>
						<Typography variant="caption" color="inherit">
							{name === 'category' ? (
								<DeleteIcon
									onClick={() => onDeleteCategory(labelInfo.id)}
									color="error"
									className={styles.padding_right}
								/>
							) : null}
							{name !== 'children' ? (
								<EditIcon color="primary" onClick={(e) => onEditCategory(e, name, labelInfo)} />
							) : null}
						</Typography>
					</Box>
				}
				{...other}
			/>
		);
	}

	return (
		<Grid container spacing={2}>
			<Grid lg={6} md={6} xs={12}>
				<Box className={styles.title}>
					<Typography variant="h5">Category and Sub Category</Typography>
				</Box>
				{tableData.map((category, index) => (
					<TreeView
						key={index}
						aria-label="file system navigator"
						defaultCollapseIcon={<ArrowDropDownIcon />}
						defaultExpandIcon={<ArrowRightIcon />}
						sx={{ paddingRight: '1rem' }}
					>
						<StyledTreeItem
							key={index}
							nodeId={category.category}
							name="category"
							labelInfo={category}
							labelText={category.category}
						>
							{category.subCategory.map((subcategory, idx) => (
								<StyledTreeItem
									key={idx}
									name="subCategory"
									nodeId={subcategory.name}
									labelText={subcategory.name}
									labelInfo={subcategory}
								>
									{subcategory.children.map((children, i) => (
										<StyledTreeItem
											key={i}
											name="children"
											nodeId={children.name}
											labelText={children.name}
											labelInfo={category}
										/>
									))}
								</StyledTreeItem>
							))}
						</StyledTreeItem>
					</TreeView>
				))}
			</Grid>
			<Grid lg={6} md={6} xs={12}>
				<AddCategorySubCategory
					tableData={tableData}
					setTableData={setTableData}
					edit={edit}
					setEdit={setEdit}
					onAdd={onAdd}
					setEditSubCategory={setEditSubCategory}
					editSubCategory={editSubCategory}
				/>
			</Grid>
		</Grid>
	);
}
