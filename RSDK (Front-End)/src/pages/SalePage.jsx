import React from 'react'
import { useTranslation } from 'react-i18next'
import Bid from "../components/Bid/Bid.jsx";
import TitleSale from "../components/Sale/TitleSale/TitleSale.jsx";
import InfoSale from "../components/Sale/InfoSale/InfoSale.jsx";
import DirectionsSale from "../components/Sale/DirectionsSale/DirectionsSale.jsx";

export default function SalePage() {
    const { t } = useTranslation()

    return (
        <div style={{display: 'flex', flexDirection: 'column', gap: '50px'}}>
            <TitleSale/>
            <InfoSale/>
            <DirectionsSale/>
            <Bid/>
        </div>
    )
}
