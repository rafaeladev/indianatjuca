import React, { Suspense } from 'react';

import {
    useHelper,
    OrbitControls,
    TransformControls,
    PerspectiveCamera,
    Environment,
    Lightformer,
    PresentationControls,
    Sparkles,
    Html,
} from '@react-three/drei';

import Hamburger from './3D/Hamburger.jsx';
import Placeholder from './3D/Placeholder.jsx';

const Scene = () => {
    return (
        <>
            <Environment preset='city' />

            <Suspense
                fallback={
                    <Placeholder
                        position-y={3}
                        scale={[2, 3, 2]}
                    />
                }
            >
                <Hamburger scale={0.35} />
            </Suspense>

            <Sparkles
                size={6}
                scale={[4, 2, 4]}
                position-y={1}
                speed={0.5}
                count={50}
            />
        </>
    );
};

export default Scene;
