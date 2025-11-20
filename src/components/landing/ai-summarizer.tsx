'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Loader2, Sparkles, Languages } from 'lucide-react';
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
import { getSummaryAction, getTranslationAction } from '@/app/actions';
import { useToast } from '@/hooks/use-toast';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

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

const TranslationFormSchema = z.object({
  text: z.string().min(2, {
    message: 'Please provide some text to translate.',
  }),
});

export function AiSummarizer() {
  const [summary, setSummary] = useState('');
  const [translation, setTranslation] = useState('');
  const [isSummaryLoading, setIsSummaryLoading] = useState(false);
  const [isTranslationLoading, setIsTranslationLoading] = useState(false);
  const { toast } = useToast();

  const summaryForm = useForm<z.infer<typeof SummaryFormSchema>>({
    resolver: zodResolver(SummaryFormSchema),
    defaultValues: {
      residentData: '',
    },
  });

  const translationForm = useForm<z.infer<typeof TranslationFormSchema>>({
    resolver: zodResolver(TranslationFormSchema),
    defaultValues: {
      text: '',
    },
  });

  async function onSummarySubmit(data: z.infer<typeof SummaryFormSchema>) {
    setIsSummaryLoading(true);
    setSummary('');
    const result = await getSummaryAction(data.residentData);
    setIsSummaryLoading(false);

    if (result.error) {
      toast({
        title: 'Error',
        description: result.error,
        variant: 'destructive',
      });
    } else if (result.summary) {
      setSummary(result.summary);
      toast({
        title: 'Success',
        description: 'Summary generated successfully.',
      });
    }
  }

  async function onTranslationSubmit(data: z.infer<typeof TranslationFormSchema>) {
    setIsTranslationLoading(true);
    setTranslation('');
    const result = await getTranslationAction(data.text);
    setIsTranslationLoading(false);

    if (result.error) {
      toast({
        title: 'Error',
        description: result.error,
        variant: 'destructive',
      });
    } else if (result.translation) {
      setTranslation(result.translation);
      toast({
        title: 'Success',
        description: 'Text translated successfully.',
      });
    }
  }


  return (
    <section id="summarizer" className="py-20 md:py-28">
      <div className="container px-4">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl font-headline">
            Instant Resident Insights & Tools
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Use our AI-powered tools to instantly summarize lengthy resident notes or translate text.
          </p>
        </div>

        <div className="mt-16 mx-auto max-w-3xl">
          <Tabs defaultValue="summarizer" className="w-full">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="summarizer">Summarizer</TabsTrigger>
              <TabsTrigger value="translator">Translator</TabsTrigger>
            </TabsList>
            <TabsContent value="summarizer">
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
                              Paste Resident Data Here
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
                        Generate Summary
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
                        AI-Generated Summary
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-foreground/90">{summary}</p>
                    </CardContent>
                  </Card>
                </div>
              )}
            </TabsContent>
            <TabsContent value="translator">
               <Card>
                <CardContent className="pt-6">
                  <Form {...translationForm}>
                    <form onSubmit={translationForm.handleSubmit(onTranslationSubmit)} className="space-y-6">
                      <FormField
                        control={translationForm.control}
                        name="text"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="flex items-center">
                              <Languages className="w-4 h-4 mr-2" />
                              Text to Translate (English)
                            </FormLabel>
                            <FormControl>
                              <Textarea
                                placeholder="Enter English text to translate to Spanish..."
                                className="min-h-[250px] resize-y"
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <Button type="submit" disabled={isTranslationLoading} className="w-full">
                        {isTranslationLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                        Translate to Spanish
                      </Button>
                    </form>
                  </Form>
                </CardContent>
              </Card>

              {translation && (
                <div className="mt-8">
                  <Card className="bg-accent/50">
                    <CardHeader>
                      <CardTitle className="text-xl flex items-center font-headline">
                        <Languages className="w-5 h-5 mr-2 text-primary" />
                        Translation (Spanish)
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-foreground/90">{translation}</p>
                    </CardContent>
                  </Card>
                </div>
              )}
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </section>
  );
}
