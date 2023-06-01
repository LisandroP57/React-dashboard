import React from "react";
import { Routes, Route } from "react-router-dom";
import { Dashboard } from "../pages/Dashboard";
import { Auth } from "../pages/Auth";
import { NotFound } from "../pages/NotFound";
import { ProductList } from "../pages/ProductsList";
import { UserList } from "../pages/UsersList";
import Calendar from "../pages/Calendar";

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/products" element={<ProductList />} />
      <Route path="/users" element={<UserList />} />
      <Route path="/login" element={<Auth />} />
      <Route path="*" element={<NotFound />} />
      <Route path="/calendar" element={<Calendar />} />
    </Routes>
  );
};
