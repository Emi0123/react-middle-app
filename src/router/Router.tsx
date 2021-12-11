import React, { memo, VFC } from "react";
import { Route, Routes } from "react-router-dom";

import { Login } from "../components/pages/Login";
import { UserManagement } from "../components/pages/UserManagement";
import { Home } from "../components/pages/Home";
import { Setting } from "../components/pages/Setting";
import { Page404 } from "../components/pages/Page404";
import { HeaderLayout } from "../components/templates/HeadeLayout";

export const Router: VFC = memo(() => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <HeaderLayout>
            <Login />
          </HeaderLayout>
        }
      />
      <Route
        path="/user_management"
        element={
          <HeaderLayout>
            <UserManagement />
          </HeaderLayout>
        }
      />
      <Route
        path="/setting"
        element={
          <HeaderLayout>
            <Setting />
          </HeaderLayout>
        }
      />
      <Route
        path="/home"
        element={
          <HeaderLayout>
            <Home />
          </HeaderLayout>
        }
      />
      <Route
        path="*"
        element={
          <HeaderLayout>
            <Page404 />
          </HeaderLayout>
        }
      />
    </Routes>
  );
});
