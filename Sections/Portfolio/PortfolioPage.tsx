import React from 'react'
import Port from '../Port'
import Reels from '../Reels'
import CreativePortraits from './CreativePortraits'
import Gallery from './Gallery'


export default function PortfolioPage({ isDarkMode }) {
    return (
        <div>
            <CreativePortraits />
            <Port isDarkMode={isDarkMode} />
            <div className="max-w-[1400px] mx-auto mt-8">
                <Reels isDarkMode={isDarkMode} />
            </div>
            <Gallery />

        </div>
    )
}
