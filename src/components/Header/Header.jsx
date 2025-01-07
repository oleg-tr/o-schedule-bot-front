import React from 'react';
import Button from "../Button/Button";
import {useTelegram} from "../../hooks/useTelegram";
import './Header.css';

const Header = () => {
    const {user, onClose} = useTelegram();

    return (
        <div className={'header'}>
            <Button onClick={onClose}>Открыть</Button>
            <a href="https://azureserv.com/results?search_query=dfs+advert+2024&__cpo=aHR0cHM6Ly93d3cueW91dHViZS5jb20" target="_blank" rel="noopener noreferrer"> youtube</a>
            <span className={'username'}>
                {user?.username}
            </span>
        </div>
    );
};

export default Header;