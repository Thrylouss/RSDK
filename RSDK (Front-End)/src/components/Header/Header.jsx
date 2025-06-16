import { useTranslation } from 'react-i18next'
import styles from './styles.module.css'
import logo from '../../assets/logo.png'
import eng from '../../assets/eng.png'
import rus from '../../assets/rus.png'
import menu from '../../assets/menu.png'
import {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";

export default function Header() {
    const { t, i18n } = useTranslation()
    const [isOpen, setIsOpen] = useState(false)
    const navigate = useNavigate()

    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng)
    }

    const clickMenu = () => {
        setIsOpen(prev => !prev)
    }

    // запрещаем скролл при открытом меню
    useEffect(() => {
        document.body.style.overflow = isOpen ? 'hidden' : 'auto'
        return () => {
            document.body.style.overflow = 'auto'
        }
    }, [isOpen])

    const scrollToSection = (id) => {
        const el = document.getElementById(id)
        if (id !== 'contacts') {
            navigate('/')
        }
        if (el) {
            el.scrollIntoView({ behavior: 'smooth' })
            setIsOpen(false) // закрыть меню, если оно открыто
        }
    }

    const onHandleClick = (url) => {
        navigate(url)
        setIsOpen(false) // закрыть меню, если оно открыто
    }


    return (
        <header style={{ position: 'relative', zIndex: 1001 }}>
            <div className={styles.container}>
                <div className={styles.headerMain}>
                    {isOpen && (
                        <div className={styles.hiddenMenu}>
                            <p onClick={() => scrollToSection('home')}>{t('header.home')}</p>
                            <p onClick={() => scrollToSection('about')}>{t('header.details')}</p>
                            <p onClick={() => onHandleClick('career')}>{t('header.career')}</p >
                            <p onClick={() => onHandleClick('responsibility')}>{t('header.responsibilities')}</p>
                            <p onClick={() => scrollToSection('contacts')}>{t('header.contacts')}</p>
                        </div>
                    )}
                    <div onClick={() => onHandleClick('/')} className={styles.containerImage}>
                        <img src={logo} alt=""/>
                    </div>
                    <div className={styles.navItems}>
                        <p onClick={() => scrollToSection('home')}>{t('header.home')}</p>
                        <p onClick={() => scrollToSection('about')}>{t('header.details')}</p>
                        <p onClick={() => onHandleClick('career')}>{t('header.career')}</p>
                        <p onClick={() => onHandleClick('responsibility')}>{t('header.responsibilities')}</p>
                        <p onClick={() => scrollToSection('contacts')}>{t('header.contacts')}</p>
                    </div>

                    <div className={styles.asideRight} style={{marginLeft: '1rem'}}>
                        {
                            i18n.language === 'en' ? (
                                <img className={styles.lang} src={eng} alt="" onClick={() => changeLanguage('ru')}/>
                            ) : (
                                <img className={styles.lang} src={rus} alt="" onClick={() => changeLanguage('en')}/>
                            )
                        }
                        <img onClick={clickMenu} className={styles.menu} src={menu} alt=""/>
                    </div>
                </div>
            </div>
        </header>
    )
}
