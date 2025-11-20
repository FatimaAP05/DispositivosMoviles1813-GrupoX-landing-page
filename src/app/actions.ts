
'use server';

import { summarizeResidentData } from '@/ai/flows/summarize-resident-data';
import { translateText } from '@/ai/flows/translate-text';

export async function getSummaryAction(
  residentData: string
): Promise<{ summary?: string; error?: string }> {
  if (!residentData || residentData.trim().length < 50) {
    return { error: 'Please provide more detailed resident data (at least 50 characters).' };
  }

  try {
    const result = await summarizeResidentData({ residentData });
    return { summary: result.summary };
  } catch (e) {
    console.error(e);
    return { error: 'An unexpected error occurred while generating the summary. Please try again later.' };
  }
}

export async function getTranslationAction(
  text: string
): Promise<{ translation?: string; error?: string }> {
  if (!text || text.trim().length < 2) {
    return { error: 'Please provide some text to translate.' };
  }

  try {
    const result = await translateText({ text });
    return { translation: result.translation };
  } catch (e) {
    console.error(e);
    return { error: 'An unexpected error occurred while generating the translation. Please try again later.' };
  }
}
