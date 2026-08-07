export type DifficultyLevel = 'Novato' | 'Junior' | 'Intermedio' | 'Avanzado' | 'Gurú';

export interface Project {
  id: string;
  name: string;
  description: string;
  difficulty: DifficultyLevel;
  technologies: string[];
  liveDemoUrl: string;
  viewCodeUrl: string;
  imageUrl: string;
  instructions?: string[];
}
