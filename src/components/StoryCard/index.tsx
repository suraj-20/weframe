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
    <div className="rounded-xl overflow-hidden bg-white shadow-md flex flex-col">
      <div className="relative h-60 w-full overflow-hidden">
        <img
          src={story.image}
          alt={story.title}
          className="h-full w-full object-cover"
        />
        <div
          className="absolute top-2 right-2 bg-white px-2 py-1 text-xs flex items-center gap-1 shadow"
          style={{
            top: "5px",
            right: "5px",
            padding: "4px 8px",
            borderRadius: "6px",
            backgroundColor: "#fff",
            fontSize: "12px",
            gap: "2px",
          }}
        >
          <Eye size={14} />
          {story.views}
        </div>

        <div
          className="absolute p-4 flex-1 flex flex-col justify-between"
          style={{ padding: "10px", bottom: "0px", color: "#fff", gap: "10px" }}
        >
          <div>
            <h2
              className="text-sm font-semibold text-white leading-snug line-clamp-2"
              style={{ fontSize: "20px" }}
            >
              {story.title}
            </h2>
            <div
              className="text-xs text-white mt-2 flex items-center gap-2"
              style={{ fontSize: "14px", justifyContent: "space-between" }}
            >
              <span
                className="uppercase font-bold"
                style={{ fontWeight: "600" }}
              >
                {story.category}
              </span>

              <span
                className="flex items-center "
                style={{ fontWeight: "800", gap: "5px", color: "#A0A3BD" }}
              >
                <span style={{ fontSize: "25px" }}>•</span> {story.date}
              </span>
              <span
                className={`text-xs px-2 py-1 rounded-md font-medium ${
                  statusColors[story.status]
                }`}
                style={{
                  backgroundColor: statusColors[story.status].split(" ")[0],
                  color: statusTextColors[story.status].split(" ")[0],
                  padding: "8px 16px",
                  border: "none",
                  borderRadius: "8px",
                  fontSize: "14px",
                  fontWeight: "700",
                }}
              >
                {story.status}
              </span>
            </div>
          </div>

          <div className="mt-4 flex justify-between items-center">
            <div className="w-full flex gap-2" style={{ gap: "10px" }}>
              <button
                className="w-full text-black text-sm px-4 py-2 rounded-md hover:opacity-90 transition"
                style={{
                  backgroundColor: "#E8E9FF",
                  color: "#1C1442",
                  border: "none",
                  borderRadius: "8px",
                  fontSize: "12px",
                  fontWeight: "600",
                }}
              >
                View
              </button>
              <button
                className="w-8 h-8 rounded-md grid place-items-center hover:opacity-90 transition"
                style={{
                  backgroundColor: "#FAFAFA",
                  color: "#1C1442",
                  padding: "10px 20px",
                  border: "none",
                  borderRadius: "8px",
                  fontSize: "14px",
                }}
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
