import styles from './styles.module.css'
import {useTranslation} from "react-i18next";
import explosion from '../../../assets/concurent.jpg'
import createTnt from '../../../assets/motivation.jpg'
import heavyExplosion from '../../../assets/univer.jpg'

function AboutCareer() {
    const { t, i18n } = useTranslation()

    return(
        <div id="directions" className={styles.container}>
            {/*<h1 className={styles.title}>&laquo;REM STROY DOR KOMPLEKT&raquo;</h1>*/}
            <p className={styles.text}>{t('career.details')}</p>
            <p className={styles.text}>{t('career.strive')}</p>
            <p className={styles.text}>{t('career.policy')}</p>
            <div className={styles.blocks}>
                <div className={styles.block}>
                    <img src={explosion} alt=""/>
                    <p>{t('career.option1')}</p>
                    {/*<button>{t('directions.details')}</button>*/}
                </div>
                <div className={styles.block}>
                    <img src={createTnt} alt=""/>
                    <p>{t('career.option2')}</p>
                    {/*<button>{t('directions.details')}</button>*/}
                </div>
                <div className={styles.block}>
                    <img src={heavyExplosion} alt=""/>
                    <p>{t('career.option3')}</p>
                    {/*<button>{t('directions.details')}</button>*/}
                </div>
            </div>
            <p className={styles.text}>{t('career.bid')}</p>
            <p className={styles.text}>{t('career.send')}</p>
        </div>
    )
}

export default AboutCareer