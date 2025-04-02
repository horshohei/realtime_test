// src/app/agentConfigs/index.ts
import greeting from "./greeting";
import teacher from "./teacher";
import friend from "./friend";
import evaluation from "./evaluation";
import { injectTransferTools } from "../utils";

greeting.downstreamAgents = [teacher, friend, evaluation];
teacher.downstreamAgents = [friend, evaluation];
friend.downstreamAgents = [teacher, evaluation];
evaluation.downstreamAgents = [greeting, teacher, friend];

const agents = injectTransferTools([
    greeting,
    teacher,
    friend,
    evaluation,
]);

export default agents;