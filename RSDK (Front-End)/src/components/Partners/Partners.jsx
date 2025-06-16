import styles from './styles.module.css'
import {useTranslation} from "react-i18next";
import logo from "../../assets/logo6.jpg"
import logo1 from "../../assets/logo1.png"
import logo2 from "../../assets/logo2.png"
import logo3 from "../../assets/logo3.png"
import logo5 from "../../assets/logo5.jpg"
import logo6 from "../../assets/logo6.png"
import logo7 from "../../assets/logo7.jpg"

function Partners() {
    const { t, i18n } = useTranslation()

    return (
        <div className={styles.container}>
            <h1>{t('home.partners')}</h1>
            <div className={styles.carouselWrapper}>
                <div className={styles.carousel}>
                    <img src={logo} alt="Partner logo"/>
                    <img src={logo1} alt="Partner logo"/>
                    <img src={logo2} alt="Partner logo"/>
                    <img src={logo3} alt="Partner logo"/>
                    <img src={logo5} alt="Partner logo"/>
                    <img src={logo6} alt="Partner logo"/>
                    <img src={logo7} alt="Partner logo"/>
                </div>
                {/* Дублируем, чтобы бесконечно листалось */}
                <div className={styles.carousel}>
                    <img src={logo} alt="Partner logo"/>
                    <img src={logo1} alt="Partner logo"/>
                    <img src={logo2} alt="Partner logo"/>
                    <img src={logo3} alt="Partner logo"/>
                    <img src={logo5} alt="Partner logo"/>
                    <img src={logo6} alt="Partner logo"/>
                    <img src={logo7} alt="Partner logo"/>
                </div>
            </div>
        </div>

    )
}

export default Partners