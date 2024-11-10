import Image from "next/image";
import BarraSuperior from "@/components/BarraSuperior/BarraSuperior";
import styles from "@/styles/pages.module.css";

export default function estrategico() {
    function topPage() {
        window.scrollTo(0, 0);
    }

    return (
        <>
            <BarraSuperior />

            <div className={styles.container}>
                
                <span className={styles.title}>Componentes <strong>Estratégicos</strong></span>
                <Image src="/images/image-main.png" alt="seta" width={340} height={254} />

                <div className={styles.main}>
                    <span className={styles.label}>Valores</span>

                    <div className={styles.content}>
                        -Protagonismo; <br /> <br />

                        -Liberdade com responsabilidade; <br /> <br />

                        -Selecionar, desenvolver e reter pessoas antes pelos valores, princípios, atitudes e objetivos e, só depois, pelas habilidades e conhecimentos; <br /> <br />

                        -Relacionamentos de longo prazo (ganha-ganha); <br /> <br />

                        -Ter cuidado ao criar expectativas, pois cumprimos acordos (“Promessa é dívida”); <br /> <br />

                        -Respeito à diversidade. <br /> <br />

                        -Agilidade, qualidade e flexibilidade; <br /> <br />

                        -Prosperidade; <br /> <br />

                        -Trabalho em equipe; <br /> <br />

                        -Natureza ética, transparência e governança.
                    </div>
                </div>

                <div className={styles.imageContainer}>
                    <Image src="/images/seta.png" alt="seta" width={36} height={36} className={styles.image} onClick={topPage} />
                </div>
            </div>
            
        </>
    );
}