export interface Article {
  title: string;
  description: string;
  source: string;
  url: string;
}

// Add more published articles here as you write them.
export const articles: Article[] = [
  {
    title: 'Unlocking the Power of Fabric Data Pipelines: A Guide for Power BI Users',
    description:
      'A practical guide to Microsoft Fabric Data Pipelines, helping Power BI users orchestrate and automate their data workflows.',
    source: 'Microsoft Fabric Community',
    url: 'https://community.fabric.microsoft.com/t5/Data-Factory-Community-Blog/Unlocking-the-Power-of-Fabric-Data-Pipelines-A-Guide-for-Power/ba-p/4309927',
  },
  {
    title: 'Make your life as Azure Solution Architect easier with Draw.io MCP Server and VS Code',
    description:
      'How the Draw.io MCP Server, together with VS Code, streamlines architecture diagramming for Azure Solution Architects.',
    source: 'LinkedIn',
    url: 'https://www.linkedin.com/pulse/make-your-life-azure-solution-architect-easier-drawio-pardali-lptef/',
  },
];
