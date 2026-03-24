import { iconMap, IconName } from "@/components/icons/icon-map"
import { ActivityEntry } from "@/lib/mock-api"
type Props = {
  entry: ActivityEntry
}
const ActivityEntryComponent = ({entry}:Props)=>{
    const Icon = entry.icon ? iconMap[entry.icon]  : null
    return(<li className="px-4 relative">
                <div className="flex flex-wrap items-center text-sm ">
                    <p className="text-[var(--content-info)] ">{entry.message}</p>
                    {entry.highlights.map((highlight,index)=>(<span className="text-[var(--brand-bg-default)] font-medium" key={`Highlights_${highlight.text}_${index}`}>
                        &nbsp;{highlight.text}
                    </span>))}
                </div>
                
                <div className="text-[var(--content-muted)]">{entry.timestamp}</div>
                {/* icon */}
                {Icon && (
                    <div className="absolute -left-3.5 flex-center top-1.5 w-7 h-7 rounded-full text-[var(--content-subtle)] bg-[var(--bg-muted)]">
                        <Icon className="w-4 h-4" />
                    </div>
                )}
            </li>)
}
export default ActivityEntryComponent