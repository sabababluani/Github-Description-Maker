import { anthropic } from "@ai-sdk/anthropic";
import { Agent } from "@mastra/core/agent";
import { Memory } from "@mastra/memory";
import { LibSQLStore } from "@mastra/libsql";
import { instructions } from "./instructions";
import { describeGitHubRepository } from "../tools/describeGitHubRepo";

export const githubAgent = new Agent({
  name: "Github Agent",
  instructions,
  model: anthropic("claude-3-7-sonnet-latest"),
  memory: new Memory({
    storage: new LibSQLStore({
      url: "file:../mastra.db", // path is relative to the .mastra/output directory
    }),
  }),
  tools: {
    describeGitHubRepository
  },
  defaultGenerateOptions: {
    maxSteps: 15,
  },
  defaultStreamOptions: {
    maxSteps: 25,
  },
});
