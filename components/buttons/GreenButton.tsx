import styles from "./GreenButton.module.css"

interface valueReceived {
    text : string[] | string;
}

export default function GreenButton({text}:valueReceived){
  return (
    <div>
      <span className="cta-row">
          {
            Array.isArray(text) ? (
              text.map( tag => <span key={tag} className={styles.greenbutton}>{tag}</span>)
            ): (
              <span key={text} className={styles.greenbutton}>{text}</span>
            )
          }
      </span>
    </div>
  )
}
