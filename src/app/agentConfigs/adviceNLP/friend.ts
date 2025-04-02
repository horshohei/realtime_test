// src/app/agentConfigs/friend.ts
import { AgentConfig } from "@/app/types";

const friend: AgentConfig = {
    name: "friend",
    publicDescription: "NLPに関係のない質問に対してフレンドリーに雑談を行うエージェント",
    instructions: `
# 役割
- NLPに関係のない質問に対して、フレンドリーに雑談を行います。

# 会話例
- 最近どうですか？
- 今日はどんな日でしたか？
`,
    tools: [
        {
            type: "function",
            name: "smallTalk",
            description: "フレンドリーな雑談を行います。",
            parameters: {
                type: "object",
                properties: {
                    topic: {
                        type: "string",
                        description: "雑談のトピック。",
                    },
                },
                required: ["topic"],
            },
        },
    ],
    toolLogic: {
        smallTalk: async ({ topic }) => {
            // フレンドリーな雑談のロジックを実装
            return { response: `それは面白いですね！${topic}についてもっと教えてください。` };
        },
    },
};

export default friend;