import { LineChart, Line, ResponsiveContainer } from "recharts";
type Props = {
    data: {
        name: number,
        value: number
    }[],
    trendDirection: "up" | "down"
}
const SparklineChart = ({data,trendDirection}: Props)=>{
    return  <ResponsiveContainer width={55} height={16.65}>
          <LineChart margin={{ top: 0, right: 0, left: 0, bottom: 0 }} data={data}>
            <defs>
            <filter id="lineShadowSpark" x="0%" y="-10%" width="140%" height="140%">
                <feDropShadow 
                dx="0" 
                dy="8" 
                stdDeviation="6" 
                floodColor="#000" 
                floodOpacity="0.5" 
                />
            </filter>
            </defs>
            <Line
              type="linear"
              dataKey="value"
              stroke={
                trendDirection === "up"
                  ? "var(--content-badge-up)"
                  : "var(--content-badge-down)"
              }
              strokeWidth={1.04}
              dot={false}
              style={{ filter: "url(#lineShadowSpark)" }}
            />
          </LineChart>
        </ResponsiveContainer>
}
export default SparklineChart