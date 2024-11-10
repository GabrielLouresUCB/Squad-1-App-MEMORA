import styles from "@/components/Combobox/styles.module.css";
import Image from 'next/image';
import Link from "next/link";
import { useState } from "react";

export default function Combobox() {

    const [listEmpresa, setListEmpresa] = useState(false);

    function openList() {
        console.log("teste");
        if(listEmpresa == true) {
            setListEmpresa(false);
        }

        else {
            setListEmpresa(true);
        }
    }


    return (
        <div className={styles.container}>
            <div className={styles.title}><Link href={'/'}>Home</Link></div>
            <div className={styles.options}>
                <div className={styles.label}>
                    <span>Empresa</span>
                    <Image src="/images/seta-dropdow.png" alt="seta" width={45} height={45} className={styles.image} onClick={openList} />
                </div>

                {
                    listEmpresa == true ?
                    <ul className={styles.list}>
                        <li><Link href={'historia'} className={styles.listItem}>Nossa História</Link></li>
                        <li><Link href={'estrategico'} className={styles.listItem}>Componentes Estratégicos</Link></li>
                        <li><Link href={'social'} className={styles.listItem}>Responsabilidade Social</Link></li>
                        <li><Link href={'conduta'} className={styles.listItem}>Código de Conduta</Link></li>
                        <li><Link href={'publicacoes'} className={styles.listItem}>Publicações S/A</Link></li>
                    </ul>
                    : null
                }

                <div className={styles.label}>
                    <span><Link href={'contatos'}>Contatos</Link></span>
                </div>
            </div>
        </div>
    );
}