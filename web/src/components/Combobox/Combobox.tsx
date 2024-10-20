import styles from "@/components/Combobox/styles.module.css";
import Image from 'next/image';
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
            <div className={styles.title}>Home</div>
            <div className={styles.options}>
                <div className={styles.label}>
                    <span>Empresa</span>
                    <Image src="/images/seta.png" alt="seta" width={36} height={36} className={styles.image} onClick={openList} />
                </div>

                {
                    listEmpresa == true ?
                    <ul className={styles.list}>
                        <li>Nossa História</li>
                        <li>Componentes Estratégicos</li>
                        <li>Responsabilidade Social</li>
                        <li>Código de Conduta</li>
                        <li>Publicações S/A</li>
                    </ul>
                    : null
                }

                <div className={styles.label}>
                    <span>Contatos</span>
                    <Image src="/images/seta.png" alt="seta" width={36} height={36} className={styles.image} onClick={( ) => {console.log("Funciona!!!")}} />
                </div>
            </div>

            
        </div>
    );
}