import Image from "next/image";
import BarraSuperior from "@/components/BarraSuperior/BarraSuperior";
import styles from "@/styles/pages.module.css";
import Link from "next/link";

export default function Contatos() {

    function topPage() {
        window.scrollTo(0, 0);
    }

    return (
        <>
            <BarraSuperior />

            <div className={styles.container}>
                
                <Image src="/images/Contato-image.png" alt="seta" width={375} height={201} className={styles.imageContat} />

                <div className={styles.contato}>
                    <span className={styles.titleContat}>Informações Para Contato</span>

                    <hr className={styles.lineContat} />

                    <div className={styles.dataContat}>
                        <p><b>Endereço: </b>SIG Quadra 04, Lote 625 Parte A Brasília, Distrito Federal</p>
                        <p><b>Fone: </b>(61) 3963-0030</p>
                        <p><b>Email: </b>contato@memora.com.br</p>
                    </div>
                </div>

                
                <p className={styles.socialContat}>Siga <strong> <i>nossas redes</i> </strong></p>

                <div className={styles.linksContat}>
                    <Link href={"https://www.facebook.com/MEMORAVEL"}><Image src="/images/social/facebook.png" alt="logo" width={32} height={32} /></Link>
                    <Link href={"https://www.linkedin.com/company/memoraprocessos/"}><Image src="/images/social/linkedin.png" alt="logo" width={32} height={32} /></Link>
                    <Link href={"https://www.youtube.com/channel/UCrlOxLu5EtExkPNl6my2YNw"}><Image src="/images/social/youtube.png" alt="logo" width={32} height={32} /></Link>
                    <Link href={"https://www.instagram.com/memoraprocessosinovadores/"}><Image src="/images/social/instagram.png" alt="logo" width={32} height={32} /></Link>
                    
                </div>

                <div className={styles.imageContainer}>
                    <Image src="/images/seta.png" alt="seta" width={36} height={36} className={styles.image} onClick={topPage} />
                </div>
            </div>
            
        </>
    );
}