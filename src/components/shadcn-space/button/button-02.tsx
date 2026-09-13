
"use client"

import { Button } from "@/components/ui/button"
import "@/components/shadcn-space/button/button-02.css"
import { useRouter } from "next/navigation"
import { ArrowRight } from "lucide-react"

const GetStartedButton = ({ link = "/" }) => {
  const router = useRouter()

  return (
    <Button
      size="lg"
      onClick={() => router.push(link)}
      className="group h-10 cursor-pointer rounded-xl px-8 text-base font-semibold shadow-lg transition-all duration-300 hover:scale-[1.03] hover:shadow-xl active:scale-[0.98] sm:h-12 sm:px-10 sm:text-lg"
    >
      <span className="shiny inline-flex items-center gap-3 bg-[linear-gradient(120deg,rgba(255,255,255,0)_40%,rgba(255,255,255,0.9)_50%,rgba(255,255,255,0)_60%)] bg-[length:200%_100%] bg-clip-text text-white">
        কোর্স সমূহ

        <ArrowRight
          className="size-5 transition-transform duration-300 group-hover:translate-x-1 sm:size-6"
          strokeWidth={2.5}
        />
      </span>
    </Button>
  )
}

export default GetStartedButton
