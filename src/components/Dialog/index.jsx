import React, { useRef } from "react";

import './dialog.style.css';

export function Dialog() {
    // const dialog = document.querySelector("dialog");

    const dialogRef = useRef(null)

    const openDialog = () => {
        dialogRef.current.showModal();
    };

    const closeDialog = () => {
        dialogRef.current.close();
    };

    return (
        <React.Fragment>
            <dialog ref={dialogRef}>
                <button autoFocus onClick={closeDialog}>Close</button>
                <p>This modal has a groovy backdrop</p>
            </dialog>
            <button onClick={openDialog}>Show the dialog</button>
        </React.Fragment>
    )
}
