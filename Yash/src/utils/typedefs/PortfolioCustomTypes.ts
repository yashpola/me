export interface PortfolioPost {
  Name: string;
  Title: string;
  Subtitle: string;
  Description: string[];
  References: string[][];
}

export interface PortfolioPostMapType {
  [key: string]: React.ComponentType<{ post: PortfolioPost }>;
}
