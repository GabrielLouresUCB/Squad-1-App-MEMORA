import Image from 'next/image';
import styles from "@/components/ImagemCarrossel/styles.module.css";

type ImageCarouselProps = {
    url: string;
}

export default function ImagemCarrossel({url}: ImageCarouselProps) {
    return (
        <Image src={url} alt="seta" width={375} height={375} className={styles.imageCarousel} />
    );
}