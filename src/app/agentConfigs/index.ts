import { AllAgentConfigsType } from "@/app/types";
import frontDeskAuthentication from "./frontDeskAuthentication";
import customerServiceRetail from "./customerServiceRetail";
import simpleExample from "./simpleExample";
import adviceNLP from "./adviceNLP";
import eyeCounseling from "./eyeCounseling";

export const allAgentSets: AllAgentConfigsType = {
  frontDeskAuthentication,
  customerServiceRetail,
  simpleExample,
  adviceNLP,
  eyeCounseling,
};

export const defaultAgentSetKey = "adviceNLP"; // Default agent set key
