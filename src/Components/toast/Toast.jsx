import './Toast.scss';
import ReactDOM from 'react-dom';
import { useContext, useEffect } from 'react';
import { ToastContext } from '../../contexts/toastContext';

export default function Toast() {

    const { contextToast, setContextToast } = useContext(ToastContext);
    const portal = document.createElement('div');

    useEffect(() => {
        if (contextToast.status) {
            document.body.appendChild(portal)

            setTimeout(() => {
                document.body.removeChild(portal);
                setContextToast({ ...contextToast, status: false });
            }, 5000);
        }
    }, [portal, contextToast])

    return ReactDOM.createPortal(
        <div className={`toast show ${contextToast.type}`}>
            {contextToast.txt}
        </div>,
        portal
    )
}