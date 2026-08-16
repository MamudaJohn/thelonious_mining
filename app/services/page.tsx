import Link from "next/link";
import { SERVICES } from "@/lib/data";
import styles from "./page.module.css";

export default function ServicesIndexPage() {
  return (
    <div className="wrap">
      <div className="hero1">
        <h1>Five disciplines. One chain of custody.</h1>
      </div>
      <div className={styles.log}>
        {SERVICES.map((service) => (
          <div className={styles.logRow} key={service.slug}>
            <div className={styles.depth}>{service.depth}</div>
            <div>
              <h3>{service.title}</h3>
              <span className={styles.tag}>{service.tags.join(" · ")}</span>
              <p>{service.shortdesc}</p>
            </div>
            <Link href={`/services/${service.slug}`} className={styles.link}>
              Learn more →
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}