import { cn } from "@/lib/utils";

interface ContainerProps {
    id?: string;
    children: React.ReactNode;
    className?: string;
}

const Container: React.FC<ContainerProps> = ({
    id,
    children,
    className
}) => {
  return (
    <div id={id} className={cn("bg-background py-16", className)}>
        <div className="mx-auto max-w-[92%] md:max-w-[88%]">
            {children}
        </div>
    </div>
  )
}

export default Container
