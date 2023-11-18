import { Button } from "@/components/ui/button";
import cloudinary from "cloudinary";
import View from "../gallery/view";
import { Forserefresh } from "@/components/forse-refresh";

interface MyImage {
  public_id: string;
  tags: string[];
}

const Page = async () => {
  const res = (await cloudinary.v2.search
    .expression("resource_type:image AND tags=favourite ")
    .sort_by("public_id", "desc")
    .max_results(25)
    .with_field("tags")
    .execute()) as { resources: MyImage[] };
  // console.log(res);

  return (
    <>
      <Forserefresh />
      <div className="flex justify-between  items-center">
        <h2 className="mb-2 mt-4 px-4 text-4xl font-bold tracking-tight ">
          Favourite Images
        </h2>
      </div>
      <div className="columns-4 gap-3 space-y-4 mx-auto p-4 ">
        {res.resources.map((item, i) => {
          return (
            <div key={i}>
              <View src={item.public_id} tags={item.tags} />
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Page;
