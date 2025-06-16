import styles from './styles.module.css'
import {useTranslation} from "react-i18next";
import park from '../../../assets/park.jpg'
import trucks from '../../../assets/trucks.jpg'
import operators from '../../../assets/image_2025-06-16_10-11-11.png'
import tech from '../../../assets/tech.jpg'
import diagnose from '../../../assets/diagnose.jpg'
import security from '../../../assets/security.jpg'

function DirectionsMining() {
    const { t, i18n } = useTranslation()

    return(
        <div id="directions" className={styles.container}>
            <p className={styles.text}>{t('mining.option2')}</p>
            <div className={styles.blocks}>
                <div className={styles.block}>
                    <img src={park} alt=""/>
                    <p>{t('mining.option3')}</p>
                </div>
                <div className={styles.block}>
                    <img src={trucks} alt=""/>
                    <p>{t('mining.option4')}</p>
                </div>
                <div className={styles.block}>
                    <img className={styles.img} src={operators} alt=""/>
                    <p>{t('mining.option5')}</p>
                </div>

            </div>
            <p className={styles.text}>{t('mining.option6')}</p>
            <div className={styles.blocks}>
                <div className={styles.block}>
                    <img src={tech} alt=""/>
                    <p>{t('mining.option7')}</p>
                </div>
                <div className={styles.block}>
                    <img src={diagnose} alt=""/>
                    <p>{t('mining.option8')}</p>
                </div>
                <div className={styles.block}>
                    <img src={security} alt=""/>
                    <p>{t('mining.option9')}</p>
                </div>
            </div>
            <p className={styles.text}>{t('mining.option10')}</p>
        </div>
    )
}

export default DirectionsMining