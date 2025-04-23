import StoryCard from "../StoryCard";
import { Story } from "../StoryCard";

const stories: Story[] = [
  {
    id: 1,
    title: "How 7 lines code turned into $36 Billion Empire",
    category: "BUSINESS",
    date: "20 Sep 2022",
    status: "Published",
    image: "/images/story1.png",
    views: 428,
  },
  {
    id: 2,
    title: "Chez pierre restaurant in Monte Carlo by Vuidafieri",
    category: "BUSINESS",
    date: "20 Sep 2022",
    status: "Created",
    image: "/images/story2.png",
    views: 428,
  },
  {
    id: 3,
    title: "Teknion wins Gold at 2022 International Design Awards",
    category: "Politics",
    date: "20 Sep 2022",
    status: "Draft",
    image: "/images/story3.png",
    views: 428,
  },
  {
    id: 4,
    title: "How 7 lines code turned into $36 Billion Empire",
    category: "BUSINESS",
    date: "20 Sep 2022",
    status: "Published",
    image: "/images/story4.png",
    views: 428,
  },
  {
    id: 5,
    title: "How 7 lines code turned into $36 Billion Empire",
    category: "BUSINESS",
    date: "20 Sep 2022",
    status: "Published",
    image: "/images/story5.png",
    views: 428,
  },
  {
    id: 6,
    title: "Chez pierre restaurant in Monte Carlo by Vuidafieri",
    category: "BUSINESS",
    date: "20 Sep 2022",
    status: "Published",
    image: "/images/story6.png",
    views: 428,
  },
  {
    id: 7,
    title: "Teknion wins Gold at 2022 International Design Awards",
    category: "Politics",
    date: "20 Sep 2022",
    status: "Published",
    image: "/images/story7.png",
    views: 428,
  },
  {
    id: 8,
    title: "How 7 lines code turned into $36 Billion Empire",
    category: "BUSINESS",
    date: "20 Sep 2022",
    status: "Published",
    image: "/images/story5.png",
    views: 428,
  },
];

const StoryGrid = () => {
  return (
    <div
      className="px-6 py-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
      style={{
        margin: "20px",
        gap: "20px",
        gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))",
      }}
    >
      {stories.map((story) => (
        <StoryCard key={story.id} story={story} />
      ))}
    </div>
  );
};

export default StoryGrid;
