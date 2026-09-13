
"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, type Variants } from "motion/react";
import { ArrowUpRight, Sparkles } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import StepsforCourse from "@/components/shadcn-space/badge/badge-08 copy";
import { AnimatedBadge } from "@/components/shadcn-space/badge/badge-08";

type LearningStep = {
  number: string;
  image: string;
  title: string;
  description: string;
  button: string;
  href: string;
};

const learningSteps: LearningStep[] = [
  {
    number: "০১",
    image:
      "https://res.cloudinary.com/doqcv0ywi/image/upload/v1789278926/Gemini_Generated_Image_5brpm55brpm55brp_lnk2qv.jpg",
    title: "কোর্স নির্বাচন করুন",
    description:
      "আপনার লক্ষ্য ও প্রয়োজন অনুযায়ী পছন্দের কোর্সটি বেছে নিন।",
    button: "কোর্স দেখুন",
    href: "/courses",
  },
  {
    number: "০২",
    image:
      "https://res.cloudinary.com/doqcv0ywi/image/upload/v1789307995/Gemini_Generated_Image_yo0vhryo0vhryo0v_fhlev1.jpg",
    title: "ক্লাস করুন",
    description:
      "সহজ ও কার্যকর পাঠদানের মাধ্যমে প্রতিটি বিষয় বুঝে শিখুন।",
    button: "ক্লাস শুরু করুন",
    href: "/courses",
  },
  {
    number: "০৩",
    image:
      "https://res.cloudinary.com/doqcv0ywi/image/upload/v1789279116/Gemini_Generated_Image_72e96e72e96e72e9_lhweil.jpg",
    title: "অনুশীলন করুন",
    description:
      "নিয়মিত অনুশীলনের মাধ্যমে শেখা বিষয়গুলো আরও শক্তিশালী করুন।",
    button: "অনুশীলন করুন",
    href: "/practice",
  },
  {
    number: "০৪",
    image:
      "https://res.cloudinary.com/doqcv0ywi/image/upload/v1789279276/Gemini_Generated_Image_ilbmxlilbmxlilbm_urlxhv.jpg",
    title: "পরিক্ষা দিন",
    description:
      "নিয়মিত শেখা ও অনুশীলনের মাধ্যমে আত্মবিশ্বাসের সঙ্গে লক্ষ্যে পৌঁছান।",
    button: "এগিয়ে যান",
    href: "/courses",
  },
];

const cardVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 35,
  },
  visible: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: index * 0.1,
      duration: 0.55,
      ease: "easeOut",
    },
  }),
};

const Services = () => {
  return (
    <section className="relative overflow-hidden bg-background py-16 sm:py-20 lg:py-24">
      {/* Background decoration */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute left-1/2 top-0 h-72 w-72 -translate-x-1/2 rounded-full bg-primary/5 blur-3xl" />
        <div className="absolute -left-32 bottom-0 h-72 w-72 rounded-full bg-secondary/10 blur-3xl" />
        <div className="absolute -right-32 top-1/3 h-72 w-72 rounded-full bg-primary/5 blur-3xl" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 xl:px-12">
        <div className="flex flex-col items-center gap-10 sm:gap-14">
          {/* Heading */}
          <div className="flex max-w-3xl flex-col items-center text-center">
<AnimatedBadge label="সহজ শেখার পদ্ধতি" />

            <h2 className="mt-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
              শেখার প্রতিটি ধাপ হোক{" "}
              <span className="text-primary">সহজ ও সুন্দর</span>
            </h2>

            <p className="mt-4 max-w-2xl text-sm leading-6 text-muted-foreground sm:text-base sm:leading-7">
              সঠিক কোর্স নির্বাচন থেকে শুরু করে নিয়মিত অনুশীলন—
              প্রতিটি ধাপে আপনাকে এগিয়ে যেতে সাহায্য করবে ইউনিক টিচিং মেথড।
            </p>
          </div>

          {/* Learning Steps */}
          <div className="grid w-full grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {learningSteps.map((step, index) => (
              <motion.div
                key={step.number}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-80px" }}
                custom={index}
                className="h-full"
              >
                <Card className="group h-full overflow-hidden rounded-3xl border-border/60 bg-card p-0 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-xl">
                  <CardContent className="flex h-full flex-col p-0">
                    {/* Image */}
                    <div className="relative aspect-[4/3] w-full overflow-hidden bg-muted/20">
                      <Image
                        src={step.image}
                        alt={step.title}
                        fill
                        className="object-contain p-4 transition-transform duration-500 group-hover:scale-105 sm:p-5"
                        sizes="(max-width: 640px) 85vw, (max-width: 1024px) 40vw, 20vw"
                      />

                      {/* Number */}
                      <div className="absolute left-4 top-4 flex size-9 items-center justify-center rounded-full border border-primary/20 bg-background/90 text-xs font-bold text-primary shadow-sm backdrop-blur">
                        {step.number}
                      </div>

                      {/* Image overlay */}
                      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-background/20 to-transparent" />
                    </div>

                    {/* Content */}
                    <div className="flex flex-1 flex-col p-5 sm:p-6">
                      <h3 className="text-lg font-bold tracking-tight sm:text-xl">
                        {step.title}
                      </h3>

                      <p className="mt-2.5 text-sm leading-6 text-muted-foreground">
                        {step.description}
                      </p>

                      {/* Button */}
                      <Button
                        asChild
                        className="group/button mt-6 h-11 w-full rounded-full"
                      >
                        <Link href={step.href}>
                          <span>{step.button}</span>

                          <span className="ml-auto flex size-8 items-center justify-center rounded-full bg-background text-foreground transition-transform duration-300 group-hover/button:rotate-45">
                            <ArrowUpRight className="size-4" />
                          </span>
                        </Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
