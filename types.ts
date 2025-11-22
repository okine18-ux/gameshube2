export interface Game {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  coverUrl: string;
  rating: string;
  downloads?: string;
  link: string;
  isTrending?: boolean;
}