
import type { Movie } from '@/lib/types';

export const mockMovies: Movie[] = [
  {
    id: '1',
    title: 'Cosmic Odyssey',
    releaseDate: '2024-07-15',
    synopsis: 'A thrilling space adventure to the edge of the universe, where a group of explorers discovers a secret that could change humanity forever.',
    posterUrl: 'https://picsum.photos/400/600?random=1',
    backdropUrl: 'https://picsum.photos/1280/720?random=11',
    cast: [
      { name: 'Alice Eve', role: 'Captain Eva Rostova', imageUrl: 'https://picsum.photos/200/300?random=21' },
      { name: 'Chris Pine', role: 'Commander Jack Steele', imageUrl: 'https://picsum.photos/200/300?random=22' },
      { name: 'Zoe Saldana', role: 'Dr. Lena Hanson', imageUrl: 'https://picsum.photos/200/300?random=23' },
    ],
    genres: ['Sci-Fi', 'Adventure', 'Action'],
    director: 'Jane Doe',
    averageRating: 4.5,
    duration: "2h 30m",
    images: [
      'https://picsum.photos/600/400?random=31',
      'https://picsum.photos/600/400?random=32',
      'https://picsum.photos/600/400?random=33',
    ]
  },
  {
    id: '2',
    title: 'The Last Kingdom\'s Fall',
    releaseDate: '2024-06-20',
    synopsis: 'In a land ravaged by war, a lone warrior rises to protect the last standing kingdom from an ancient evil.',
    posterUrl: 'https://picsum.photos/400/600?random=2',
    backdropUrl: 'https://picsum.photos/1280/720?random=12',
    cast: [
      { name: 'Henry Cavill', role: 'Sir Gideon', imageUrl: 'https://picsum.photos/200/300?random=24' },
      { name: 'Anya Taylor-Joy', role: 'Princess Elara', imageUrl: 'https://picsum.photos/200/300?random=25' },
    ],
    genres: ['Fantasy', 'Action', 'Drama'],
    director: 'John Smith',
    averageRating: 4.2,
    duration: "2h 10m",
  },
  {
    id: '3',
    title: 'Echoes of Tomorrow',
    releaseDate: '2024-05-10',
    synopsis: 'A scientist invents a device that allows her to hear echoes from the future, leading her on a dangerous path to prevent a catastrophe.',
    posterUrl: 'https://picsum.photos/400/600?random=3',
    backdropUrl: 'https://picsum.photos/1280/720?random=13',
    cast: [
      { name: 'Emily Blunt', role: 'Dr. Aris Thorne' },
      { name: 'Tom Hardy', role: 'Agent Max Riley' },
    ],
    genres: ['Sci-Fi', 'Thriller'],
    director: 'Alex Chen',
    averageRating: 4.0,
    duration: "1h 55m",
  },
  {
    id: '4',
    title: 'Neon City Nights',
    releaseDate: '2024-08-01',
    synopsis: 'A detective navigates the dangerous, neon-lit streets of a futuristic city to solve a series of high-tech crimes.',
    posterUrl: 'https://picsum.photos/400/600?random=4',
    genres: ['Cyberpunk', 'Mystery', 'Thriller'],
    averageRating: 3.8,
    cast: [{ name: 'Keanu Reeves', role: 'Detective Kaito' }],
    director: 'Lana Wachowski',
    duration: "2h 05m",
  },
  {
    id: '5',
    title: 'Guardians of the Ancient Scroll',
    releaseDate: '2023-12-25',
    synopsis: 'A group of unlikely heroes must protect an ancient scroll from falling into the wrong hands.',
    posterUrl: 'https://picsum.photos/400/600?random=5',
    genres: ['Action', 'Adventure', 'Comedy'],
    averageRating: 4.1,
    cast: [{ name: 'Dwayne Johnson', role: 'The Protector' }, { name: 'Awkwafina', role: 'The Scribe' }],
    director: 'Peter Berg',
    duration: "1h 50m",
  },
];

export const getMovieById = (id: string): Movie | undefined => mockMovies.find(movie => movie.id === id);

export const getAllGenres = (): string[] => {
  const allGenres = new Set<string>();
  mockMovies.forEach(movie => movie.genres.forEach(genre => allGenres.add(genre)));
  return Array.from(allGenres).sort();
};
