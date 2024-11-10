import BarraSuperior from "@/components/BarraSuperior/BarraSuperior";
import Image from "next/image";
import styles from "@/styles/historia.module.css";

export default function historia() {

    function topPage() {
        window.scrollTo(0, 0);
    }

    return (
        <>
            <BarraSuperior />

            <div className={styles.container}>
                <Image src="/images/historia-carrossel.png" alt="seta" width={375} height={220} className={styles.imageHistory} />

                <div className={styles.historia}>
                    <div className={styles.title}>
                        Nome e Essência
                    </div>

                    <div className={styles.content}>
                        A <strong>Memora</strong> nasceu com a vocação essencial de influenciar positivamente a sociedade, sejam nossos clientes, nossos colaboradores, nossas famílias, nossa comunidade, enfim, aqueles que sejam afetados de alguma forma pela existência da <strong>Memora.</strong> Derivou dessa vocação um conceito subjetivo que nos encanta que é o de ser memorável, o qual personifica o que há de mais nobre no conjunto de valores que nos une: a responsabilidade, a confiança, o compromisso dentre outras virtudes tão essenciais para nós enquanto pessoas e para a <strong>Memora</strong> enquanto organização e colaboradores, <strong>Memoráveis.</strong>
                    </div>
                </div>

                <div className={styles.imageContainer}>
                    <Image src="/images/seta.png" alt="seta" width={36} height={36} className={styles.image} onClick={topPage} />
                </div>
            </div>
            
        </>
    );
}