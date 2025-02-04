
type PortfolioItem = {
  id: number;
  type: "CODED" | "DESIGNED";
  imageUrl: string;
  title: string;
  description?: string;
}

export default PortfolioItem;