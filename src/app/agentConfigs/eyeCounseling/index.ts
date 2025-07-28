import greetingAgent from "./greetingAgent";
import eyeRagAgent from "./eyeRagAgent";
import { injectTransferTools } from "../utils";

greetingAgent.downstreamAgents = [eyeRagAgent];

eyeRagAgent.downstreamAgents = [];

const agents = injectTransferTools([greetingAgent, eyeRagAgent]);

export default agents;
