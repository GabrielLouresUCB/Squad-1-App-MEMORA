import Image from "next/image";
import BarraSuperior from "@/components/BarraSuperior/BarraSuperior";
import styles from "@/styles/pages.module.css";
import Link from "next/link";

export default function social() {
    function topPage() {
        window.scrollTo(0, 0);
    }

    return (
        <>
            <BarraSuperior />

            <div className={styles.container}>
                
                <span className={styles.title}>Responsabilidade <strong>Social</strong></span>
                <Image src="/images/image-main.png" alt="seta" width={340} height={254} />

                <div className={styles.main}>
                    <span className={styles.socialTitle}>Junior Achievement</span>

                    <div className={styles.socialContent}>
                        A Junior Achievement é uma das maiores organizações sociais incentivadoras de jovens do mundo e possui um programa de voluntariado que capacita jovens em idade escolar em empreendedorismo.
                        <br /> <br />
                        Seu objetivo é despertar o espírito empreendedor nos jovens, ainda na fase escolar, estimulando o seu desenvolvimento pessoal, proporcionando uma visão do mundo dos negócios e facilitando o acesso ao mercado de trabalho.
                        <br /> <br />
                        As atividades do projeto se desenvolvem através de programas educativos, aplicados junto aos jovens através de parcerias com escolas e voluntários dispostos a compartilhar suas experiências e conhecimentos com estudantes de diferentes faixas etárias.
                        <Link href="" className={styles.link}>Saiba mais.</Link>
                    </div>

                    <span className={styles.socialTitle}>Reciclando Sons</span>

                    <div className={styles.socialContent}>
                        O Instituto Reciclando Sons (IRS) é uma organização que utiliza a música como instrumento de educação, ressocialização, inclusão social e produtiva de crianças, adolescentes, jovens e famílias.
                        <br /> <br />
                        O IRS atua na CIdade Estrutural, em Brasília-DF, desde 2001. As atividades, que buscam trazer um futuro para os atendidos através de uma tecnologia social de educação musical, acontecem na sede cultural da organização, localizada no Setor Leste da Cidade Estrutural.
                        <br /> <br />
                        Além de promover a convivência cultural produtiva saudável, o projeto envolve a comunidade local e forma músicos e educadores sociais. Todas as ações são focadas em prevenir o agravamento dos problemas de vulnerabilidade social local.
                        <Link href="" className={styles.link}>Saiba mais.</Link>
                    </div>

                    <span className={styles.socialTitle}>Lar dos velhinhos</span>

                    <div className={styles.socialContent}>
                        O Lar dos Velhinhos, localizado em Sobradinho, cidade perto de Brasília-DF, abriga 70 idosos excluídos sociais, sem condições de auto sustento, em regime de longa permanência.
                        <br /> <br />
                        O Lar é criado e mantido pela instituição Obras Assistenciais Bezerra de Menezes e possui certificado de Entidade Beneficente de Assistência Social, emitido pelo Governo Federal. Mais de 60 empregos diretos são gerados pelo projeto, entre cuidadores, escritório, cozinha, lavanderia, entre outros.
                        <br /> <br />
                        Também fazem parte do projeto o Centro de Atividades Francisco de Assis, que oferece atividades para idosos, pessoas em situação de risco e para a comunidade; a Oficina de Reciclagem, Reaproveitamento de Materiais e Produção de Papel Artesanal; e o Reciclando Experiências, que oferece espaço para jovens em cumprimento de medidas socioeducativas trabalharem juntamente com os idosos.
                        <br /> <br />
                        O apoio da Memora é por meio de colaboradores voluntários, que ajudam com contribuições em dinheiro, produtos e serviços de voluntariado.
                        <Link href="" className={styles.link}>Saiba mais.</Link>
                    </div>
                </div>

                <div className={styles.imageContainer}>
                    <Image src="/images/seta.png" alt="seta" width={36} height={36} className={styles.image} onClick={topPage} />
                </div>
            </div>
            
        </>
    );
}