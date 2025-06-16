import styles from './styles.module.css'
import {useTranslation} from "react-i18next";
import explosion from '../../assets/explosion.jpg'
import createTnt from '../../assets/create-tnt.png'
import heavyExplosion from '../../assets/heavy-excavator.jpg'
import {useNavigate} from "react-router-dom";

function Directions() {
    const { t, i18n } = useTranslation()
    const navigate = useNavigate()

    const onHandleClick = (url) => {
        navigate(url)
        window.scrollTo(0, 0)
    }

    return(
        <div id="directions" className={styles.container}>
            <h1 className={styles.title}>&laquo;REM STROY DOR KOMPLEKT&raquo;</h1>
            <p className={styles.text}>{t('directions.title')}</p>
            <div className={styles.blocks}>
                <div className={styles.block}>
                    <img src={explosion} alt="Буровзрывные работы в Узбекистане" />
                    <h1 style={{fontWeight: '200', fontSize: '28px'}}>{t('directions.explosion')}</h1>
                    <button onClick={() => onHandleClick('/drilling')}>{t('directions.details')}</button>
                </div>
                <div className={styles.block}>
                    <img src={heavyExplosion} alt="Бурение скважин в Узбекистане"/>
                    <p>{t('directions.construction')}</p>
                    <button onClick={() => onHandleClick('/mining')}>{t('directions.details')}</button>
                </div>
                <div className={styles.block}>
                    <img src={createTnt} alt="Подрывные работы"/>
                    <p>{t('directions.create')}</p>
                    <button onClick={() => onHandleClick('/sale')}>{t('directions.details')}</button>
                </div>
            </div>
        </div>
    )
}

export default Directions