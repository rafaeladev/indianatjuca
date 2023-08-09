import React from 'react';
import {
    RouterProvider,
    createHashRouter,
    createRoutesFromElements,
    HashRouter,
    Routes,
    Route,
} from 'react-router-dom';

import { LngProvider } from './utils/context.jsx';

import Layout from './components/Layout';

import Home from './pages/Home';
import Historico from './pages/Archives';
import About from './pages/Infos.jsx';
import Natal from './pages/Natal.jsx';
import Natal2018 from './pages/Natal2018.jsx';
import Natal2019 from './pages/Natal2019.jsx';
import Natal2022 from './pages/Natal2022.jsx';
import NatalLayout from './components/NatalLayout.jsx';

const App = () => {
    const router = createHashRouter(
        createRoutesFromElements(
            <Route
                path='/'
                element={<Layout />}
            >
                <Route
                    index
                    element={<Home />}
                />
                <Route
                    path='natal'
                    element={<Natal />}
                />
                <Route
                    path='natal'
                    element={<NatalLayout />}
                >
                    <Route
                        index
                        element={<Historico />}
                    />
                    <Route
                        path=':id'
                        element={<Natal />}
                    />
                </Route>

                <Route
                    path='infos'
                    element={<About />}
                />
            </Route>
        )
    );

    return (
        <LngProvider>
            <RouterProvider router={router} />
        </LngProvider>
    );
};

export default App;
