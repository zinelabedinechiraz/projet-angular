// Modèle : décrit à quoi ressemble une conférence
export interface Conference {
  id: number;
  title: string;
  picture: string;
  date: Date;
  address: string;
  available: boolean;
  places: number;
}
