import React from 'react'
import { useTranslation } from 'react-i18next'
import Bid from "../components/Bid/Bid.jsx";
import TitleDrilling from "../components/Drilling/TitleDrilling/TitleDrilling.jsx";
import InfoDrilling from "../components/Drilling/InfoDrilling/InfoDrilling.jsx";

export default function DrillingPage() {
    const { t } = useTranslation()

    return (
        <div style={{display: 'flex', flexDirection: 'column', gap: '50px'}}>
            <TitleDrilling/>
            <InfoDrilling/>
            <Bid/>
        </div>
    )
}
