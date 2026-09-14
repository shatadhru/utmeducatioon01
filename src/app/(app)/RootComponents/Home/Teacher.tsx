"use client"

import Image from "next/image";
import Link from "next/link";
import {
  ArrowUpRight,
  Award,
  BookOpen,
  CheckCircle2,
  PlayCircle,
  Sparkles,
  Users,
} from "lucide-react";

import { AnimatedBadge } from "@/components/shadcn-space/badge/badge-08";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
} from "@/components/ui/card";
import { CldImage } from "next-cloudinary";

function Teacher() {
  return (
    <section className="relative overflow-hidden py-16 sm:py-20 lg:py-28">
      {/* Background */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/4 top-10 h-72 w-72 rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute bottom-0 right-1/4 h-72 w-72 rounded-full bg-primary/5 blur-3xl" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="mx-auto max-w-3xl text-center">
          <AnimatedBadge
            label="আমাদের শিক্ষক"
            className="mb-4"
          />

          <h2 className="text-3xl font-bold tracking-tight text-primary sm:text-4xl lg:text-5xl">
            যিনি শেখান সহজভাবে,
            <span className="mt-1 block text-foreground">
              গড়ে তোলেন আত্মবিশ্বাস
            </span>
          </h2>

          <p className="mt-4 text-sm leading-7 text-muted-foreground sm:text-base lg:text-lg">
            জটিল বিষয়কে সহজভাবে বোঝানো এবং শিক্ষার্থীদের কনসেপ্টভিত্তিক
            শেখার অভ্যাস গড়ে তোলাই আমাদের শিক্ষাদানের মূল লক্ষ্য।
          </p>
        </div>

        {/* Teacher Card */}
        <Card className="mx-auto p-0 mt-10 max-w-6xl overflow-hidden rounded-[2rem] border-primary/10 bg-background/80 shadow-xl shadow-primary/5 backdrop-blur sm:mt-14">
          <CardContent className="p-0">
            <div className="grid lg:grid-cols-[0.85fr_1.15fr]">
              {/* Teacher Image */}
              <div className="relative min-h-[420px] overflow-hidden bg-primary/5 sm:min-h-[500px] lg:min-h-[600px]">
                {/* Decorative circles */}
                <div className="absolute -left-16 -top-16 size-48 rounded-full bg-primary/10" />
                <div className="absolute -bottom-20 -right-20 size-64 rounded-full bg-primary/10" />

                <div className="absolute inset-x-8 bottom-0 top-8 overflow-hidden rounded-t-[2rem]">
                  <CldImage
  width={960}
  height={600}
                    src="https://res.cloudinary.com/dccbp4dpb/image/upload/v1789397957/Gemini_Generated_Image_1wos3a1wos3a1wos_lvk1gm.jpg"

  sizes="100vw"
  alt="দেলোয়ার হোসেন"
  className="object-cover object-top pb-10 transition-transform duration-500 hover:scale-[1.02] rounded-2xl"
/>
                </div>

                {/* Experience Badge */}
                <div className="absolute bottom-5 left-5 rounded-2xl border bg-background/95 px-4 py-3 shadow-lg backdrop-blur sm:bottom-7 sm:left-7">
                  <div className="flex items-center gap-3">
                    <div className="flex size-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
                      <Award className="size-5" />
                    </div>

                    <div>
                      <p className="text-xs text-muted-foreground">
                        শিক্ষাদানে যাত্রা
                      </p>
                      <p className="font-bold text-foreground">
                        ২০১৭ সাল থেকে
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="flex flex-col justify-center p-6 sm:p-8 lg:p-12">
                {/* Role */}
                <div className="flex flex-wrap items-center gap-2">
                  <Badge className="rounded-full bg-primary px-3 py-1 text-primary-foreground hover:bg-primary">
                    ফাউন্ডার ও সিইও
                  </Badge>

                  <Badge
                    variant="secondary"
                    className="rounded-full px-3 py-1"
                  >
                    ইউনিক টিচিং মেথড
                  </Badge>
                </div>

                {/* Name */}
                <h3 className="mt-5 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                  দেলোয়ার হোসেন
                </h3>

                <div className="mt-3 h-1 w-16 rounded-full bg-primary" />

                {/* Description */}
                <div className="mt-6 space-y-4 text-sm leading-7 text-muted-foreground sm:text-base">
                  <p>
                    <span className="font-semibold text-foreground">
                      দেলোয়ার হোসেন
                    </span>
                    , ফাউন্ডার ও সিইও{" "}
                    <span className="font-semibold text-primary">
                      ইউনিক টিচিং মেথড
                    </span>
                    , ২০১৭ সাল থেকে শিক্ষার্থীদের জন্য জটিল বিষয়গুলো সহজ ও
                    আকর্ষণীয়ভাবে উপস্থাপন করছেন।
                  </p>

                  <p>
                    তিনি প্র্যাক্টিকাল উদাহরণ, ভিজুয়ালাইজেশন এবং বাস্তব জীবনের
                    প্রয়োগের মাধ্যমে শিক্ষার্থীদের কনসেপ্ট বোঝার ক্ষমতা বাড়ান।
                  </p>

                  <p>
                    তার লক্ষ্য শুধু পরীক্ষায় ভালো ফলাফল নয়; বরং শিক্ষার্থীদের
                    এমনভাবে শেখানো, যাতে তারা শেখা বিষয়গুলো বাস্তব জীবনেও
                    কাজে লাগাতে পারে।
                  </p>
                </div>

                {/* Stats */}
                <div className="mt-8 grid grid-cols-2 gap-3 sm:gap-4">
                  <div className="rounded-2xl border bg-muted/30 p-4">
                    <div className="flex items-center gap-2 text-primary">
                      <Users className="size-5" />
                      <span className="text-xl font-bold sm:text-2xl">
                        ৫,৫৪,০০০+
                      </span>
                    </div>

                    <p className="mt-1 text-xs text-muted-foreground sm:text-sm">
                      শিক্ষার্থী
                    </p>
                  </div>

                  <div className="rounded-2xl border bg-muted/30 p-4">
                    <div className="flex items-center gap-2 text-primary">
                      <PlayCircle className="size-5" />
                      <span className="text-xl font-bold sm:text-2xl">
                        ৬২২+
                      </span>
                    </div>

                    <p className="mt-1 text-xs text-muted-foreground sm:text-sm">
                      শিক্ষামূলক ভিডিও
                    </p>
                  </div>
                </div>

                {/* Highlights */}
                <div className="mt-7 space-y-3">
                  {[
                    "জটিল বিষয়কে সহজভাবে উপস্থাপন",
                    "প্র্যাক্টিকাল উদাহরণ ও ভিজুয়ালাইজেশন",
                    "কনসেপ্টভিত্তিক শেখার ওপর গুরুত্ব",
                  ].map((item) => (
                    <div
                      key={item}
                      className="flex items-center gap-3 text-sm text-foreground"
                    >
                      <CheckCircle2 className="size-5 shrink-0 text-primary" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>

                {/* CTA */}
                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  <Button
                    asChild
                    size="lg"
                    className="w-full rounded-xl sm:w-auto"
                  >
                    <Link href="/teachers">
                      আরও জানুন
                      <ArrowUpRight className="ml-1 size-4" />
                    </Link>
                  </Button>

                  <Button
                    asChild
                    variant="outline"
                    size="lg"
                    className="w-full rounded-xl sm:w-auto"
                  >
                    <Link href="/courses">
                      কোর্সগুলো দেখুন
                      <BookOpen className="ml-1 size-4" />
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Bottom Quote */}
       
      </div>
    </section>
  );
}

export default Teacher;