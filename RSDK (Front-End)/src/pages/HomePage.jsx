import React from 'react'
import { useTranslation } from 'react-i18next'

export default function HomePage() {
    const { t } = useTranslation()

    return (
        <div>
            <h1>{t('home.title')}</h1>
            <p>{t('home.details')}</p>
        </div>
    )
}
