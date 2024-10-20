import styles from "@/components/Carrosel/styles.module.css";

import Image from 'next/image';

export default function Carrosel() {
    return (
        <div className={styles.container}>
            <Image src="/images/seta.png" alt="seta" width={36} height={36} className={styles.image} />
            <Image src="/images/seta.png" alt="seta" width={36} height={36} className={styles.image1} />
        </div>
    );
}