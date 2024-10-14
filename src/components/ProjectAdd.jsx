import { useRef } from 'react';

import CustomInput from "./CustomInput"
import Modal from "./Modal"

export default function ProjectAdd({ onAddProject, onCancelAddProject }) {
    const title = useRef();
    const desc = useRef();
    const date = useRef();
    const modal = useRef();

    function handleSave() {
        let titleValue = title.current.value;
        let descValue = desc.current.value;
        let dateValue = date.current.value;

        if (titleValue && descValue && dateValue) {
            onAddProject({
                title: titleValue,
                description: descValue,
                date: dateValue
            })
        } else {
            modal.current.open();
        }
    }

    return (
        <>
            <Modal ref={modal}>
                <p>Oops, something went wrong or invalid data!</p>
            </Modal>
            <div onSubmit={onAddProject} className="w-[55rem] mt-16">
                <div className="control-btns flex justify-end">
                    <button onClick={onCancelAddProject}>Cancel</button>
                    <button onClick={handleSave} className="bg-black text-white py-1 px-4 rounded ml-5">Save</button>
                </div>
                <CustomInput ref={title} type="text">Title</CustomInput>
                <CustomInput ref={desc} textarea="true">Description</CustomInput>
                <CustomInput ref={date} type="date">Due Date</CustomInput>
            </div>
        </>
    )
}