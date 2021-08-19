import { useState } from "react";

export default function useModal(open) {
    const [state, setModal] = useState({open: open})

    const openModal = (props) => {
        setModal({open: true, ...props})
    }

    const closeModal = () => {
        setModal({open: false})
    }

    return [state, {openModal, closeModal}]
}
