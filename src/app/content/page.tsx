import Header from "@/components/Header";
import StatusFilter from "@/components/StatusFilter";
import StoryGrid from "@/components/StoryGrid/StoryGrid";
import SubHeader from "@/components/SubHeader";
import React from "react";

const ContentPage = () => {
  return (
    <>
      <Header heading="Stories" />
      <SubHeader />
      <StatusFilter />
      <StoryGrid />
    </>
  );
};

export default ContentPage;
