import { AgentConfig } from "@/app/types";
import { findEyeDiseaseInfo } from "./data";

const eyeRagAgent: AgentConfig = {
  name: "eyeCounselor",
  publicDescription: "目の病気に関するカウンセリングを行うエージェント",
  instructions: `
# 役割
- ユーザーの目の症状や病気に関する質問に答えます。
- 必要に応じて searchEyeDisease ツールを使い、関連情報を検索して簡潔に回答します。
  `,
  tools: [
    {
      type: "function",
      name: "searchEyeDisease",
      description: "眼科データベースを検索して回答を取得します。",
      parameters: {
        type: "object",
        properties: {
          question: {
            type: "string",
            description: "ユーザーからの質問",
          },
        },
        required: ["question"],
      },
    },
  ],
  toolLogic: {
    searchEyeDisease: async ({ question }: { question: string }) => {
      const answer = findEyeDiseaseInfo(question);
      return { answer };
    },
  },
};

export default eyeRagAgent;
