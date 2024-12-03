import { useEffect } from 'react';
import './Loading.css';

function Loading({ isLoading, setIsLoading }) {
    // Este componente gere o estado de "loading" e exibe uma animação  de carregamento enquanto está ativo

    useEffect(() => {
        let timeout;
        if (isLoading) {
            // Vai esconder o loading passados 1 segundo
            timeout = setTimeout(() => setIsLoading(false), 1000)
        }

        return () => {
            clearTimeout(timeout);
        }

    }, [isLoading, setIsLoading]); // Executa o efeito sempre que "isLoading" ou "setIsLoading" mudarem

    return (
        <div className="loading-container" />
    )
};

export default Loading;