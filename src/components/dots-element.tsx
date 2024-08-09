import { cn } from "@/lib/utils";


interface DotsElementProps  {
  className?: React.ReactNode;
}

export const DotsElement: React.FC<DotsElementProps> = ({
  className
}) => {
  return (
    <div className={cn("dots", className)}></div>
  )
}

