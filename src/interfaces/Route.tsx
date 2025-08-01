export type Difficulty = 'Fácil' | 'Intermedio' | 'Avanzado';
export type Category = 'nacional' | 'internacional';

export interface Route {
  title: string;
  date: string;
  location: string;
  description: string;
  image: string;
  difficulty: Difficulty;
  price: string;
  duration: string;
  category: Category;
}