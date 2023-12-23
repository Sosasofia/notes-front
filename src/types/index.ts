export type User = {
  username: string;
  token: string;
  name: string;
};

export type Credentials = {
  password: string;
  username: string;
};

export type Auth = {
  isLoggedIn: boolean;
  user: User | null;
  loading: boolean;
};

export type Notification = {
  message: string | null;
  show: boolean;
  type: string | null;
  timeout?: number;
};

export type Note = {
  content: string;
  createdAt?: string;
  title: string;
  id?: string;
};
