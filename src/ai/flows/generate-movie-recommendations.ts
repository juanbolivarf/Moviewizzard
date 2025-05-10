'use server';

/**
 * @fileOverview Movie recommendation AI agent.
 *
 * - generateMovieRecommendations - A function that generates movie recommendations.
 * - GenerateMovieRecommendationsInput - The input type for the generateMovieRecommendations function.
 * - GenerateMovieRecommendationsOutput - The return type for the generateMovieRecommendations function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GenerateMovieRecommendationsInputSchema = z.object({
  viewingHistory: z
    .string()
    .describe('The user viewing history, including movie titles and ratings.'),
  genres: z.string().describe('The preferred genres of the user.'),
});
export type GenerateMovieRecommendationsInput = z.infer<
  typeof GenerateMovieRecommendationsInputSchema
>;

const GenerateMovieRecommendationsOutputSchema = z.object({
  recommendations: z
    .string()
    .describe('A list of recommended movie titles based on viewing history.'),
});
export type GenerateMovieRecommendationsOutput = z.infer<
  typeof GenerateMovieRecommendationsOutputSchema
>;

export async function generateMovieRecommendations(
  input: GenerateMovieRecommendationsInput
): Promise<GenerateMovieRecommendationsOutput> {
  return generateMovieRecommendationsFlow(input);
}

const prompt = ai.definePrompt({
  name: 'generateMovieRecommendationsPrompt',
  input: {schema: GenerateMovieRecommendationsInputSchema},
  output: {schema: GenerateMovieRecommendationsOutputSchema},
  prompt: `You are a movie expert who recommends movies to users based on their viewing history and preferred genres.

  Viewing History: {{{viewingHistory}}}
  Preferred Genres: {{{genres}}}

  Based on this information, recommend movies the user might enjoy.  Return a list of movie titles.`,
});

const generateMovieRecommendationsFlow = ai.defineFlow(
  {
    name: 'generateMovieRecommendationsFlow',
    inputSchema: GenerateMovieRecommendationsInputSchema,
    outputSchema: GenerateMovieRecommendationsOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
