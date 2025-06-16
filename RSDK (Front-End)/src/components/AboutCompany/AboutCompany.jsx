import styles from './styles.module.css'
import {useTranslation} from "react-i18next";
import heavyMachine from '../../assets/heavy-machinery.jpg'

function AboutCompany() {
    const { t, i18n } = useTranslation()

    return(
        <div id='home' className={styles.container}>
            <div className={styles.asideLeft}>
                <img src={heavyMachine} alt=""/>
            </div>
            <div className={styles.asideRight}>
                <h1>{t('header.home')}</h1>
                <h2>{t('about.title')}</h2>
                <p dangerouslySetInnerHTML={{__html: t('about.description')}}/>
            </div>
        </div>
    )
}

export default AboutCompany