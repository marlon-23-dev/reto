export class User {
  login: string;
  id: number;
  name: string;
  bio: string | null;
  location: string | null;
  email: string | null;
  public_repos: number;
  followers: number;
  following: number;
}
