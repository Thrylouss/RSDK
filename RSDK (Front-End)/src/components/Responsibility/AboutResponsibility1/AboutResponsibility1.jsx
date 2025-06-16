import styles from './styles.module.css'
import {useTranslation} from "react-i18next";
import heavyMachine from '../../../assets/heavy-machinery.jpg'

function AboutResponsibility1() {
    const { t, i18n } = useTranslation()

    return(
        <div id='home' className={styles.container}>
            <div className={styles.asideLeft}>
                <img src={heavyMachine} alt=""/>
            </div>
            <div className={styles.asideRight}>
                <h1>{t('responsibilities.option1')}</h1>
                <p dangerouslySetInnerHTML={{__html: t('responsibilities.subOption1')}}/>
            </div>
        </div>
    )
}

export default AboutResponsibility1