import styles from "@/components/Solucoes/styles.module.css";

type solucoesProps = {
    description: string;
    title: string;
}

export default function Solucoes({title, description}: solucoesProps) {
    return (
        <div className={styles.container}>
            <span className={styles.title}>{title}</span>
            <span className={styles.description}>{description}</span>
            <button className={styles.button}>Ver Todos Os Serviços</button>
        </div>
    );
}