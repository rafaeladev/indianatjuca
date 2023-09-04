import React from 'react';
import Collapse from '../components/Collapse.jsx';

const CollapsePage = () => {
    return (
        <div>
            <Collapse
                title={'Arquivos'}
                content={['Natal 2022', 'Natal 2020', 'Natal 2018']}
            />
        </div>
    );
};

export default CollapsePage;
