import styles from "./TrustStrip.module.css"

const trust = [
    {num:"2026",label:"FOUNDED"},
    {num:"7",label:"MINERALS IN SCOPE"},
    {num:"Licensed",label:"REGISTERED MINING OPERATOR"},
    {num:"In-house", label:"GEOLOGY & ASSAY TEAM"},
    {num:"By Request",label:"PRIVATE SITE VISST"}
]

function TrustStrip(){
    return (
        <div className={styles.trust}>
            <div className={`${styles.wrap} wrap`}>
                    {
                        trust.map(({num,label})=>(
                            <div className={styles.stat} key={label}>
                                <div className={styles.num}>{num}</div>
                                <div className={styles.label}>{label}</div>
                            </div>
                        ))
                    }
            </div>
        </div>
    )
}

export default TrustStrip