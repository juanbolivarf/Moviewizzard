// Summarize movie reviews flow.
'use server';

/**
 * @fileOverview Summarizes movie reviews using Genkit and Gemini.
 *
 * - summarizeMovieReviews - A function that generates a summary of movie reviews.
 * - SummarizeMovieReviewsInput - The input type for the summarizeMovieReviews function.
 * - SummarizeMovieReviewsOutput - The return type for the summarizeMovieReviews function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const SummarizeMovieReviewsInputSchema = z.object({
  movieTitle: z.string().describe('The title of the movie.'),
  reviews: z.array(z.string()).describe('An array of movie reviews.'),
});
export type SummarizeMovieReviewsInput = z.infer<
  typeof SummarizeMovieReviewsInputSchema
>;

const SummarizeMovieReviewsOutputSchema = z.object({
  summary: z.string().describe('A summary of the movie reviews.'),
});
export type SummarizeMovieReviewsOutput = z.infer<
  typeof SummarizeMovieReviewsOutputSchema
>;

export async function summarizeMovieReviews(
  input: SummarizeMovieReviewsInput
): Promise<SummarizeMovieReviewsOutput> {
  return summarizeMovieReviewsFlow(input);
}

const summarizeMovieReviewsPrompt = ai.definePrompt({
  name: 'summarizeMovieReviewsPrompt',
  input: {schema: SummarizeMovieReviewsInputSchema},
  output: {schema: SummarizeMovieReviewsOutputSchema},
  prompt: `Summarize the following movie reviews for the movie "{{movieTitle}}":\n\nReviews:\n{{#each reviews}}\n- {{{this}}}\n{{/each}}\n\nSummary: `,
});

const summarizeMovieReviewsFlow = ai.defineFlow(
  {
    name: 'summarizeMovieReviewsFlow',
    inputSchema: SummarizeMovieReviewsInputSchema,
    outputSchema: SummarizeMovieReviewsOutputSchema,
  },
  async input => {
    const {output} = await summarizeMovieReviewsPrompt(input);
    return output!;
  }
);
