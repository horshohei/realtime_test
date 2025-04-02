// src/app/agentConfigs/evaluation.ts
import { AgentConfig } from "@/app/types";

const evaluation: AgentConfig = {
    name: "evaluation",
    publicDescription: "会話内容を評価するエージェント",
    instructions: `
# 役割
- 会話ログを取得し、チャットボットの会話内容について、正確性・関連性・流暢さ・無害性について評価します。

# トリガー例
- 「この会話を評価して」
`,
    tools: [
        {
            type: "function",
            name: "evaluateConversation",
            description: "会話ログを評価します。",
            parameters: {
                type: "object",
                properties: {
                    conversationLog: {
                        type: "string",
                        description: "会話のログ。",
                    },
                },
                required: ["conversationLog"],
            },
        },
    ],
    toolLogic: {
        evaluateConversation: async ({ conversationLog }) => {
            const response = await fetch("/api/chat/evaluate", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ log: conversationLog }),
            });

            if (!response.ok) {
                return { error: "Something went wrong." };
            }

            const evaluationResult = await response.json();
            return { evaluation: evaluationResult };
        },
    },
};

export default evaluation;