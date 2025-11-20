'use client';

import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis } from 'recharts';
import {
  Bell,
  CalendarDays,
  HeartPulse,
  MessageSquare,
} from 'lucide-react';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { useI18n } from '@/context/i18n-context';

export function Features() {
  const { t } = useI18n();

  const features = [
    {
      icon: <MessageSquare className="w-8 h-8 text-primary" />,
      title: t('features.communication.title'),
      description: t('features.communication.description'),
    },
    {
      icon: <HeartPulse className="w-8 h-8 text-primary" />,
      title: t('features.monitoring.title'),
      description: t('features.monitoring.description'),
      content: <ActivityChart />,
    },
    {
      icon: <Bell className="w-8 h-8 text-primary" />,
      title: t('features.notifications.title'),
      description: t('features.notifications.description'),
    },
    {
      icon: <CalendarDays className="w-8 h-8 text-primary" />,
      title: t('features.scheduling.title'),
      description: t('features.scheduling.description'),
    },
  ];


  return (
    <section id="features" className="py-20 md:py-28 bg-accent/30">
      <div className="container px-4">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl font-headline">
            {t('features.title')}
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            {t('features.description')}
          </p>
        </div>
        <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-2">
          {features.map((feature) => (
            <Card key={feature.title} className="flex flex-col">
              <CardHeader>
                <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-lg bg-accent">
                  {feature.icon}
                </div>
                <CardTitle className="font-headline">{feature.title}</CardTitle>
                <CardDescription>{feature.description}</CardDescription>
              </CardHeader>
              {feature.content && <CardContent className="flex-1 flex flex-col justify-end">{feature.content}</CardContent>}
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

function ActivityChart() {
  const data = [
    { day: 'Mon', activity: Math.floor(Math.random() * 100) + 50 },
    { day: 'Tue', activity: Math.floor(Math.random() * 100) + 50 },
    { day: 'Wed', activity: Math.floor(Math.random() * 100) + 50 },
    { day: 'Thu', activity: Math.floor(Math.random() * 100) + 50 },
    { day: 'Fri', activity: Math.floor(Math.random() * 100) + 50 },
    { day: 'Sat', activity: Math.floor(Math.random() * 100) + 50 },
    { day: 'Sun', activity: Math.floor(Math.random() * 100) + 50 },
  ];

  return (
    <div className="h-[150px] w-full pt-4">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data}>
          <XAxis
            dataKey="day"
            stroke="hsl(var(--muted-foreground))"
            fontSize={12}
            tickLine={false}
            axisLine={false}
          />
          <YAxis
            stroke="hsl(var(--muted-foreground))"
            fontSize={12}
            tickLine={false}
            axisLine={false}
            tickFormatter={(value) => `${value}`}
          />
          <Bar
            dataKey="activity"
            fill="hsl(var(--primary))"
            radius={[4, 4, 0, 0]}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
