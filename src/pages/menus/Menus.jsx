import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import MenuTile from '../../components/shared/tiles/menuTile/MenuTile';
import Search from '../../components/shared/search/Search';
import ApiQuery from '../../components/shared/ApiClass/ApiClass';

function Menus() {
    const [menus, setMenus] = useState([]);
    const [input, setInput] = useState('');

    const fetchData = async () => {
        try {
            setMenus((await ApiQuery.get('menus')).data);
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
        fetchData();
    }, []);

    const updateInput = async (input) => {
        setInput(input);
    };

    return (
        <Container className='my-4'>
            <Search input={input} onChange={updateInput} />
            <Row xs={1} md={2} xxl={4} className='g-4'>
                {menus
                    .filter((menu) => {
                        if (input === '') {
                            return menu;
                        } else if (menu.title.toLowerCase().includes(input.toLowerCase())) {
                            return menu;
                        }
                    })
                    .map((menu) => {
                        return (
                            <MenuTile
                                title={menu.title}
                                itemTags={menu.tags}
                                fullMenuData={menu.menu}
                                key={menu.id}
                                isFavourite={false}
                                isLoggedIn={false}
                                isOwner={false}
                            />
                        );
                    })}
            </Row>
        </Container>
    );
}

export default Menus;
