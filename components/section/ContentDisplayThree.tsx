import Link from "next/link";

interface valuesReceived {
    name : string,
    trend : string,
    pct : string,
    demand : string,
    signal : number | string,
    count : number
}

const ContentDisplayThree = ({name, trend, pct, demand, signal, count}: valuesReceived) => {
    return (
        <div className="market-panel">
            {
                count < 1? (
                <div className="ticker-row head">
                    <div>{name}</div>
                    <div>{trend}</div>
                    <div>{demand}</div>
                    <div>{signal}</div>
                </div>
                ) : (
                <div className="ticker-row" key={name}>
                    <div>{name}</div>
                    <div className={trend}>
                        {trend === "up" ? "▲" : "▼"} {pct}
                    </div>
                    <div>{demand}</div>
                    <div className="bar-bg">
                        <div className="bar-fill" style={{ width: `${signal}%` }} />
                    </div>
                </div>
                )
            }
            
        </div>
    )

}

export default ContentDisplayThree;