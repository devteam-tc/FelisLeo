export interface Movie {
    id: string;
    title: string;
    posterUrl: string;
    category: 'recommendations' | 'comedy' | 'family' | 'melodrama';
    description: string;
    releaseDate: string;
    director: string;
  }