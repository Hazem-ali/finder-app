import { ReduxProvider } from "@/redux/provider";
import React from "react";

const Layout = ({ children }) => {
  return <ReduxProvider>{children}</ReduxProvider>;
};

export default Layout;
