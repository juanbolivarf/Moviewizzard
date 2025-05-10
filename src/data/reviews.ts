
import type { Review } from '@/lib/types';

export const mockReviews: Review[] = [
  {
    id: 'r1',
    movieId: '1',
    userName: 'MovieBuff23',
    userAvatar: 'https://picsum.photos/100/100?random=51',
    rating: 5,
    comment: 'Absolutely stunning visuals and a captivating story! A must-watch for sci-fi fans.',
    createdAt: '2024-07-16T10:00:00Z',
  },
  {
    id: 'r2',
    movieId: '1',
    userName: 'SpaceExplorer',
    userAvatar: 'https://picsum.photos/100/100?random=52',
    rating: 4,
    comment: 'Great movie, though the pacing felt a bit slow in the middle. The ending was epic!',
    createdAt: '2024-07-17T14:30:00Z',
  },
  {
    id: 'r3',
    movieId: '2',
    userName: 'FantasyFanatic',
    userAvatar: 'https://picsum.photos/100/100?random=53',
    rating: 4,
    comment: 'Loved the world-building and the action sequences. Henry Cavill was brilliant!',
    createdAt: '2024-06-22T09:15:00Z',
  },
  {
    id: 'r4',
    movieId: '3',
    userName: 'SciFiSleuth',
    userAvatar: 'https://picsum.photos/100/100?random=54',
    rating: 3,
    comment: 'Interesting concept, but the plot had a few holes. Still an enjoyable thriller.',
    createdAt: '2024-05-12T11:00:00Z',
  },
  {
    id: 'r5',
    movieId: '1',
    userName: 'CinemaGoer',
    rating: 5,
    comment: 'One of the best movies of the year! The special effects were mind-blowing.',
    createdAt: '2024-07-18T18:45:00Z',
  },
];

export const getReviewsByMovieId = (movieId: string): Review[] => 
  mockReviews.filter(review => review.movieId === movieId).sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());

// This would be a server action in a real app
export const addReview = (review: Omit<Review, 'id' | 'createdAt' | 'userAvatar'>): Review => {
  const newReview: Review = {
    ...review,
    id: `r${mockReviews.length + 1}`,
    createdAt: new Date().toISOString(),
    userAvatar: `https://picsum.photos/100/100?random=${55 + mockReviews.length}`,
  };
  mockReviews.unshift(newReview); // Add to the beginning to show newest first
  return newReview;
};
