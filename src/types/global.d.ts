export type UserType = {
    id: number;
    name: string;
    image: string;
    isFavorite: boolean;
  };
  
  export type UserCardProps = {
    user: UserType;
    onToggleFavorite: (id: number) => void;
  };
  
  export type UserDirectoryProps = {
    searchQuery: string;
  };
  