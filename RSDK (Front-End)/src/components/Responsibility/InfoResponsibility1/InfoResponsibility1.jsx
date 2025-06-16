import styles from './styles.module.css'
import {useTranslation} from "react-i18next";
import explosion from '../../../assets/explosion.jpg'
import createTnt from '../../../assets/create-tnt.png'
import heavyExplosion from '../../../assets/heavy-excavator.jpg'

function InfoResponsibility1() {
    const { t, i18n } = useTranslation()

    return(
        <div id="directions" className={styles.container}>
            <p className={styles.text}>{t('responsibilities.trust')}</p>
        </div>
    )
}

export default InfoResponsibility1