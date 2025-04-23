import Header from "@/components/Header";
import NoDataFound from "@/components/NoDataFound";
import SubHeader from "@/components/SubHeader";
import React from "react";

const AppWebPage = () => {
  return (
    <>
      <Header heading="App/Web" />
      <SubHeader />
      <NoDataFound content="No Data Found..." />
    </>
  );
};

export default AppWebPage;
