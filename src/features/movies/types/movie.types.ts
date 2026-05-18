export default interface Movie {
  id: number;
  title: string;
  poster: string;
  genre?: string;
  status?: string;
  favorite?: boolean;
  hdAvailable?: boolean;
  trending?: boolean;
}
