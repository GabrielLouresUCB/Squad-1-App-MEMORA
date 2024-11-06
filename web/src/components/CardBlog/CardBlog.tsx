import styles from "@/components/CardBlog/styles.module.css";

import Image from 'next/image';

type cardProps = {
    title: string;
    subtitle: string;
    content: string;
    url: string;
}

export default function CardBlog({title, subtitle, content, url}: cardProps) {
    return (
        <div className={styles.container}>
            <Image src={url} alt="informacoes" width={340} height={350} className="" />

            <div className={styles.title}>
                {title}
            </div>

            <span className={styles.subtitle}>
                {subtitle}
            </span>

            <span className={styles.content}>
                {content}
            </span>

            <div className={styles.footer}>
                <Image src="/images/blog/data.png" alt="informacoes" width={100} height={20} className="" />
                <Image src="/images/blog/comentario.png" alt="informacoes" width={40} height={20} className="" />
            </div>
        </div>
    );
}