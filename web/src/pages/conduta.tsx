import Image from "next/image";
import BarraSuperior from "@/components/BarraSuperior/BarraSuperior";
import styles from "@/styles/pages.module.css";
import Link from "next/link";

export default function conduta() {
    function topPage() {
        window.scrollTo(0, 0);
    }

    return (
        <>
            <BarraSuperior />

            <div className={styles.container}>
                
                <span className={styles.title}>Código de <strong>Conduta</strong></span>
                <Image src="/images/image-main.png" alt="seta" width={340} height={254} />

                <div className={styles.main}>
                    <div className={styles.socialContent}>
                        O presente Código de Conduta expressa o compromisso da Memora e dos Memoráveis para com o cumprimento das leis, regulamentos e normas aplicáveis às suas atividades, com o respeito ao próximo e com a postura ética que deve nortear a conduta pessoal e profissional. A prática cotidiana dos seus princípios proporcionará um processo de aprendizado contínuo, estimulando o diálogo como fator de resolução de conflitos, dilemas e dúvidas éticas que existem ou possam vir a existir no dia-a-dia profissional, levando à evolução organizacional da Memora.
                        <br /> <br />
                        A Memora sustenta seus planos de crescimento e longevidade em dois nortes estratégicos, que se complementam e se potencializam: a integridade e a prosperidade. O presente Código é um instrumento relacionado à busca intransigente da integridade, mas, foi concebido para ser também fomentador da prosperidade. Isso decorre da crença de que nosso propósito é construído sobre o alicerce das relações de confiança pautadas pelo ganha-ganha-ganha.
                        <br /> <br />
                        Faça o download do nosso código de conduta clicando
                        <Link href="" className={styles.link}> aqui.</Link>
                    </div>
                </div>

                <div className={styles.imageContainer}>
                    <Image src="/images/seta.png" alt="seta" width={36} height={36} className={styles.image} onClick={topPage} />
                </div>
            </div>
            
        </>
    );
}