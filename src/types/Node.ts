export interface Block {
  id: string;
  description: string;
}

export interface Node {
  online: boolean;
  name: string;
  url: string;
  loading: boolean;
  blocks: Block[];
}
