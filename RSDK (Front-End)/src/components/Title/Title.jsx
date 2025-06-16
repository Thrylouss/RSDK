import styles from './styles.module.css'
import {useTranslation} from "react-i18next";

function Title() {
    const { t, i18n } = useTranslation()

    const scrollToSection = (id) => {
        const el = document.getElementById(id)
        if (el) {
            el.scrollIntoView({ behavior: 'smooth' })
        }
    }

    return(
        <div className={styles.container}>
            <div className={styles.background}>
                <div className={styles.titleCont}>
                    <div className={styles.line}></div>
                    <div className={styles.titleText}>
                        <p>{t('home.title')}</p>
                        <p>REM STROY DOR KOMPLEKT</p>
                        <p onClick={() => scrollToSection('home')}>{t('header.home')}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Title