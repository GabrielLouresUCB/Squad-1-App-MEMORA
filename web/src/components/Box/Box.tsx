import styles from "@/components/Box/styles.module.css";

import Image from 'next/image';

export default function Box() {

    function topPage() {
        window.scrollTo(0, 0);
    }


    return (
        <div className={styles.container}>
            <Image src="/images/fundo-box.png" alt="box" width={375} height={286} className={styles.box} />
            <Image src="/images/colaboradores.png" alt="colaboradores" width={150} height={66} className={styles.collab} />

            <div className={styles.imageContainer}>
                <Image src="/images/seta.png" alt="seta" width={36} height={36} className={styles.image} onClick={topPage} />
            </div>
        </div>
    );
}