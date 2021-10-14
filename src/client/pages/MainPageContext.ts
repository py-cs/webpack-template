import { createContext } from 'react';

const defaultContext: Record<string, any> = {};

const MainPageContext = createContext(defaultContext);

export default MainPageContext;
