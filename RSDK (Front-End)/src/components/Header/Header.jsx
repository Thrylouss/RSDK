import { useTranslation } from 'react-i18next'
import styles from './styles.module.css'
import logo from '../../assets/logo.png'

export default function Header() {
    const { t, i18n } = useTranslation()

    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng)
    }

    return (
        <header>
            <div className={styles.container}>
                <div className={styles.containerImage}>
                    <img src={logo} alt=""/>
                </div>
                <p>{t('header.home')}</p>
                <p>{t('header.details')}</p>
                <p>{t('header.career')}</p>
                <p>{t('header.responsibilities')}</p>
                <p>{t('header.contacts')}</p>

                <div style={{marginLeft: '1rem'}}>
                    <button onClick={() => changeLanguage('en')}>EN</button>
                    <button onClick={() => changeLanguage('ru')}>RU</button>
                </div>
            </div>
        </header>
    )
}
