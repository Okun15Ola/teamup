import React from 'react';
import styles from './HeroSection.module.css';
import { 
  LuSparkles, 
  LuLock, 
  LuAward, 
  LuWallet, 
  LuShield, 
  LuHeadphones 
} from "react-icons/lu";
import FormBox from '@/components/FormBox/FormBox';

import Button from '@/components/Button/Button';


const HeroSection = () => {
  return (
    <section className={styles.hero}>
        <div className={styles.bigcontainer}>
        {/* left */}
        <div>
            <p className={styles.heroparagraphone}>Your trusted project partner</p>
            <h1 className={styles.heroHeading}>Do my Project <br />for me </h1>
            <p className={styles.heroparagrahtwo}>Get a high quality, unique essay delivered on time, stress free!</p>
            <div className={styles.buttonContainer}>
                 <Button
                    text="Ai free content"
                    icon={<LuSparkles />}
                    type="primary"
                    size="md"
                />
                 <Button
                    text="Plagiarism free"
                    icon={<LuLock />}
                    type="primary"
                    size="md"
                />
                 <Button
                    text="Top rated writers"
                    icon={<LuAward />}
                    type="primary"
                    size="md"
                />
                 <Button
                    text="24/7 support"
                    icon={<LuHeadphones />}
                    type="primary"
                    size="md"
                />
                 <Button
                    text="Complete confidentiality"
                    icon={<LuShield />}
                    type="primary"
                    size="md"
                />
                  <Button
                    text="20 day money back"
                    icon={<LuWallet />}
                    type="primary"
                    size="md"
                />
            </div>
        </div>
        {/* right */}
        <div className={styles.rightContainer}>
              <FormBox />
        </div>
    </div>
    </section>
    
  )
}

export default HeroSection