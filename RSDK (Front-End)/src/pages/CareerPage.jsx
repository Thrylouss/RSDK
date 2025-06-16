import React from 'react'
import { useTranslation } from 'react-i18next'
import TitleCareer from "../components/Career/TitleCareer/TitleCareer.jsx";
import AboutCareer from "../components/Career/AboutCareer/AboutCareer.jsx";
import Bid from "../components/Bid/Bid.jsx";

export default function CareerPage() {
    const { t } = useTranslation()

    return (
        <div style={{display: 'flex', flexDirection: 'column', gap: '50px'}}>
            <TitleCareer/>
            <AboutCareer/>
            <Bid/>
        </div>
    )
}
