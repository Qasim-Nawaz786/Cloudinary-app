import { Button } from "@/components/ui/button";
import UploadButton from "./upload";
import cloudinary from "cloudinary";
import View from "./view";
import { Forserefresh } from "@/components/forse-refresh";

interface MyImage {
  public_id: string;
  tags: string[];
}

const Page = async () => {
  const res = (await cloudinary.v2.search
    .expression("resource_type:image ")
    .sort_by("created_at", "desc") // if we not refresh the page for a new image then change in api .sort "public_id to created_at"
    .max_results(25)
    .with_field("tags")
    .execute()) as { resources: MyImage[] };
  // console.log(res);

  return (
    <>
      <Forserefresh />
      <div className="flex justify-between items-center">
        <h2 className="mb-2 mt-4 px-4 text-4xl font-bold tracking-tight ">
          Gallery
        </h2>
        <UploadButton />
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
