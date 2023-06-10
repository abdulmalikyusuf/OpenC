
import React from "react";
import { Line, Bar, Doughnut } from "react-chartjs-2"
import {
	Chart as ChartJS,
	CategoryScale,
	LinearScale,
  BarElement,
	PointElement,
	LineElement,
  ArcElement,
	Title,
	Tooltip,
	Legend,
} from "chart.js";

import { lgas } from "../data/lgasD"

ChartJS.register(
	CategoryScale,
	LinearScale,
	PointElement,
	LineElement,
  BarElement,
  ArcElement,
	Title,
	Tooltip,
	Legend,
);

// "#93a5be"//"#8965e0"//"#4c5680""#4c5680"

export const ProjectChart = ({chartData}) => {
	const data = {
		labels: chartData.labels,
		datasets: chartData.data.map(data => {
			return {
				label: data.label,
				data: data.series,
				fill:false,
				backgroundColor: data.backgroundColor
			}
		})
	};
	const options = {
		scales: {
		y: {
			min: 0,
			max: 100,
			grid: {display: false}
		},
		x: {
			grid: {display: false}
		}
		},
		responsive: true,
		plugins: {
		legend: {
			position: "top",
			labels: {
			pointStyle: "circle",
			usePointStyle: true,
			// pointStyleWidth: 10
			}
		},
		title: {
			display: true,
			fontSize: 18,
			position: "top",
			// text: `Total Projects/LGA against Monitored Projects`
		},
		},
		pointBackgroundColor: "black",
		};

	return (
		<Bar data={data} options={options}/>
	);
};


export const PieChart = (props) => {
  const { series = [], labels=[], colors=[] } = props;
  
  const data = {
    labels,
    datasets: [{
      data: series,
      backgroundColor: colors
    }],
  }
  const options = {
		responsive: true,
		plugins: {
			legend: {display: false, position: "top"},
		},
	};

  return (
    <Doughnut data={data} options={options}/>
  );
};

export const BarChart = (props) => {
  const { labels = [], series = [] } = props;

  const data = {
    labels: labels,
    datasets: series.map((serie, index) => {
      return {
        label: index === 0 ? "Completed Projects":"All Projects",
        data: serie,
        fill:false,
        barThickness: 5,
        // categoryPercentage: 0.7,
        // barPercentage: 0.5,
        backgroundColor: index === 0 ? "Blue":"Red"
      }
    })
  };
  const options = {
		responsive: true,
		plugins: {
			legend: {display: false, position: "top"},
			title: {display: false, text: `Sales Chart`},
		},
	};

  return (
    <Bar data={data} options={options}/>
  );
};

export const LineChart = (props) => {
  const { labels = [], series = [] } = props;

  const data = {
    labels: labels,
    datasets: series.map((serie, index) => {
      return {
        label: index === 0 ? "Completed Projects":"All Projects",
        data: serie,
        fill:false,
        barThickness: 5,
        lineTension: 0.5,
        // categoryPercentage: 0.7,
        // barPercentage: 0.5,
        backgroundColor: index === 0 ? "#1B998B":"#C96480"
      }
    })
  };
  const options = {
		responsive: true,
		plugins: {
      legend: {
        position: "top",
        labels: {
          pointStyle: "circle",
          usePointStyle: true,
          // pointStyleWidth: 10
        }
      },
    },
	};

  return (
    <Line data={data} options={options}/>
  );
};

export const AreaChart = (props) => {
  const { labels, series, title } = props

  const data = {
    labels: labels, //.map(label => label.length > 20 ? '...'+label.slice(label.length-20, label.length): label),
    datasets: [{
      label: title,
      data: series,
      fill: 'origin',
      borderColor: 'rgb(53, 162, 235)',
      backgroundColor: 'rgba(53, 162, 235, 0.5)',
      lineTension: 0.5,
    },
  ]
  };

  return (
    <Line data={data} options={options}/>
  );
};


export const options = {
  responsive: true,
  plugins: {
    legend: {
      display: false,
      position: "bottom"
    },
    title: {
      display: false,
      fontSize: 18,
      position: "top",
      text: `Total Projects/LGA`
    },
  },
  pointBackgroundColor: "black",
  scales: { 
    y: {
      grid: {
        display: true
      },
      ticks: { 
        callback: (value, index, ticks) => {
          return value //formatDigits(value)
          }
        },
    x: { 
      grid: {
        display: true
      },
      ticks: {
        maxRotation: 80,
        callback: function(value, index) {
        const tick = this.getLabelForValue(value)
        const tickLength = tick.length
        return tickLength>10 ? '...' + tick.substring(tickLength-10, tickLength): tick
      }}
  }}
}};