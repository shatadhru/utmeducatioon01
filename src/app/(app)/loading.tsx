
export default function Loading() {
  return (
    <div className="min-h-screen bg-background">
      <div className="mx-auto flex min-h-screen w-full max-w-7xl flex-col px-4 py-8 sm:px-6 lg:px-8">
        
        {/* Header shimmer */}
        <div className="flex items-center justify-between">
          <div className="h-9 w-32 animate-pulse rounded-lg bg-muted" />

          <div className="hidden items-center gap-3 sm:flex">
            <div className="h-4 w-16 animate-pulse rounded bg-muted" />
            <div className="h-4 w-20 animate-pulse rounded bg-muted" />
            <div className="h-4 w-16 animate-pulse rounded bg-muted" />
          </div>

          <div className="h-9 w-20 animate-pulse rounded-full bg-muted" />
        </div>

        {/* Hero shimmer */}
        <div className="flex flex-1 items-center justify-center py-20">
          <div className="w-full max-w-3xl text-center">
            <div className="mx-auto mb-6 h-7 w-56 animate-pulse rounded-full bg-muted" />

            <div className="mx-auto h-12 w-3/4 animate-pulse rounded-xl bg-muted sm:h-16" />

            <div className="mx-auto mt-4 h-12 w-2/3 animate-pulse rounded-xl bg-muted sm:h-16" />

            <div className="mx-auto mt-6 h-5 w-full max-w-2xl animate-pulse rounded bg-muted" />

            <div className="mx-auto mt-3 h-5 w-4/5 max-w-xl animate-pulse rounded bg-muted" />

            <div className="mt-8 flex justify-center gap-3">
              <div className="h-11 w-36 animate-pulse rounded-full bg-muted" />
              <div className="h-11 w-36 animate-pulse rounded-full bg-muted" />
            </div>
          </div>
        </div>

        {/* Cards shimmer */}
        <div className="grid grid-cols-1 gap-5 pb-12 sm:grid-cols-2 lg:grid-cols-4">
          {Array.from({ length: 4 }).map((_, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-3xl border bg-card"
            >
              <div className="aspect-[4/3] w-full animate-pulse bg-muted" />

              <div className="space-y-3 p-5">
                <div className="h-5 w-3/4 animate-pulse rounded bg-muted" />
                <div className="h-4 w-full animate-pulse rounded bg-muted" />
                <div className="h-4 w-2/3 animate-pulse rounded bg-muted" />
                <div className="mt-5 h-10 w-full animate-pulse rounded-full bg-muted" />
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  )
}
