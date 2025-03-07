export type UserType = {
  id:  string;
  name: string;
  image: string;
  isFavorite: boolean;
};

export type UserCardProps = {
  user: UserType;
  onToggleFavorite: (id: string) => void;
};

export type UserDirectoryProps = {
  searchQuery: string;
};
