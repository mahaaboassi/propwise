import { LineChart, Line, ResponsiveContainer } from "recharts";
type Props = {
    data: {
        name: number,
        value: number
    }[],
    trendDirection: "up" | "down"
}
const SparklineChart = ({data,trendDirection}: Props)=>{
    return  <ResponsiveContainer width={100} height={40}>
          <LineChart data={data}>
            <defs>
            <filter id="lineShadowSpark" x="0%" y="-10%" width="140%" height="140%">
                <feDropShadow 
                dx="0" 
                dy="8" 
                stdDeviation="6" 
                floodColor="#000" 
                floodOpacity="0.3" 
                />
            </filter>
            </defs>
            <Line
              type="monotone"
              dataKey="value"
              stroke={
                trendDirection === "up"
                  ? "var(--content-badge-up)"
                  : "var(--content-badge-down)"
              }
              strokeWidth={2}
              dot={false}
              style={{ filter: "url(#lineShadowSpark)" }}
            />
          </LineChart>
        </ResponsiveContainer>
}
export default SparklineChart