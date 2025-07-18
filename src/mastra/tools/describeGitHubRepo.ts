import { Tool } from "@mastra/core/tools";
import { z } from "zod";
import { gh } from "../../lib/githubUtils";

const inputSchema = z.object({
  owner: z.string().describe("The owner of the GitHub repository."),
  repo: z.string().describe("The name of the GitHub repository."),
});

export type DescribeGitHubRepositoryArgs = z.infer<typeof inputSchema>;

const outputSchema = z.union([
  z.object({
    name: z.string().describe("Name of the repository."),
    description: z.string().describe("Short description of the repository."),
    language: z.string().nullable().describe("Main language used in the repository."),
    stars: z.number().describe("Total number of stars."),
    forks: z.number().describe("Total number of forks."),
    topics: z.array(z.string()).describe("Repository topics/tags."),
  }),
  z.object({
    ok: z.literal(false),
    message: z.string().describe("Error message"),
  }),
]);

export type DescribeGitHubRepositoryResult = z.infer<typeof outputSchema>;

export const describeGitHubRepository = new Tool({
  id: "describeGitHubRepository",
  description: "Fetch and summarize metadata of a GitHub repository with a human-friendly description.",
  inputSchema,
  outputSchema,
  execute: async ({ context }) => {
    const { owner, repo } = context;

    try {
      const { data } = await gh.rest.repos.get({
        owner,
        repo,
      });

      return {
        name: data.name,
        description: data.description || "No description provided.",
        language: data.language,
        stars: data.stargazers_count,
        forks: data.forks_count,
        topics: data.topics || [],
      };
      
    } catch (error) {
      console.error("Failed to describe repo:", error);
      return {
        ok: false as const,
        message:
          error instanceof Error ? error.message : "Unknown error occurred.",
      };
    }
  },
});
