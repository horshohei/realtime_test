// src/app/agentConfigs/teacher.ts
import { AgentConfig } from "@/app/types";

const teacher: AgentConfig = {
    name: "teacher",
    publicDescription: "NLPに関するテキスト質問に答えるエージェント",
    instructions: `
# 役割
- OpenAI APIを通じて、NLPに関するテキスト質問を受けて、OpenAI APIからの回答を取得します。

# 質問例
- 自然言語処理とは何ですか？
- Transformerモデルとは何ですか？
`,
    tools: [
        {
            type: "function",
            name: "askNLPQuestion",
            description: "NLPに関する質問をOpenAI APIに問い合わせて答えを取得します。",
            parameters: {
                type: "object",
                properties: {
                    question: {
                        type: "string",
                        description: "ユーザーの質問。",
                    },
                },
                required: ["question"],
            },
        },
    ],
    toolLogic: {
        askNLPQuestion: async ({ question }) => {
            const response = await fetch("/api/chat/completions", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ model: "o1-mini", messages: [{ role: "user", content: question }] }),
            });

            if (!response.ok) {
                return { error: "Something went wrong." };
            }

            const completion = await response.json();
            return { answer: completion.choices[0].message.content };
        },
    },
};

export default teacher;