'use server';
/**
 * @fileOverview A text translation AI agent.
 *
 * - translateText - A function that translates text to a target language.
 * - TranslateTextInput - The input type for the translateText function.
 * - TranslateTextOutput - The return type for the translateText function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const TranslateTextInputSchema = z.object({
  textToTranslate: z.string().describe('The text to be translated.'),
  targetLanguageCode: z
    .string()
    .describe(
      'The ISO 639-1 code of the language to translate the text into (e.g., "es" for Spanish, "fr" for French).'
    ),
  sourceLanguageCode: z
    .string()
    .optional()
    .describe(
      'The ISO 639-1 code of the language of the input text (e.g., "en" for English). If not provided, the model will attempt to auto-detect.'
    ),
});
export type TranslateTextInput = z.infer<typeof TranslateTextInputSchema>;

const TranslateTextOutputSchema = z.object({
  translatedText: z.string().describe('The translated text.'),
});
export type TranslateTextOutput = z.infer<typeof TranslateTextOutputSchema>;

export async function translateText(
  input: TranslateTextInput
): Promise<TranslateTextOutput> {
  return translateTextFlow(input);
}

const translateTextPrompt = ai.definePrompt({
  name: 'translateTextPrompt',
  input: {schema: TranslateTextInputSchema},
  output: {schema: TranslateTextOutputSchema},
  prompt: `Translate the following text into {{targetLanguageCode}} language.
{{#if sourceLanguageCode}}The source text is in {{sourceLanguageCode}} language.{{/if}}

Text to translate:
"{{{textToTranslate}}}"

Provide only the translated text. Ensure the output strictly adheres to the schema and contains only the translation.`,
});

const translateTextFlow = ai.defineFlow(
  {
    name: 'translateTextFlow',
    inputSchema: TranslateTextInputSchema,
    outputSchema: TranslateTextOutputSchema,
  },
  async input => {
    const {output} = await translateTextPrompt(input);
    if (!output) {
        throw new Error("Translation failed, no output from model.");
    }
    return output;
  }
);
