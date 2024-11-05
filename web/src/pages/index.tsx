import Image from 'next/image';
import BarraSuperior from "@/components/BarraSuperior/BarraSuperior";
import Carrosel from "@/components/Carrosel/Carrosel";
import Setores from "@/components/Setores/Setores";
import styles from "@/styles/index.module.css";

import { setores } from "@/json/setores";

export default function Home() {

  function topPage() {
    window.scrollTo(0, 0);
  }

  return (
    <>
      <BarraSuperior />

      <Carrosel />

      <div className={styles.container}>

        <div className={styles.info}>
          <Image src="/images/fundo-box.png" alt="box" width={375} height={286} className="" />
          <Image src="/images/informacoes.png" alt="informacoes" width={340} height={350} className="" />
        </div>

        {
          setores.map(setor => {
              return (
                <Setores 
                  key={setor.id}
                  description={setor.description}
                  url={setor.url}
                  title={setor.title}
                  subtitle={setor.subtitle}
                />
              )
          })
        }

        <section className={styles.historia}>
            <span className={styles.historiaTitle}>Histórias Memoráveis e soluções diversas</span>
            <span className={styles.historiaDescription}>Nossa meta é que seu negócio, não importa de qual área seja, se torne um lugar de histórias incríveis com experiências únicas, conectado com o que há de melhor no mundo da tecnologia.</span>
            <button className={styles.historiaButton}>Ver todas</button>
        </section>

        <section className={styles.solucoes}>
            <hr className={styles.solucoesLine}/>
            <span className={styles.solucoesTitle}>
              Soluções inovadoras <strong>para empresas exigentes</strong>
            </span>
        </section>  

        <div className={styles.imageContainer}>
          <Image src="/images/seta.png" alt="seta" width={36} height={36} className={styles.image} onClick={topPage} />
        </div>
      </div>
    </>
  );
}