import styles from './styles.module.css'
import {useTranslation} from "react-i18next";
import heavyMachine from '../../../assets/heavy-machinery.jpg'

function AboutResponsibility3() {
    const { t, i18n } = useTranslation()

    return(
        <div id='home' className={styles.container}>
            <div className={styles.asideLeft}>
                <img src={heavyMachine} alt=""/>
            </div>
            <div className={styles.asideRight}>
                <h1>{t('responsibilities.option3')}</h1>
                <p dangerouslySetInnerHTML={{__html: t('responsibilities.subOption3')}}/>
            </div>
        </div>
    )
}

export default AboutResponsibility3