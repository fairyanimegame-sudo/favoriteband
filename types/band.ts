export interface Member{
    id: string;
    name: string;
    role: string;
    imageUrl?: string;
}

export interface Band{
    id: string;
    name: string;
    genre: string;
    formationYear: number;
    imageUrl: string;
    members: Member[];
}
