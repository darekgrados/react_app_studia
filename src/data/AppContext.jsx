import { createContext } from "react";

const AppContext = createContext({
    items: [],
    dispatch: null,
    //dispatch: () => {},
});

export default AppContext;