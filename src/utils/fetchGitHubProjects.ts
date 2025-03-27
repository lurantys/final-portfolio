
import axios from "axios";

interface GitHubProject {
  name: string;
  description: string;
  html_url: string;
  topics: string[];
  stargazers_count: number;
  forks_count: number;
  language: string;
}

export const fetchGitHubProjects = async () => {
  try {
    // GitHub API endpoint for user repositories
    const response = await axios.get(
      "https://api.github.com/users/lurantys/repos?sort=updated&per_page=10"
    );
    
    // Filter for AI/ML projects first, then take top 3
    const projects = response.data
      .filter((repo: GitHubProject) => {
        const aiMlKeywords = [
          "ai",
          "ml",
          "machine-learning",
          "deep-learning",
          "neural",
          "tensorflow",
          "pytorch",
          "nlp",
          "data-science",
        ];
        
        const hasAiMlTopic = repo.topics?.some((topic: string) =>
          aiMlKeywords.includes(topic.toLowerCase())
        );
        
        const hasAiMlName = aiMlKeywords.some((keyword) =>
          repo.name.toLowerCase().includes(keyword)
        );
        
        const hasAiMlDescription = repo.description
          ? aiMlKeywords.some((keyword) =>
              repo.description.toLowerCase().includes(keyword)
            )
          : false;
        
        return hasAiMlTopic || hasAiMlName || hasAiMlDescription;
      });
    
    // If we don't have enough AI/ML projects, add other projects
    if (projects.length < 3) {
      const remainingProjects = response.data
        .filter(
          (repo: GitHubProject) =>
            !projects.some((p: GitHubProject) => p.name === repo.name)
        )
        .slice(0, 3 - projects.length);
      
      projects.push(...remainingProjects);
    }
    
    return projects.slice(0, 3);
  } catch (error) {
    console.error("Error fetching GitHub projects:", error);
    return [];
  }
};
