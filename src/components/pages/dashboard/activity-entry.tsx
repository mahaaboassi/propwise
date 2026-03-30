import { iconMap } from "@/components/icons/icon-map"
import { ActivityEntry } from "@/lib/mock-api"
type Props = {
  entry: ActivityEntry
}
const ActivityEntryComponent = ({entry}:Props)=>{
    const Icon = entry.icon ? iconMap[entry.icon]  : null
    return(<div className="flex flex-col gap-[2px] h-full justify-center border-l-2 border-[#F1F3F7] pl-[26px]">
                <p className="flex flex-wrap items-center text-[#091026] leading-[18px] text-xs ">
                    <span className="text-[var(--content-info)] font-normal">{entry.message}</span>
                    {entry.highlights.map((highlight,index)=>(<span className="text-[#476CDC] font-bold" key={`Highlights_${highlight.text}_${index}`}>
                        &nbsp;{highlight.text}
                    </span>))}
                </p>
                
                <div className="text-[#A0A9BD] leading-[16.5px] text-[11px] font-normal">{entry.timestamp}</div>
                {/* icon */}
                {Icon && (
                    <div className="absolute left-[19.99px] flex-center top-1/2 -translate-y-1/2 w-[27.99px] h-[27.99px] rounded-full text-[var(--content-subtle)] bg-[#FAFAFA]
                                    shadow-[0px_0px_0px_3px_rgba(255, 255, 255, 1)]">
                        <Icon className="size-[12.99px]" />
                    </div>
                )}
            </div>)
}
export default ActivityEntryComponent