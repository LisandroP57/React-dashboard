import React from "react";
import { Routes, Route } from "react-router-dom";
import { Dashboard } from "../pages/Dashboard";
import { NotFound } from "../pages/NotFound";
import { ProductList } from "../pages/ProductsList";
import Calendar from "../pages/Calendar";
import SignIn from "../pages/User/SignIn";
import SignUp from "../pages/User/SignUp";
import { ProtectedRoute } from "./ProtectedRoute";
import { UserList } from "../pages/UsersList";

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/signin" element={<SignIn />} />
      <Route path="/signup" element={<SignUp />} />

      <Route path="/" element={<ProtectedRoute />}>
        <Route path="/" element={<Dashboard />} />
        <Route path="/products" element={<ProductList />} />
        <Route path="/users" element={<UserList />} />
      </Route>

      <Route path="/calendar" element={<Calendar />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};
