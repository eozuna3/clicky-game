import React from "react";

const AppContext = React.createContext();

class AppContextProvider {

     constructor(props){}
     state ={
          r: 0,
          g: 0,
          b: 0
     }

     return (
          <AppContext.Provider>
               {this.props.children}
          </AppContext.Provider>
     );
}

export