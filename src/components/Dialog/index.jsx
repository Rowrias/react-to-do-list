import React from "react";

import './dialog.style.css';

export function Dialog() {
    const dialog = document.querySelector("dialog");
    const showButton = document.querySelector("dialog + button");
    const closeButton = document.querySelector("dialog button");

    showButton.addEventListner("click", () => {
        dialog.showModal();
    });

    closeButton.addEventListener("click", () => {
        dialog.close();
    });

    return (
        <React.Fragment>
            <dialog>
                <button>Close</button>
                <p>This modalhas a groovy backdrop</p>
            </dialog>
            <button>Show the dialog</button>
        </React.Fragment>
    )
}
