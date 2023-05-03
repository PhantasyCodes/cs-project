import React, { useState, useCallback, useEffect } from 'react'
import { csv, scaleLinear, max, scaleBand } from 'd3'
import Navbar from '../components/Navbar'
import Header from '../components/Header'

import './Home.css'

const csvurl = "https://gist.githubusercontent.com/curran/0ac4077c7fc6390f5dd33bf5c06cb5ff/raw/605c54080c7a93a417a3cea93fd52e7550e76500/UN_Population_2019.csv"

const width = 960
const height = 500
const margin = { top: 20, right: 20, bottom: 20, left: 20 }


const Home = () => {
  const [data, setData] = useState(null)

  useEffect(() => {
    const row = (d) => {
      d.Population = +d['2020'];
      return d;
    };
    csv(csvurl, row).then((data) => {
      setData(data.slice(0, 10));
    });
  }, [])

  const innerHeight = height - margin.top - margin.bottom
  const innerWidth = width - margin.left - margin.right

  const yScale = data && scaleBand()
    .domain(data.map((d) => d.Country))
    .range([0, innerHeight]);

  const xScale = data && scaleLinear()
    .domain([0, max(data, (d) => d.Population)])
    .range([0, innerWidth]);

  return (
    <>
      <Navbar />
      <Header />
      <div className="home">
        <svg width={width} height={height}>
          <g transform={`translate(${margin.left},${margin.top})`}>
            {xScale.ticks().map(tickValue => (
              <line 
                x1={xScale(tickValue)} 
                y1={0}
                x2={xScale(tickValue)} 
                y2={innerHeight} 
                stroke="black"
              />
            ))}
            {data && data.map((d) => (
              <rect
                key={d.Country}
                y={yScale(d.Country)}
                width={xScale(d.Population)}
                height={yScale.bandwidth()}
              />
            ))}
          </g>
        </svg>
        
      </div>
    </>
  )
}

export default Home