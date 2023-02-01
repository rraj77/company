import React from "react";
import { Routes, Route, NavLink } from "react-router-dom";
import MenuItem from "@mui/material/MenuItem";
import { Box } from "@mui/system";
import Users from "../main/Users";
import CompanyList from "../admin/CompanyList";
import Admin from "../admin/Admin";
import { NavLinks } from "../routes/Routers";
import Grid from "@mui/material/Unstable_Grid2";
import SignIn from "../auth/sign-in/SignIn";
import SignUp from "../auth/sign-up/SignUp";
import styles from "./../styles/styles.module.scss";
import Vat from "../admin/vat/Vat";
import CategorySubcategoryTable from "../category-subcategory/CategorySubcategoryTable";
import Tablemodel from "./Products/TableModel";

export default function NavBarList() {
  return (
    <Grid container className={styles.navbar}>
      <Grid lg={2} md={2} className={styles.navbar_item}>
        <Box>
          {NavLinks.map((links, index) => (
            <NavLink
              key={index}
              to={links.to}
              style={({ isActive }) => ({
                color: isActive ? "white" : "black",
                textDecorationLine: isActive ? "underline" : "none",
              })}
            >
              <MenuItem sx={{ whiteSpace: "pre-line" }}>{links.name}</MenuItem>
            </NavLink>
          ))}
        </Box>
      </Grid>
      <Grid lg={10} md={10} xs={12} className={styles.company}>
        <Routes>
          <Route path="/" element={<Admin />} />
          <Route path="/company-list" element={<CompanyList />} />
          <Route path="/users" element={<Users />} />
          <Route path="/table-model" element={<Tablemodel />} />
          <Route path="/vat" element={<Vat />} />
          <Route
            path="/category-subcategory"
            element={<CategorySubcategoryTable />}
          />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
      </Grid>
    </Grid>
  );
}
