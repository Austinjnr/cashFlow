import React from "react";
import {  Pie } from "react-chartjs-2";
import { Chart as ChartJS } from 'chart.js/auto';

const Chart = ({PieChart}) => {
    return (  
        <section>
            <Pie data={PieChart}/>
        </section>
    );
}
 
export default Chart;