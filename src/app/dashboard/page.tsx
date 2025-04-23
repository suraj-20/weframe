import Header from "@/components/Header";
import NoDataFound from "@/components/NoDataFound";
import SubHeader from "@/components/SubHeader";
import React from "react";

const DashboardPage = () => {
  return (
    <>
      <Header heading="Dashboard" />
      <SubHeader />
      <NoDataFound content="No Dashboard Data Found..." />
    </>
  );
};

export default DashboardPage;
