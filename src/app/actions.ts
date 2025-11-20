
'use server';

import { summarizeResidentData } from '@/ai/flows/summarize-resident-data';

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
