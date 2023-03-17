import React, { ReactNode, FC } from "react";

interface Props {
  children?: ReactNode;
}

const Layout: FC<Props> = ({ children }) => {
  return (
    <div
      style={{
        width: "100%",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        placeItems: "center",
      }}
    >
      {children}
    </div>
  );
};

export default Layout;
