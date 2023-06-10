import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top',
    },
    title: {
      display: true,
      text: 'Gráfica de ventas y visitas',
    },
  },
};

// Datos ficticios de ventas
const labels = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio'];

const generateRandomSalesData = () => {
  const data = [];
  for (let i = 0; i < labels.length; i++) {
    const randomSale = Math.floor(Math.random() * 500);
    data.push(randomSale);
  }
  return data;
};

export const data = {
  labels,
  datasets: [
    {
      label: 'Visitas a la página',
      data: [500, 430, 350, 510, 370, 650, 600],
      borderColor: 'rgb(255, 99, 132)',
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
    },
    {
      label: 'Ventas',
      data: [200, 300, 200, 400, 257, 360, 720],
      borderColor: 'rgb(53, 162, 235)',
      backgroundColor: 'rgba(53, 162, 235, 0.5)',
    },
  ],
};

export function LineChart() {
  return (
    <div className="col-lg-6 mb-4">
      <div className="card shadow mb-4">
        <Line options={options} data={data} />
      </div>
    </div>
  );
}