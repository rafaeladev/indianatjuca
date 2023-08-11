import React from 'react';
import {
    RouterProvider,
    createBrowserRouter,
    createRoutesFromElements,
    Route,
} from 'react-router-dom';

import { LngProvider } from './utils/context.jsx';

import Layout from './components/Layout';

import Home from './pages/Home';
import Historico from './pages/Archives';
import About from './pages/Infos.jsx';
import Natal, { loader as natalPageLoader } from './pages/Natal.jsx';
import NatalLayout from './components/NatalLayout.jsx';
import AppWrapper from './components/AppWrapper.jsx';
import NatalLoading from './components/NatalLoading.jsx';
import Error from './components/Error.jsx';

const App = () => {
    const router = createBrowserRouter(
        createRoutesFromElements(
            <Route
                path='/'
                element={<Layout />}
            >
                <Route element={<AppWrapper />}>
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
                            loader={natalPageLoader}
                            errorElement={<Error />}
                        />
                        <Route
                            path='loading'
                            element={<NatalLoading />}
                        />
                    </Route>

                    <Route
                        path='infos'
                        element={<About />}
                    />
                    <Route
                        path='*'
                        element={<Error />}
                    />
                </Route>
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
