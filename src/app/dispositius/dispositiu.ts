export interface Dispositiu {
    id: number;
    nom: string;
    funciona: boolean;
    consum: number[];
    tipo: number; 
    temperatura?: number;
    modo?: string;
    temps?: number;
    moviment?: boolean;
    zona?: string;
    falta?: string;
    ratting?: number;
}
