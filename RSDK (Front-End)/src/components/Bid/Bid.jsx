import { useState } from 'react'
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
import styles from './styles.module.css'
import { useTranslation } from "react-i18next";
import axios from "axios";
import API_BASE_URL from "../../api.js";

function Bid() {
    const { t } = useTranslation()
    const [name, setName] = useState('')
    const [phone, setPhone] = useState('')
    const [message, setMessage] = useState('')
    const [loading, setLoading] = useState(false)

    const handleSubmit = async () => {
        if (!name || !phone || !message) return alert("Заполните все поля")

        // Простейшая валидация телефона
        if (phone.length < 10) {
            return alert("Введите корректный номер телефона")
        }

        const botToken = '8042147969:AAE-AnouKYfjM2q5GGu3BK4PiIWm0ilsqYI'
        const chatId = '-1002775129152'
        const text = `📩 Новая заявка с сайта:\n\n👤 Имя: ${name}\n📱 Телефон: ${phone}\n💬 Сообщение: ${message}`

        setLoading(true)
        try {
            const url = `https://api.telegram.org/bot${botToken}/sendMessage`
            const res = await fetch(url, {
                method: "POST",
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    chat_id: chatId,
                    text: text,
                    parse_mode: "HTML"
                })
            })
            if (res.ok) {
                alert("Заявка отправлена!")
                setName('')
                setPhone('')
                setMessage('')
            } else {
                alert("Ошибка при отправке!")
            }
        } catch (error) {
            alert("Ошибка сети!")
        } finally {
            setLoading(false)
        }

        try {
            const response = axios.post(`${API_BASE_URL}bid/`, {
                name: name,
                phone: phone,
                message: message
            })
        }
        catch (error) {
            console.log(error)
        }
    }

    return (
        <div className={styles.container}>
            <div className={styles.background}>
                <div className={styles.titleCont}>
                    <div className={styles.titleText}>
                        <p>{t('home.bid')}</p>
                    </div>
                    <div className={styles.bidForm}>
                        <input
                            type="text"
                            placeholder={t('home.name')}
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />

                        <PhoneInput
                            country={'uz'}
                            value={phone}
                            onChange={(value) => setPhone('+' + value)}
                            placeholder={t('home.phone')}
                            inputClass="phoneInput"
                            containerClass="phoneInputContainer"
                            buttonClass="flag-dropdown"
                            dropdownClass="phoneDropdown"
                        />

                        <textarea
                            placeholder={t('home.message')}
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                        ></textarea>

                        <button onClick={handleSubmit} disabled={loading}>
                            {loading ? "Отправка..." : t('home.send')}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Bid
