import React, {createContext,useState} from 'react';

export const AuthContext = createContext({});

export const AuthProvider = props => {
  const [role, setRole] = useState();
  const [categoryData , setCategoryData] = useState()
  const [backgroundColor , setBackgroundColor] = useState('#8A2B34')
  const [textColor, setTextColor] = useState('white')
  const [hightlightedColor, setHightlightedColor] = useState('#FFE600')
  const [backgroundTextColor, setBackgroundTextColor] = useState('#7D141E')
  return (
    <AuthContext.Provider
      value={{
        role,
        setRole,
        categoryData,
        setCategoryData,
        backgroundColor,
        setBackgroundColor,
        textColor,
        setTextColor,
        hightlightedColor,
        setHightlightedColor,
        backgroundTextColor,
        setBackgroundTextColor
      }}>
      {props.children}
    </AuthContext.Provider>
  );
};
