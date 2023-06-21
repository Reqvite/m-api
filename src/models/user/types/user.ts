export interface IUser {
  username: string;
  email: string;
  password: string;
  avatar?: string;
  token: string | null;
  watchingList?: [];
  willWatch?: [];
  stoppedWatching?: [];
  watched?: [];
}
