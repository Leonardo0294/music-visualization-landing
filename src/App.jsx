import React from 'react';
import lineChartImage from './assets/Grafico-linea.png';
import barChartImage from './assets/Grafico-barra.png';
import plotyChartImage from './assets/GraficoPloty.png';
import './styles.css';

const openImageInNewTab = (imageUrl) => {
    const image = new Image();
    image.src = imageUrl;

    image.onload = () => {
        const width = image.width;
        const height = image.height;

        // Calcula el tamaño de la ventana emergente basado en las dimensiones de la imagen
        const windowWidth = width + 20; // Se agrega un poco de espacio adicional
        const windowHeight = height + 20; // Se agrega un poco de espacio adicional

        // Abre una nueva ventana con la imagen en tamaño completo
        window.open(imageUrl, '_blank', `width=${windowWidth}, height=${windowHeight}`);
    };
};

const App = () => {
    const showLineChart = () => {
        openImageInNewTab(lineChartImage);
    };

    const showBarChart = () => {
        openImageInNewTab(barChartImage);
    };

    const showPlotyChart = () => {
        openImageInNewTab(plotyChartImage);
    };

    return (
        <div style={{ textAlign: 'center' }}>
            <h1>Billboard Hot 100 Charts</h1>
            <p>
                A continuación le presentamos dos gráficos hechos con Google Charts, basados en la lista "Billboard Hot 100 Songs" desde 1958 hasta 2021.
            </p>
            <div style={{ marginBottom: '20px' }}>
                <button onClick={showLineChart}>Mostrar Gráfico de Líneas</button>
                <button onClick={showBarChart}>Mostrar Gráfico de Barras</button>
                {/* Agregar un botón para mostrar la imagen de PlotyChart */}
                <button onClick={showPlotyChart}>Mostrar Gráfico de Ploty</button>
            </div>
        </div>
    );
};

export default App;
