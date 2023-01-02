import useModal from "../../hooks/useModal";

interface IProps {
    children: React.ReactNode;
    hide: () => void;
}

const ModalWrapper = ({hide, children}: IProps) => {

    return (
        <><div className="modal-overlay"></div><div className="modalContainer">
            <div className="modal-wrapper">
                <div className="modal">
                    <span className="closeButton" onClick={hide}></span>
                    {children}
                </div>
            </div>
        </div></>
    )
}

export default ModalWrapper;