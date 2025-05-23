import StoryCard from "../StoryCard";
import { Story } from "../StoryCard";

const stories: Story[] = [
  {
    id: 1,
    title: "How 7 lines code turned into $36 Billion Empire",
    category: "BUSINESS",
    date: "20 Sep 2022",
    status: "Published",
    image: "/images/story1.avif",
    views: 428,
  },
  {
    id: 2,
    title: "Chez pierre restaurant in Monte Carlo by Vuidafieri",
    category: "BUSINESS",
    date: "20 Sep 2022",
    status: "Created",
    image: "/images/story2.avif",
    views: 428,
  },
  {
    id: 3,
    title: "Teknion wins Gold at 2022 International Design Awards",
    category: "Politics",
    date: "20 Sep 2022",
    status: "Draft",
    image: "/images/story3.avif",
    views: 428,
  },
  {
    id: 4,
    title: "How 7 lines code turned into $36 Billion Empire",
    category: "BUSINESS",
    date: "20 Sep 2022",
    status: "Published",
    image: "/images/story4.avif",
    views: 428,
  },
  {
    id: 5,
    title: "How 7 lines code turned into $36 Billion Empire",
    category: "BUSINESS",
    date: "20 Sep 2022",
    status: "Published",
    image: "/images/story5.avif",
    views: 428,
  },
  {
    id: 6,
    title: "Chez pierre restaurant in Monte Carlo by Vuidafieri",
    category: "BUSINESS",
    date: "20 Sep 2022",
    status: "Published",
    image: "/images/story6.avif",
    views: 428,
  },
  {
    id: 7,
    title: "Teknion wins Gold at 2022 International Design Awards",
    category: "Politics",
    date: "20 Sep 2022",
    status: "Published",
    image: "/images/story7.avif",
    views: 428,
  },
  {
    id: 8,
    title: "How 7 lines code turned into $36 Billion Empire",
    category: "BUSINESS",
    date: "20 Sep 2022",
    status: "Published",
    image: "/images/story5.avif",
    views: 428,
  },
];

const StoryGrid = () => {
  return (
    <div
      className="m-5 grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
      style={{
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
