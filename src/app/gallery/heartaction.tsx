"use server";
import cloudinary from "cloudinary";
import { revalidatePath } from "next/cache";
export async function Addtag(public_Id: string, fav: boolean) {
  if (fav) {
    await cloudinary.v2.uploader.remove_tag("favourite", [public_Id]);
  } else {
    await cloudinary.v2.uploader.add_tag("favourite", [public_Id]);
  }
}
