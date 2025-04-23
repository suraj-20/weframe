import Header from "@/components/Header";
import NoDataFound from "@/components/NoDataFound";
import SubHeader from "@/components/SubHeader";
import React from "react";

const UserPage = () => {
  return (
    <>
      <Header heading="User" />
      <SubHeader />
      <NoDataFound content="No Users Found..." />
    </>
  );
};

export default UserPage;
