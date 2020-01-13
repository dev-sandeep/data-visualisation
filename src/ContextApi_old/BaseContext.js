import React, { useState } from 'react';

const BaseContext = React.createContext([{}, () => { }]);

const BaseContextProvider = (props) => {
    const [state, setState] = useState();

    return (
        <BaseContext.Provider value={[state, setState]}>
            {props.children}
        </BaseContext.Provider>
    );
};

export { BaseContext, BaseContextProvider };