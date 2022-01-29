import { Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faList, faTrash } from '@fortawesome/free-solid-svg-icons';
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { CustomModal } from '../modal/Modal';
import ApiQuery from '../api/ApiQuery';

export function EditControls(props) {
    const { isLoggedIn, isOwner, url, data, endpoint, id } = props;

    const navigate = useNavigate();

    function handleEdit() {
        navigate(url, data);
    }

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [items, setItems] = useState([]);

    const fetchData = async (endpoint, id) => {
        try {
            endpoint === 'menus'
                ? setItems((await ApiQuery.get(`${endpoint}/${id}`)).data.menu.shopList)
                : setItems((await ApiQuery.get(`${endpoint}/${id}`)).data.ingredients);
        } catch (err) {
            if (err.response) {
                console.log(err.response.data);
                console.log(err.response.status);
                console.log(err.response.headers);
            } else {
                console.log(`Error: ${err.message}`);
            }
        }
    };

    useEffect(() => {
        fetchData(endpoint, id);
    }, [endpoint, id]);

    function handleClick() {
        setIsModalOpen(!isModalOpen);
    }

    const downloadTxtFile = () => {
        const element = document.createElement('a');
        const file = new Blob([document.getElementById('shoppingList').innerText], {
            type: 'text/plain',
        });
        element.href = URL.createObjectURL(file);
        element.download = 'myShoppingList.txt';
        document.body.appendChild(element);
        element.click();
    };

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
            <Button variant='outline-primary' onClick={handleClick}>
                <FontAwesomeIcon icon={faList} />
            </Button>
            {isOwner && (
                <Button variant='outline-danger'>
                    <FontAwesomeIcon icon={faTrash} />
                </Button>
            )}
            {isModalOpen && (
                <CustomModal
                    handleClick={handleClick}
                    title={'Shopping list'}
                    buttonDismissText={'Close'}
                    buttonActionCopy={'Save'}
                    downloadTxtFile={downloadTxtFile}
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
        </div>
    );
}
