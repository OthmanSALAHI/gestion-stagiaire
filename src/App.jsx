import React from 'react';
import ListStagiaire from './components/StgList';
import AddStagiaire from './components/AddStg';
import EditStagiaire from './components/EditStg';
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import './styles/App.css';

export default function App() {
    return (
        <BrowserRouter>
            <div className="container">
                <fieldset className="fieldset">
                    <ul className="ul">
                        <li className="li">
                            <Link to="/list" className="link">
                                Accueil
                            </Link>
                        </li>
                        <li className="li">
                            <Link to="/add" className="link">
                                Add Stagiaire
                            </Link>
                        </li>
                    </ul>
                    <Routes>
                        <Route path="/list" element={<ListStagiaire />} />
                        <Route path="/add" element={<AddStagiaire />} />
                        <Route path="/edit/:idStg" element={<EditStagiaire />} />
                    </Routes>
                </fieldset>
            </div>
        </BrowserRouter>
    );
}
