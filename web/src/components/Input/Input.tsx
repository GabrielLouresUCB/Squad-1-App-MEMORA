import Image from 'next/image';
import styles from "@/components/Input/styles.module.css";
import { useState } from 'react';


export function Input() {
    const [texto, setTexto] = useState("");
    
    function LimpaInput() {
        console.log('ok');
        // const inputValue = document.getElementById("input");

        if(texto != null) {
            // inputValue.innerHTML = "";
            setTexto("");
        }
    }

    return (
        <div className={styles.container}>
            <input className={styles.input} type="text" placeholder="Digite e pressione Enter" value={texto} onChange={(event) => setTexto(event.target.value)} />
            <button className={styles.button} onClick={LimpaInput}>
                <Image src="/images/X.png" alt="fechar" width={20} height={32} />
            </button>
        </div>
    );
}