import React from 'react'
import { useTranslation } from 'react-i18next'
import Bid from "../components/Bid/Bid.jsx";
import TitleMining from "../components/Mining/TitleMining/TitleMining.jsx";
import InfoMining from "../components/Mining/InfoMining/InfoMining.jsx";
import DirectionsMining from "../components/Mining/DirectionsMining/DirectionsMining.jsx";

export default function MiningPage() {
    const { t } = useTranslation()

    return (
        <div style={{display: 'flex', flexDirection: 'column', gap: '50px'}}>
            <TitleMining/>
            <InfoMining/>
            <DirectionsMining/>
            <Bid/>
        </div>
    )
}
