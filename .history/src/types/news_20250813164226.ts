export interface IReactions {
  likes: number;
  dislikes: number;
}

export interface INews {
  id: number;
  title: string;
  body: string;
  userId: number;
  tags: string[];
  reactions: IReactions; 
}