import React from 'react'

const PageContext = React.createContext({
    navActive: true,
    setNavState: () => {}
});

export const PageProvider = PageContext.Provider;
export const PageConsumer = PageContext.Consumer;