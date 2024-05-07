import React from 'react';
import lineChartImage from './assets/Grafico-linea.png';
import barChartImage from './assets/Grafico-barra.png';
import plotlyChartImage from './assets/GraficoPloty.png';
import tortaChartImage from './assets/Grafico-Torta.png';
import promedioChartImage from './assets/promedio-artista.png';
import './styles.css';

const openImageInNewTab = (imageUrl) => {
    const image = new Image();
    image.src = imageUrl;

    image.onload = () => {
        const width = image.width;
        const height = image.height;

        const windowWidth = width + 20;
        const windowHeight = height + 20;

        window.open(imageUrl, '_blank', `width=${windowWidth},height=${windowHeight}`);
    };

    image.onerror = (error) => {
        console.error('Error al cargar la imagen:', error);
    };
};

const App = () => {
    const showLineChart = () => {
        openImageInNewTab(lineChartImage);
    };

    const showBarChart = () => {
        openImageInNewTab(barChartImage);
    };

    const showPlotlyChart = () => {
        openImageInNewTab(plotlyChartImage);
    };

    const showTortaChart = () => {
        openImageInNewTab(tortaChartImage);
    };

    const showArtistPromedio = () => {
        openImageInNewTab(promedioChartImage);
    };

    return (
        <div style={{ textAlign: 'center' }}>
            <h1>Graficos de Billboard Hot 100 Charts</h1>
            <p>
                A continuación le presentamos gráficos basados en la lista "Billboard Hot 100 Songs" desde 1958 hasta 2021.
            </p>
            <div style={{ marginBottom: '20px' }}>
                <button onClick={showLineChart}>Mostrar Gráfico de Líneas</button>
                <button onClick={showBarChart}>Mostrar Gráfico de Barras</button>
                <button onClick={showPlotlyChart}>Mostrar Gráfico de Plotly</button>
                <button onClick={showTortaChart}>Mostrar Gráfico de Torta</button>
                <button onClick={showArtistPromedio}>Mostrar Promedio por Artista</button>
            </div>
        </div>
    );
};

export default App;

