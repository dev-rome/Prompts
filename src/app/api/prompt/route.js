import { connectToDB } from "../../../../utils/database";
import Prompt from "../../../../models/prompt";

export const GET = async (req) => {
  const url = new URL(req.url);
  const searchParams = url.searchParams;
  const search = searchParams.get("search") || "";
  const regex = new RegExp(search, "i");

  try {
    await connectToDB();

    const prompts = await Prompt.find({prompt: {$regex: regex}}).populate("creator");

    const headers = {
      "Content-Type": "application/json",
      "Cache-Control": "no-cache, no-store, must-revalidate",
      Expires: "0",
      Pragma: "no-cache",
    }

    return new Response(JSON.stringify(prompts), { status: 200, headers });
  } catch (error) {
    return new Response("Failed to fetch all prompts", { status: 500 });
  }
};
