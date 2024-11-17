import styles from "@/components/Carrosel/styles.module.css";

import Image from 'next/image';
import ImagemCarrossel from "../ImagemCarrossel/ImagemCarrossel";
import { useEffect, useState } from "react";

export default function Carrosel() {

    const [position, setPosition] = useState(0);
    const [time, setTime] = useState(5000);


    function ImageToLeft() {
        if(position == 0) {
            setPosition(2);
        }
        else {
            setPosition(position - 1);
        }

        
        setTime(5000);
    }

    function ImageToRight() {
        if(position == 2) {
            setPosition(0);
        }
        else {
            setPosition(position + 1);
        }

        setTime(5000);
    }

    function AutoScroll() {
        if(position == 2) {
            setPosition(0);
        }
        else {
            setPosition(position + 1);
        }
        console.log(position);
    }
    useEffect(() => {
        // setTimeout(AutoScroll, time);   
    });


    return (
        <div className={styles.container}>
            <Image src="/images/seta.png" alt="seta" width={36} height={36} className={styles.image} onClick={ImageToLeft} />

            <div className={styles.carousel}>
                <ImagemCarrossel url={`/images/ImagemCarrossel${position + 1}.png`}/>
            </div>

            <Image src="/images/seta.png" alt="seta" width={36} height={36} className={styles.image1} onClick={ImageToRight} />
        </div>
    );
}