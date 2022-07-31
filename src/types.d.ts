declare interface Post {
  id: number;
  title: string;
  content: string;
  date?: string;
  writer?: string;
  enName?: string;
}

declare interface User {
  userId: string;
  pw: string;
  name: string;
  nickName?: string;
  enName?: string;
}
