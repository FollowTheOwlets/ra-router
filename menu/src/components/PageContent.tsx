import React from 'react'
import { Route, Routes } from 'react-router-dom';
import { HomePage } from './content/HomePage';
import { DriftPage } from './content/DriftPage';
import { TimeAttackPage } from './content/TimeAttackPage';
import { ForzaPage } from './content/ForzaPage';

export const PageContent = () => {
    return (
        <div className="page">
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/drift" element={<DriftPage />} />
                <Route path="/timeattack" element={<TimeAttackPage />} />
                <Route path="/forza" element={<ForzaPage />} />
            </Routes>
        </div>
    )
}
