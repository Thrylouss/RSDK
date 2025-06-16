import React from 'react'
import { useTranslation } from 'react-i18next'
import TitleResponsibility from "../components/Responsibility/TitleResponsibility/TitleResponsibility.jsx";
import Bid from "../components/Bid/Bid.jsx";
import AboutResponsibility1 from "../components/Responsibility/AboutResponsibility1/AboutResponsibility1.jsx";
import AboutResponsibility2 from "../components/Responsibility/AboutResponsibility2/AboutResponsibility2.jsx";
import AboutResponsibility3 from "../components/Responsibility/AboutResponsibility3/AboutResponsibility3.jsx";
import AboutResponsibility4 from "../components/Responsibility/AboutResponsibility4/AboutResponsibility4.jsx";
import AboutResponsibility5 from "../components/Responsibility/AboutResponsibility5/AboutResponsibility5.jsx";
import InfoResponsibility from "../components/Responsibility/InfoResponsibility/InfoResponsibility.jsx";
import InfoResponsibility1 from "../components/Responsibility/InfoResponsibility1/InfoResponsibility1.jsx";

export default function ResponsibilityPage() {
    const { t } = useTranslation()

    return (
        <div style={{display: 'flex', flexDirection: 'column', gap: '50px'}}>
            <TitleResponsibility/>
            <InfoResponsibility/>
            <AboutResponsibility1/>
            <AboutResponsibility2/>
            <AboutResponsibility3/>
            <AboutResponsibility4/>
            <AboutResponsibility5/>
            <InfoResponsibility1/>
            <Bid/>
        </div>
    )
}
