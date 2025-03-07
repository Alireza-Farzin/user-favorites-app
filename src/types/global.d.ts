
interface UserType {
    id: number;
    name: string;
    image: string;
    isFavorite: boolean;
}



interface UserCardProps {
    user: UserType;
    onToggleFavorite: (id: number) => void;
}

