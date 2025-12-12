export interface Livre {
    ref: string;
    titre: string;
    categorie: string;
    auteur: string;
    imagesrc: string;
    description: string;
    descriptionLong: string;
    disponible: boolean;
    reservedBy?: string;
    borrowedBy?: string;
}