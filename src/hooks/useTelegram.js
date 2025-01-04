import { useEffect, useState } from 'react';

export function useTelegram() {
    const [tg, setTg] = useState(null);

    useEffect(() => {
        if (window.Telegram) {
            setTg(window.Telegram.WebApp);
        } else {
            console.error('Telegram WebApp is not available');
        }
    }, []);

    const onClose = () => {
        tg?.close();
    }

    const onToggleButton = () => {
        if (tg?.MainButton.isVisible) {
            tg.MainButton.hide();
        } else {
            tg.MainButton.show();
        }
    }

    return {
        onClose,
        onToggleButton,
        tg,
        user: tg?.initDataUnsafe?.user,
        queryId: tg?.initDataUnsafe?.query_id,
    }
}