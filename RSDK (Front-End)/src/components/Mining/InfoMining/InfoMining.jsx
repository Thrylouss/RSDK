import styles from './styles.module.css'
import {useTranslation} from "react-i18next";

function InfoMining() {
    const { t, i18n } = useTranslation()

    return(
        <div id="directions" className={styles.container}>
            <p className={styles.text}>{t('mining.option1')}</p>
        </div>
    )
}

export default InfoMining