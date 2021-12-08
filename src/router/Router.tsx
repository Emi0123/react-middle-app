import React, { memo, VFC } from "react";
import { Route, Routes } from "react-router-dom";

import { Login } from "../components/pages/Login";
import { UserManagement } from "../components/pages/UserManagement";
import { Home } from "../components/pages/Home";
import { Setting } from "../components/pages/Setting";
import { Page404 } from "../components/pages/Page404";

export const Router: VFC = memo(() => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/user_management" element={<UserManagement />} />
      <Route path="/setting" element={<Setting />} />
      <Route path="/home" element={<Home />} />
      <Route path="/*" element={<Page404 />} />
    </Routes>
  );
});
