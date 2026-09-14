
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, BookOpen, Sparkles } from "lucide-react";

import { AnimatedBadge } from "@/components/shadcn-space/badge/badge-08";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const freeResources = [
  {
    name: "এস এস সি - ২০২৭",
    description: "এস এস সি ২০২৭ ব্যাচের জন্য প্রয়োজনীয় বিনামূল্যের শিক্ষাসামগ্রী।",
    url: "/resourses/ssc27",
    image:
      "https://res.cloudinary.com/doqcv0ywi/image/upload/v1789305933/ssc27_mamvtg.png",
  },
  {
    name: "এস এস সি - ২০২৮",
    description: "এস এস সি ২০২৮ ব্যাচের প্রস্তুতির জন্য বিনামূল্যের রিসোর্স।",
    url: "/resourses/ssc28",
    image:
      "https://res.cloudinary.com/doqcv0ywi/image/upload/v1789305933/%E0%A7%81%E0%A7%81%E0%A7%A8%E0%A7%87%E0%A7%AE_o3naui.png",
  },
  {
    name: "এইচ এস সি - ২০২৭",
    description: "এইচ এস সি ২০২৭ ব্যাচের জন্য সাজানো প্রয়োজনীয় শিক্ষাসামগ্রী।",
    url: "/resourses/hsc27",
    image:
      "https://res.cloudinary.com/doqcv0ywi/image/upload/v1789305933/hsc27_academic_naapzc.png",
  },
  {
    name: "এইচ এস সি - ২০২৮",
    description: "এইচ এস সি ২০২৮ ব্যাচের প্রস্তুতির জন্য বিনামূল্যের রিসোর্স।",
    url: "/resourses/hsc28",
    image:
      "https://res.cloudinary.com/doqcv0ywi/image/upload/v1789306254/Untitled-1_dpemy8.png",
  },
];

function FreeResourses() {
  return (
    <section className="relative overflow-hidden py-16 sm:py-20 lg:py-24">
      {/* Background decoration */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-0 h-72 w-72 -translate-x-1/2 rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-64 w-64 rounded-full bg-secondary/10 blur-3xl" />
      </div>

      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mx-auto flex max-w-3xl flex-col items-center text-center">
          <AnimatedBadge
            label="বিনামূল্যের রিসোর্স"
            className="mb-4"
          />

          <h2 className="text-3xl font-bold  text-primary sm:text-4xl lg:text-5xl">
            আপনার প্রস্তুতির জন্য
            <span className="mt-4 block text-black!">
              প্রয়োজনীয় ফ্রি রিসোর্স
            </span>
          </h2>

          <p className="mt-4 text-sm leading-7 text-muted-foreground sm:text-base lg:text-lg">
            পড়াশোনার প্রস্তুতিকে আরও সহজ করতে ইউনিক টিচিং মেথডের
            বিনামূল্যের শিক্ষাসামগ্রী এক জায়গায় সাজানো হয়েছে।
          </p>
        </div>

        {/* Resource Cards */}
        <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:mt-12 lg:grid-cols-4">
          {freeResources.map((resource, index) => (
            <Card
              key={resource.name}
              className="group overflow-hidden rounded-3xl border-border/60 bg-background/80 shadow-sm backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-xl"
            >
              <CardContent className="p-0">
                {/* Image */}
                <div className="relative aspect-[4/3] flex overflow-hidden item-center justify-center">
                  <Image
                    src={resource.image}
                    alt={resource.name}
                    width={250}
                    height={250}
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                 />

                  {/* Free Badge */}
                  <div className="absolute left-3 top-3">
                    <div className="inline-flex items-center gap-1.5 rounded-full bg-background/90 px-3 py-1.5 text-xs font-semibold text-primary shadow-sm backdrop-blur">
                      <Sparkles className="size-3.5" />
                      বিনামূল্যে
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-5">
                  <div className="mb-3 flex size-10 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                    <BookOpen className="size-5" />
                  </div>

                  <h3 className="text-lg font-bold tracking-tight text-foreground">
                    {resource.name}
                  </h3>

                  <p className="mt-2 min-h-[48px] text-sm leading-6 text-muted-foreground">
                    {resource.description}
                  </p>

                  <Button
                    asChild
                    className="mt-5 w-full rounded-xl bg-primary font-semibold text-primary-foreground shadow-sm transition-all hover:bg-primary/90"
                  >
                    <Link href={resource.url}>
                      রিসোর্স দেখুন
                      <ArrowUpRight className="ml-1 size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-8 overflow-hidden rounded-3xl border border-primary/15 bg-gradient-to-br from-primary/10 via-background to-secondary/10 p-6 sm:mt-10 sm:p-8">
          <div className="flex flex-col items-center gap-5 text-center sm:flex-row sm:justify-between sm:text-left">
            <div>
            

              <h3 className="mt-2 text-xl font-bold text-primary sm:text-2xl">
                আজই আপনার প্রস্তুতি শুরু করুন
              </h3>

              <p className="mt-1 text-sm leading-6 text-muted-foreground">
                সঠিক রিসোর্স দিয়ে নিয়মিত পড়াশোনার অভ্যাস গড়ে তুলুন।
              </p>
            </div>

            <Button
              asChild
              size="lg"
              className="w-full rounded-xl bg-secondary font-semibold text-secondary-foreground hover:bg-secondary/90 sm:w-auto"
            >
              <Link href="/resourses">
                সব রিসোর্স দেখুন
                <ArrowUpRight className="ml-1 size-4" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FreeResourses;