import styles from './styles.module.css'
import {useTranslation} from "react-i18next";
import quality from "../../../assets/quality.jpg"
import licence from "../../../assets/licence.png"
import logistic from "../../../assets/logistic.png"

function DirectionsSale() {
    const { t, i18n } = useTranslation()


    return(
        <div id="directions" className={styles.container}>
            <p className={styles.text}>{t('sale.option8')}</p>
            <div className={styles.blocks}>
                <div className={styles.block}>
                    <img src={quality} alt="" />
                    <p>{t('sale.option9')}</p>
                </div>
                <div className={styles.block}>
                    <img src={licence} alt=""/>
                    <p>{t('sale.option10')}</p>
                </div>
                <div className={styles.block}>
                    <img src={logistic} alt=""/>
                    <p>{t('sale.option11')}</p>
                </div>
            </div>
            <p className={styles.text}>{t('sale.option12')}</p>
        </div>
    )
}

export default DirectionsSale