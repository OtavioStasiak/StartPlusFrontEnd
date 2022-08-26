import React, {createContext, useContext} from "react";

type ThemeContextData = {
  
};

type ThemeProviderProps = {
  children: React.ReactNode;
};

export const ThemeContext = createContext({} as ThemeContextData);

function ThemeProvider({ children }: ThemeProviderProps) {


    return (
        <ThemeContext.Provider value={{

        }}>
            {children}
        </ThemeContext.Provider>
      )
    }

    function useTheme() {
        const context = useContext(ThemeContext);
      
        return context;
    }

      export {
        ThemeProvider,
        useTheme
      }

