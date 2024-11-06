import styles from "@/components/Footer/styles.module.css";

import Image from 'next/image';

export default function Footer() {
    return (
       <div className={styles.container}>
            <div className={styles.header}>
                <div className={styles.title}>Quer Conhecer nossas soluções?</div>
                <button className={styles.contact}>ENTRE EM CONTATO</button>
            </div>

            <div className={styles.main}>
                <Image src="/images/logo-min.png" alt="logo" width={250} height={50} />
                <p className={styles.mission}> A Memora é uma empresa dedicada a fornecer
                    soluções em Gestão de Processos para clientes
                    públicos e privados. Os resultados alcançados
                    demostram na prática a visão da empresa
                </p>

                <div className={styles.logos}>
                    <Image src="/images/logos/bndes.png" alt="logo" width={270} height={60} />
                    <Image src="/images/logos/sinfo.png" alt="logo" width={270} height={100} />
                    <Image src="/images/logos/assespro.png" alt="logo" width={290} height={80} />
                    <Image src="/images/logos/anetie.png" alt="logo" width={290} height={80} />
                </div>

                <div className={styles.address}>
                    <span className={styles.addressTitle}>Matriz</span>
                    <hr className={styles.line} />

                    <p className={styles.subtitle}>Brasília</p>

                    <p>SIG Quadra 04 Lote 625</p>
                    <p>Parte A 70.610-440</p>
                    <p>(61)99421-0030</p>
                    <p>contato@memora.com.br</p>

                    <span className={styles.addressTitle}>Filiais</span>
                    <hr className={styles.line}/>

                    <p className={styles.subtitle}>Goiânia</p>

                    <p>Av.Castelo Branco, 371</p>
                    <p>Edifício Lourenço Office, sala 2101</p>
                    <p>74.140-150-St.Oeste</p>
                    <p>(62)99421-7576</p>
                    <p>contato@memora.com.br</p>

                    <p className={styles.subtitle}>Lisboa</p>

                    <p>Rua IvensNº 42-1º andar</p>
                    <p>Edifício Lourenço Office, sala 2101</p>
                    <p>74.140-150-St.Oeste</p>
                    <p>(62)99421-7576</p>
                    <p>contato@memora.com.br</p>

                    <span className={styles.addressTitle}>Contatos</span>
                    <hr className={styles.line}/>

                    <p className={styles.socialHeader}>Siga <strong> <i>nossas redes</i> </strong></p>

                    <div className={styles.social}>
                        <Image src="/images/social/facebook.png" alt="logo" width={32} height={32} />
                        <Image src="/images/social/linkedin.png" alt="logo" width={32} height={32} />
                        <Image src="/images/social/youtube.png" alt="logo" width={32} height={32} />
                        <Image src="/images/social/instagram.png" alt="logo" width={32} height={32} />
                    </div>

                </div>


            </div>

            <div className={styles.footer}>
                <span>&copy; 2024 Memora</span>
            </div>
       </div> 
    )
}