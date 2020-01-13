import { useContext } from 'react';
import { BaseContext } from './BaseContext'

function UseBaseContext () {

    const [state, setState] = useContext(BaseContext);

    /**
     * used to set the data in the global object
     * @param {*} data data which you want to set 
     * @param {String} customDataObj the name of the data object 
     */
    function setData(customDataObj, data) {
        setState(state => ({
            ...state, [customDataObj]: data
        }));
    }

    /**
     * 
     * @param {String} customDataObj based on the data object return the value 
     * from the global object
     */
    function getData(customDataObj) {
        return state[customDataObj];
    }
    return {
        setData,
        getData,
        state
    }
}


export default UseBaseContext;