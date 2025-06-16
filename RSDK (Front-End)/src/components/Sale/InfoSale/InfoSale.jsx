import styles from './styles.module.css'
import {useTranslation} from "react-i18next";

function InfoSale() {
    const { t, i18n } = useTranslation()

    return(
        <div id="directions" className={styles.container}>
            <p className={styles.text}>{t('sale.option1')}</p>
            <p className={styles.text}>{t('sale.option2')}</p>
            <div>
                <ul>
                    <li className={styles.text}>{t('sale.option3')}</li>
                    <li className={styles.text}>{t('sale.option4')}</li>
                    <li className={styles.text}>{t('sale.option5')}</li>
                    <li className={styles.text}>{t('sale.option6')}</li>
                    <li className={styles.text}>{t('sale.option7')}</li>
                </ul>
            </div>
        </div>
    )
}

export default InfoSale