import styles from './styles.module.css'
import {useTranslation} from "react-i18next";

function TitleDrilling() {
    const { t, i18n } = useTranslation()

    return(
        <div className={styles.container}>
            <div className={styles.background}>
                <div className={styles.titleCont}>
                    <div className={styles.line}></div>
                    <div className={styles.titleText}>
                        <p>{t('drilling.title')}</p>
                        <p>REM STROY DOR KOMPLEKT</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TitleDrilling