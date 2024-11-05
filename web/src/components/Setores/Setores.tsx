import styles from "@/components/Setores/styles.module.css";

import Image from 'next/image';

type setoresProps = {
    url: string;
    description: string;
    title: string;
    subtitle: string;
}

export default function Setores({ description, subtitle, title, url}: setoresProps) {
    return (
        <div className={styles.container}>
            <Image src={url} alt={description} width={54} height={57} />
            <span className={styles.title}>{title}</span>
            <span className={styles.subtitle}>{subtitle}</span>
            <button className={styles.button}>Ver histórias</button>
        </div>
    );
}