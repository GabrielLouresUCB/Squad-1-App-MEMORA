import Image from "next/image";
import BarraSuperior from "@/components/BarraSuperior/BarraSuperior";
import styles from "@/styles/pages.module.css";
import Link from "next/link";

export default function publicacoes() {
    function topPage() {
        window.scrollTo(0, 0);
    }

    return (
        <>
            <BarraSuperior />

            <div className={styles.container}>
                
                <span className={styles.title}>Publicações <strong>S/A</strong></span>
                <Image src="/images/image-main.png" alt="seta" width={340} height={254} />

                <div className={styles.main}>
                    <div className={styles.publicacaoBox}>
                        <Image src="/images/livro.png" alt="seta" width={48} height={48} />
                        <span className={styles.publicacaoLabel}>Estatuto Social Memora S.A - 23/12/2014</span>
                    </div>
                    <div className={styles.publicacaoDivision}></div>
                    <div className={styles.publicacaoBox}>
                        <Image src="/images/lapis.png" alt="seta" width={48} height={48} />
                        <span className={styles.publicacaoLabel}>Ata 1ª Reunião dos Sócios - 23/12/2024</span>
                    </div>
                    <div className={styles.publicacaoDivision}></div>
                    <div className={styles.publicacaoBox}>
                        <Image src="/images/lapis2.png" alt="seta" width={48} height={48} />
                        <span className={styles.publicacaoLabel}>Ata Reeleição da Diretoria 2020</span>
                    </div>
                </div>

                <div className={styles.imageContainer}>
                    <Image src="/images/seta.png" alt="seta" width={36} height={36} className={styles.image} onClick={topPage} />
                </div>
            </div>
            
        </>
    );
}