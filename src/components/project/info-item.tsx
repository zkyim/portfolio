import { LucideIcon } from "lucide-react"

interface InfoItemProps {
    icon: LucideIcon,
    label: string,
    children: React.ReactNode
}

const InfoItem: React.FC<InfoItemProps> = ({
    icon:Icon,
    label,
    children
}) => {
  return (
    <div className="grid grid-cols-3 items-start gap-2 capitalize">
        <div className="flex items-center gap-2">
            <Icon className="size-4"/>
            <span className="text-sm">{label}:</span>
        </div>
        <div className="col-span-2 text-foreground">{children}</div>
    </div>
  )
}

export default InfoItem
