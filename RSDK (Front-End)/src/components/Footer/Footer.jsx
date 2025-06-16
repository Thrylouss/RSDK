import { useTranslation } from 'react-i18next'
import styles from './styles.module.css'
import logo from '../../assets/logo.png'
import {useNavigate} from "react-router-dom";

export default function Footer() {
    const { t, i18n } = useTranslation()
    const navigate = useNavigate()

    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng)
    }

    const scrollToSection = (id) => {
        const el = document.getElementById(id)
        if (id !== 'contacts') {
            navigate('/')
        }
        if (el) {
            el.scrollIntoView({ behavior: 'smooth' })
        }
    }

    const onHandleClick = (url) => {
        navigate(url)
        window.scrollTo(0, 0)
    }


    return (
        <footer id='contacts'>
            <div className={styles.container}>
                <div className={styles.blocks}>
                    <div className={styles.block}>
                        <div onClick={()=> onHandleClick('/')} className={styles.containerImage}>
                            <img src={logo} alt=""/>
                        </div>
                        <div>
                            <p>
                                {t('footer.one')}
                            </p>
                        </div>
                    </div>
                    <div className={styles.asideRight}>
                        <div className={styles.block}>
                            <div className={styles.title}>{t('footer.sections')}</div>
                            <div onClick={() => scrollToSection('home')}>{t('footer.aboutCompany')}</div>
                            <div onClick={() => scrollToSection('about')}>{t('footer.activities')}</div>
                            <div onClick={() => onHandleClick('career')}>{t('footer.careers')}</div>
                            <div onClick={() => onHandleClick('responsibility')}>{t('footer.responsibility')}</div>
                        </div>
                        <div className={styles.block}>
                            <div className={styles.title}>{t('footer.contacts')}</div>
                            <div>{t('footer.number')}</div>
                            <div>{t('footer.mail')}</div>
                            <div>{t('footer.address')}</div>
                        </div>
                        <div id="map"></div>
                    </div>
                </div>
            </div>
        </footer>
    )
}
