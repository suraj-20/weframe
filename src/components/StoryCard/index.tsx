import { Eye } from "lucide-react";

type Status = "Published" | "Created" | "Draft";

export type Story = {
  id: number;
  title: string;
  category: string;
  date: string;
  status: Status;
  image: string;
  views: number;
};

const statusColors = {
  Published: "#E4FFF8",
  Created: "#DAF1FB",
  Draft: "#F4F4F4",
};

const statusTextColors = {
  Published: "#0DAD82",
  Created: "#58A4FF",
  Draft: "#A0A3BD",
};

const StoryCard = ({ story }: { story: Story }) => {
  return (
    <div className="flex flex-col overflow-hidden rounded-xl bg-white shadow-md">
      <div className="relative w-full overflow-hidden">
        <img
          src={story.image}
          alt={story.title}
          className="h-full w-full object-cover"
        />
        <div className="absolute right-2 top-2 flex items-center gap-1 rounded-md bg-white px-2 py-1 text-xs shadow">
          <Eye size={14} />
          {story.views}
        </div>

        <div className="absolute bottom-0 flex flex-1 flex-col justify-between gap-2 p-4">
          <div>
            <h2 className="line-clamp-2 text-lg font-semibold leading-snug text-white">
              {story.title}
            </h2>
            <div className="mt-2 flex items-center justify-between gap-2 text-xs text-white">
              <span className="font-bold uppercase">{story.category}</span>

              <span className="flex items-center gap-1 font-semibold text-gray-400">
                <span className="text-3xl">•</span> {story.date}
              </span>
              <span
                className={`rounded-md px-3 py-2 text-sm font-medium font-semibold`}
                style={{
                  backgroundColor: statusColors[story.status].split(" ")[0],
                  color: statusTextColors[story.status].split(" ")[0],
                }}
              >
                {story.status}
              </span>
            </div>
          </div>

          <div className="mt-4 flex items-center justify-between">
            <div className="flex w-full gap-2">
              <button className="w-full rounded-md bg-[#E8E9FF] px-4 py-2 text-sm font-semibold text-black transition hover:opacity-90">
                View
              </button>
              <button
                className="grid h-9 w-10 place-items-center rounded-md bg-[#FAFAFA] transition hover:opacity-90"
              >
                <span className="text-xl">⋯</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StoryCard;
