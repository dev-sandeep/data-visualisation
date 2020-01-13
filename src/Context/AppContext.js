import React, { useState } from 'react'
import App from '../App';
const AppContext = React.createContext([{}, () => { }]);

const AppContextProvider = (props) => {
    const [state, setState] = useState({
<<<<<<< HEAD
        movies: [],//all the movies
        show: [],//currently shown movies
        filter: [],
        search: '',
=======
        wikimedia: []
>>>>>>> initial plot
    });

    return (
        <AppContext.Provider value={[state, setState]}>
            {props.children}
        </AppContext.Provider>
    );
};

export { AppContext, AppContextProvider };
// export default AppContext;