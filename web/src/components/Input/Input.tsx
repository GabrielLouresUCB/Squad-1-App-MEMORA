import Image from 'next/image';
import styles from "@/components/Input/styles.module.css";

type InputProps = {
    fechaPesquisa:() => void;
}

export function Input({ fechaPesquisa }: InputProps) {

    function FechaPesquisa() {
        // setPesquisa(false);
    }

    return (
        <div className={styles.container}>
            <input className={styles.input} type="text" placeholder="Digite e pressione Enter" />
            <button className={styles.button} onClick={event => fechaPesquisa()}>
                <Image src="/images/X.png" alt="fechar" width={20} height={32} />
            </button>
        </div>
    );
}