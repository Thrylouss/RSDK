import React from 'react'
import { useTranslation } from 'react-i18next'
import Title from "../components/Title/Title.jsx";
import Directions from "../components/Directions/Directions.jsx";
import AboutCompany from "../components/AboutCompany/AboutCompany.jsx";
import Activity from "../components/Responsibility/AboutResponsibility2/AboutResponsibility2.jsx";
import Partners from "../components/Partners/Partners.jsx";
import Bid from "../components/Bid/Bid.jsx";

export default function HomePage() {
    const { t } = useTranslation()

    return (
        <div style={{display: 'flex', flexDirection: 'column', gap: '50px'}}>
            <Title/>
            <Directions/>
            <AboutCompany/>
            <Activity/>
            <Partners/>
            <Bid/>
        </div>
    )
}
