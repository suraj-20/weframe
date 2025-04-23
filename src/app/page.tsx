import Header from "@/components/Header";
import StatusFilter from "@/components/StatusFilter";
import StoryGrid from "@/components/StoryGrid/StoryGrid";
import SubHeader from "@/components/SubHeader";

export default function Home() {
  return (
    <main className="bg-[#f9f9f9] min-h-screen">
      <Header heading="Home" />
      <SubHeader />
      <StatusFilter />
      <StoryGrid />
    </main>
  );
}
