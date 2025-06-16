import styles from './styles.module.css'
import {useTranslation} from "react-i18next";
import excavation from '../../../assets/excavation.jpg'

function Activity() {
    const { t, i18n } = useTranslation()

    return(
        <div id='about' className={styles.container}>
            <div className={styles.asideRight}>
                <h1>{t('responsibilities.option4')}</h1>
                <p dangerouslySetInnerHTML={{__html: t('responsibilities.subOption4')}}/>
            </div>
            <div className={styles.asideLeft}>
                <img src={excavation} alt=""/>
            </div>
        </div>
    )
}

export default Activity