import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import { CustomModal } from '../modal/Modal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faList, faTrash } from '@fortawesome/free-solid-svg-icons';
import ApiQuery from '../api/ApiQuery';
import { ConfirmRemovalModal } from '../../ConfirmRemovalModal/ConfirmRemovalModal';

export function EditControls(props) {
    const { isLoggedIn, isOwner, url, data, endpoint, id, handleSave } = props;

    const [isShoppingModalOpen, setIsShoppingModalOpen] = useState(false);
    const [isRemovalModalOpen, setRemovalModalOpen] = useState(false);
    const [items, setItems] = useState([]);

    const inputEl = useRef(null);

    function onRemovalModalClick() {
        setRemovalModalOpen(!isRemovalModalOpen);
    }
    // function removeItem() {
    //     inputEl.current.closest('.justify-content-center').remove();
    //     setRemovalModalOpen(!isRemovalModalOpen);
    // }

    const navigate = useNavigate();

    function handleEdit() {
        navigate(url, data);
    }

    const fetchData = async (endpoint, id) => {
        try {
            endpoint === 'menus'
                ? setItems((await ApiQuery.get(`${endpoint}/${id}`)).data.menu.shopList)
                : setItems((await ApiQuery.get(`${endpoint}/${id}`)).data.ingredients);
        } catch (err) {
            if (err.response) {
                // console.log(err.response.data);
                // console.log(err.response.status);
                // console.log(err.response.headers);
            } else {
                console.log(`Error: ${err.message}`);
            }
        }
    };

    useEffect(() => {
        fetchData(endpoint, id);
    }, [endpoint, id]);

    function onShoppingModalClick() {
        setIsShoppingModalOpen(!isShoppingModalOpen);
    }

    const downloadTextFile = () => {
        const element = document.createElement('a');
        const file = new Blob([document.getElementById('shoppingList').innerText], {
            type: 'text/plain',
        });
        element.href = URL.createObjectURL(file);
        element.download = 'myShoppingList.txt';
        document.body.appendChild(element);
        element.click();
    };

    function onShoppingModalSave() {
        downloadTextFile();
    }

    return (
        <div
            className={`d-flex ${
                isLoggedIn && isOwner ? 'justify-content-around' : 'justify-content-end'
            } mt-1`}
        >
            {isOwner && (
                <Button variant='outline-info' onClick={handleEdit}>
                    <FontAwesomeIcon icon={faEdit} />
                </Button>
            )}
            <Button variant='outline-primary' onClick={onShoppingModalClick}>
                <FontAwesomeIcon icon={faList} />
            </Button>
            {isOwner && (
                <Button variant='outline-danger' onClick={onRemovalModalClick} ref={inputEl}>
                    <FontAwesomeIcon icon={faTrash} />
                </Button>
            )}
            {isShoppingModalOpen && (
                <CustomModal
                    id={id}
                    title={'Shopping list'}
                    buttonDismissText={'Close'}
                    buttonActionCopy={'Save'}
                    closeModal={onShoppingModalClick}
                    handleSave={onShoppingModalSave}
                >
                    <ul id='shoppingList'>
                        {items.map((item, itemIndex) => {
                            return (
                                <li key={itemIndex}>
                                    {item.title} - {item.quantity.number} {item.quantity.unit}
                                </li>
                            );
                        })}
                    </ul>
                </CustomModal>
            )}
            {isRemovalModalOpen && (
                <ConfirmRemovalModal
                    closeModal={onRemovalModalClick}
                    handleSave={handleSave}
                    id={id}
                ></ConfirmRemovalModal>
            )}
        </div>
    );
}
