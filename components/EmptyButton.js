import { ArrowUpIcon } from "lucide-react"

import { Button } from "@/components/ui/button"

export function ButtonDemo({content}) {
  return (
    <div className="flex flex-wrap items-center gap-2 ml-2 dark:bg-neutral-400 rounded-lg dark:text-black bg-neutral-900 md:flex-row">
      <Button variant="outline" >{content}</Button>
    </div>
  )
}
