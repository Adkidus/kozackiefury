import styled from "styled-components";
import {useContext} from 'react'
import { ModalContext } from "../Providers/ModalContext";

export default function ModalWindow(){
    const {modalDetail, setModalDetail} = useContext(ModalContext);
    const closeModal = () => { 
        setModalDetail({
            display: false,
            content: null
        })
    }
    return <div>
        {
            modalDetail.display ? 
            <Modal>
                <div className="content">
                    <span className="close" onClick={closeModal}>&times;</span>
                    {modalDetail.content}
                </div>
            </Modal>:''
        }
    </div>
}

const Modal = styled.div`
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    z-index: 1000;
    overflow: auto;
    background-color: rgba(0,0,0,0.9);
    color: #fff;

    .content{
        position: relative;
        background-color: #212121;
        margin: 2rem;
        padding: 2rem;
        border-radius: 0.25rem;
        width: 50%;
        max-height: 75%;
        overflow: auto;
        box-shadow: 0 4px 20px rgba(0,0,0,0.4);
    }

    .close{
        position: absolute;
        top: 0;
        right: 0;
        font-size: 2.5rem;
        font-weight: bold;
        padding: 0 0.75rem;
        color: #fff;
        cursor: pointer;
        user-select: none;
    }

    @media screen and (max-width: 1200px) {
        .content{
            width: 70%;
        }
    }

    @media screen and (max-width: 900px) {
        .content{
            width: 90%;
        }
    }
`;