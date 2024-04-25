// pages/api/open-ai.ts
import { NextApiRequest, NextApiResponse } from "next";
import OpenAI from "openai";

const openai = new OpenAI({
  organization: process.env["OPENAI_ORG_ID"],
  project: process.env["OPENAI_PROJECT_ID"],
});

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (!req) res.status(500).json({ error: "情報がありません" });
  if (req.method == "POST") {
    const res = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env["OPENAI_API_KEY"]}`,
      },
      body: JSON.stringify({
        body: req.body,
      }),
    });
  }
}
