'use client'

import { motion } from 'motion/react'
import { Loader } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { cn } from '@/utilities/cn'

interface AnimatedBadgeProps {
  label: string
  icon?: React.ReactNode
  className?: string
  iconClassName?: string
  wordDelay?: number
}

const MotionBadge = motion.create(Badge)

export function AnimatedBadge({
  label,
  icon = <Loader size={16} strokeWidth={2.5} />,
  className,
  iconClassName,
  wordDelay = 0.1,
}: AnimatedBadgeProps) {
  return (
    <MotionBadge
      variant="outline"
      className={cn(
        'relative h-auto cursor-default overflow-visible rounded-full',
        'gap-2',
        'bg-background backdrop-blur-md',
        'text-foreground text-sm font-medium leading-none',
        'border-amber-300/25',
        className,
      )}
    >
      {/* Top glow */}
      <motion.span
        aria-hidden
        animate={{ opacity: 0.55 }}
        transition={{ duration: 0.45 }}
        className="pointer-events-none absolute -top-2 left-[10%] right-[10%] h-4 blur bg-[radial-gradient(ellipse_80%_100%_at_50%_100%,rgba(252,211,77,0.95)_0%,transparent_70%)]"
      />

      <motion.span
        aria-hidden
        animate={{ opacity: 0.75 }}
        transition={{ duration: 0.45 }}
        className="pointer-events-none absolute -top-1 left-[22%] right-[22%] h-2 blur-sm bg-[radial-gradient(ellipse_70%_100%_at_50%_100%,rgba(252,211,77,0.85)_0%,transparent_70%)]"
      />

      <motion.span
        aria-hidden
        animate={{ opacity: 0.9 }}
        transition={{ duration: 0.45 }}
        className="pointer-events-none absolute top-0 left-[28%] right-[28%] h-px bg-[radial-gradient(ellipse_40%_50%_at_50%_50%,rgba(252,211,77,0.95)_0%,transparent_100%)]"
      />

      {/* Icon */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{
          duration: 1.8,
          repeat: Infinity,
          ease: 'linear',
        }}
        className={cn(
          'flex h-4 w-4 shrink-0 items-center justify-center text-amber-300',
          iconClassName,
        )}
      >
        {icon}
      </motion.div>

      {/* Animated text */}
      <span className="inline-flex overflow-hidden leading-none">
        {label.split(' ').map((word, index) => (
          <motion.span
            key={`${word}-${index}`}
            initial={{ y: -14, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              delay: index * wordDelay,
              duration: 0.35,
            }}
            className="mr-1 inline-block whitespace-nowrap leading-normal"
          >
            {word}
          </motion.span>
        ))}
      </span>
    </MotionBadge>
  )
}