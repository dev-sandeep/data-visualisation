/**
 * responsible for using the context
 * @author Sandeep G
 * @since 20191117
 */

import { useContext } from 'react'
import { AppContext } from './AppContext'

/**
 * The main function for all the getters and setters 
 */
const UseAppContext = () => {
    const [state, setState] = useContext(AppContext);

    function setData(val, customData) {
        // let data = { ...state, [customData]: val };
        setState(state => ({ ...state, [customData]: val }));
    }

    function getData(customData) {
        return state[customData];
    }

    return {
        setData,
        getData,
        state
    }
}

export default UseAppContext;