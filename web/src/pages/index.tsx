import Image from 'next/image';

import BarraSuperior from "@/components/BarraSuperior/BarraSuperior";
import Carrosel from "@/components/Carrosel/Carrosel";
import Setores from "@/components/Setores/Setores";
import Solucoes from "@/components/Solucoes/Solucoes";
import CardBlog from '@/components/CardBlog/CardBlog';
import Footer from '@/components/Footer/Footer';

import styles from "@/styles/index.module.css";

import { setores } from "@/json/setores";
import { solucoes } from "@/json/solucoes";
import { blog } from "@/json/blog";

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

        {
          solucoes.map(solucao => {
              return (
                <Solucoes key={solucao.id} description={solucao.description} title={solucao.title} />
              )
          })
        }

        <div className={styles.containerTitle}>
          <hr className={styles.lineTitle} />
          <span className={styles.textTitle}>Conexões que consquistaram a<br/><strong>confiança de grandes clientes</strong></span>  
        </div>

        <div className={styles.containerObservation}>
          <p className={styles.textObservation}> 
              É notória diferença que a empresa MEMORA fez
              na TCB. Implementou uma ferramenta que alia
              inovação, veracidade e transparência em todo o processo
              de aquisição, desde o nascimento da ideia até a concretização
              da compra de um modo muito prático e organizado. A plataforma
              é fácil e didática, todos os setores aprenderam a utilizar e agora
              faz parte do nosso cotidiano. Só temos agradecer o suporte pós implementação
              do sistema.
          </p>

          <div className={styles.sign}>
            <span className={styles.nameSign}>Sitna</span>
            <span className={styles.positionSign}>Gestora de compras</span>
            <span className={styles.businessSign}>TCB (Sociedade de Transporte Coletivo de Brasília)</span>
          </div>
        </div>

        <div className={styles.containerBlog}>
          <div className={styles.containerTitle}>
            <hr className={styles.lineTitle} />
            <span className={styles.textTitle}>Blog<br/><strong>MEMORA</strong></span>  
          </div>

          {
            blog.map(item => {
              return (
                <CardBlog 
                  url={item.url}
                  title={item.title}
                  subtitle={item.subtitle}
                  content={item.content}
                  key={item.id} 
                />
              )
            })
          }

        </div>


        <Image src="/images/blog/atas.png" alt="seta" width={250} height={60} className={styles.atas} />

        <Footer />

        
        <div className={styles.imageContainer}>
          <Image src="/images/seta.png" alt="seta" width={36} height={36} className={styles.image} onClick={topPage} />
        </div>
      </div>
    </>
  );
}