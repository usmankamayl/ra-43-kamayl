import React from 'react';
import { Routes, Route, NavLink, Navigate, useSearchParams, BrowserRouter } from "react-router-dom";
import HomePage from "../HomePage";
import DriftPage from "../DriftPage";
import ForzaPage from "../ForzaPage";
import TimeAttackPage from "../TimeAttackPage";

export const Menu = () => {
  const setActive = ({isActive}) => isActive ? 'menu__item menu__item-active' : 'menu__item';
  return (
      <>
        <nav className="menu">
          <NavLink  className={setActive} to="/">Главная</NavLink>
          <NavLink  className={setActive} to="/drift">Дрифт-такси</NavLink>
          <NavLink  className={setActive} to="/timeattack">Time Attack</NavLink>
          <NavLink  className={setActive} to="/forza">Forza Karting</NavLink>
        </nav>
        <div className="page">
            <Routes>
              <Route path="/" exact element={<HomePage/>} />
              <Route path="/drift" element={<DriftPage/>} />
              <Route path="/timeattack" element={<TimeAttackPage/>} />
              <Route path="/forza" element={<ForzaPage/>} />
            </Routes>
        </div>
      </>
  );
}
