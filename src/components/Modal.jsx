import { useRef, useImperativeHandle, forwardRef } from 'react';
import { createPortal } from 'react-dom';

import Button from "./AddProjectBtn";

const Modal = forwardRef(function Modal({ children }, ref) {
    const dialogRef = useRef();

    useImperativeHandle(ref, () => {
        return {
            open() {
                dialogRef.current.showModal()
            }
        }
    })

    return createPortal(
        <dialog ref={dialogRef} className="backdrop:bg-stone-900/90 p-4 rounded-md shadow-md">
            {children}
            <form method="dialog" className="mt-4 text-right">
                <Button>Okay</Button>
            </form>
        </dialog>,
        document.getElementById('modal-root')
    )
});

export default Modal;