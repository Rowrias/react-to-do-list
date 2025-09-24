import React, { useEffect, useRef } from "react";

import './dialog.style.css';
import { IconClose } from "../icons";

export function Dialog({ isOpen, onClose, children }) {
    // const dialog = document.querySelector("dialog");

    const dialogRef = useRef(null)

    useEffect(() => {
        if (isOpen) {
            openDialog()
        } else {
            closeDialog()
        }
    }, [isOpen])

    const openDialog = () => {
        dialogRef.current.showModal();
    };

    const closeDialog = () => {
        dialogRef.current.close();
    };

    return (
        <React.Fragment>
            <dialog ref={dialogRef} className="dialog">
                <div className="btn-close-wrapper">
                    <button
                        autoFocus
                        onClick={onClose}
                        className="btn-close"
                    >
                        <IconClose />
                    </button>
                </div>
                <div className="body">
                    {children}
                </div>
            </dialog>
        </React.Fragment>
    )
}
