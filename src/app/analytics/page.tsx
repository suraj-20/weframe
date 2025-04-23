import Header from "@/components/Header";
import NoDataFound from "@/components/NoDataFound";
import SubHeader from "@/components/SubHeader";
import React from "react";

const AnalyticsPage = () => {
  return (
    <>
      <Header heading="Analytics" />
      <SubHeader />
      <NoDataFound content="No Analytics Found..." />
    </>
  );
};

export default AnalyticsPage;
