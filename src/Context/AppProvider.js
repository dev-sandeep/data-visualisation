import React from 'react'
// import Axios from 'axios'
import {AppContext, AppContextProvider} from './AppContext'

class AppProvider extends React.Component{
    
    render(){
        return(
            <AppContextProvider value={this.state}>
                {this.props.children}
            </AppContextProvider>
        );
    }
}

export default AppProvider;