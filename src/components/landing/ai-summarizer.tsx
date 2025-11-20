'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Loader2, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { getSummaryAction } from '@/app/actions';
import { useToast } from '@/hooks/use-toast';
import { useI18n } from '@/context/i18n-context';

const SummaryFormSchema = z.object({
  residentData: z
    .string()
    .min(50, {
      message: 'Please provide at least 50 characters of resident data for an effective summary.',
    })
    .max(5000, {
      message: 'Input cannot exceed 5000 characters.',
    }),
});

const defaultResidentData = `Resident Name: Eleanor Vance
DOB: 1942-03-15
Medical History: Hypertension (managed with Lisinopril), Osteoarthritis in both knees, Mild hearing loss (uses hearing aids). Allergic to penicillin.
Recent Events: Had a fall last month, no major injuries but has been more cautious.
Needs: Assistance with showering, medication reminders, low-sodium diet.
Preferences: Enjoys reading mystery novels, watching classic movies, and light gardening. Prefers to wake up around 8 AM and sleep by 10 PM. Does not enjoy loud, crowded activities.`;


export function AiSummarizer() {
  const [summary, setSummary] = useState('');
  const [isSummaryLoading, setIsSummaryLoading] = useState(false);
  const { toast } = useToast();
  const { t } = useI18n();

  const summaryForm = useForm<z.infer<typeof SummaryFormSchema>>({
    resolver: zodResolver(SummaryFormSchema),
    defaultValues: {
      residentData: '',
    },
  });

  async function onSummarySubmit(data: z.infer<typeof SummaryFormSchema>) {
    setIsSummaryLoading(true);
    setSummary('');
    const result = await getSummaryAction(data.residentData);
    setIsSummaryLoading(false);

    if (result.error) {
      toast({
        title: t('aiSummarizer.errorTitle'),
        description: result.error,
        variant: 'destructive',
      });
    } else if (result.summary) {
      setSummary(result.summary);
      toast({
        title: t('aiSummarizer.successTitle'),
        description: t('aiSummarizer.summarySuccess'),
      });
    }
  }

  return (
    <section id="summarizer" className="py-20 md:py-28">
      <div className="container px-4">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl font-headline">
            {t('aiSummarizer.title')}
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            {t('aiSummarizer.description')}
          </p>
        </div>

        <div className="mt-16 mx-auto max-w-3xl">
          <Card>
            <CardContent className="pt-6">
              <Form {...summaryForm}>
                <form onSubmit={summaryForm.handleSubmit(onSummarySubmit)} className="space-y-6">
                  <FormField
                    control={summaryForm.control}
                    name="residentData"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="flex items-center">
                          <Sparkles className="w-4 h-4 mr-2" />
                          {t('aiSummarizer.formLabel')}
                        </FormLabel>
                        <FormControl>
                          <Textarea
                            placeholder={defaultResidentData}
                            className="min-h-[250px] resize-y"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <Button type="submit" disabled={isSummaryLoading} className="w-full">
                    {isSummaryLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                    {t('aiSummarizer.submitButton')}
                  </Button>
                </form>
              </Form>
            </CardContent>
          </Card>

          {summary && (
            <div className="mt-8">
              <Card className="bg-accent/50">
                <CardHeader>
                  <CardTitle className="text-xl flex items-center font-headline">
                    <Sparkles className="w-5 h-5 mr-2 text-primary" />
                    {t('aiSummarizer.summaryTitle')}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-foreground/90">{summary}</p>
                </CardContent>
              </Card>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
