import { useState } from 'react';
import Image from 'next/image';

import { Input } from "@/components/Input/Input";


import styles from "@/components/BarraSuperior/styles.module.css";
import Combobox from '../Combobox/combobox';


export default function BarraSuperior() {
    const [pesquisa, setPesquisa] = useState(false);
    const [menu, setMenu] = useState(false);

    function AbrePesquisa() {
        console.log("ok");

        if(pesquisa == false) {
            setPesquisa(true);
        }
        else {
            setPesquisa(false);
        }
    }

    function AbreMenu() {
        if(menu == false) {
            setMenu(true);
        }
        else {
            setMenu(false);
        }
    }

    return (
        <div className={styles.container}> 
            <Image src="/images/logo-min.png" alt="logo" width={139} height={26} />
            <div className={styles.buttons}>
                <button className={styles.button} onClick={AbreMenu}>
                    <Image src="/images/sanduiche.png" alt="sanduiche" width={30} height={32} />
                </button>
                <button className={styles.button} onClick={AbrePesquisa}>
                    <Image src="/images/lupa.png" alt="lupa" width={26} height={30} />
                </button>
            </div>

            {
                pesquisa == true ? <Input /> : null
            }

            {
                menu == true ? <Combobox /> : null
            }
            
        </div>
    );
}