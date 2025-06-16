import styles from './styles.module.css'
import {useTranslation} from "react-i18next";

function InfoDrilling() {
    const { t, i18n } = useTranslation()

    return(
        <div id="directions" className={styles.container}>
            <p className={styles.text}>{t('drilling.option1')}</p>
            <p className={styles.text}>{t('drilling.option2')}</p>
            <p className={styles.text}>{t('drilling.option3')}</p>
            <p className={styles.text}>{t('drilling.option5')}</p>
            <p className={styles.text}>{t('drilling.option6')}</p>
        </div>
    )
}

export default InfoDrilling