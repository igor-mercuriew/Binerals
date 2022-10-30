import React, { useState } from "react";

export const ToastContext = React.createContext(null);

export default function ToastContextProvider({ children }) {

    const [contextToast, setContextToast] = useState({
        status: true,
        type: '',
        txt: ''
    });

    return (
        <ToastContext.Provider value={{
            contextToast, setContextToast
        }} >
            {children}
        </ToastContext.Provider>
    );
}