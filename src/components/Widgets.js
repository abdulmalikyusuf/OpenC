import React from "react";
import { UserCircleIcon, PaperClipIcon } from "@heroicons/react/20/solid";
import GoogleMapReact from 'google-map-react';

import { CircleChart, BarChart, ProjectChart, LineChart } from "./Charts";
import ProfileCover from "../assets/img/profile-cover.jpg";
import Marker from "./Marker";
import { lgas } from "../data/lgas";


export const ProfileCardWidget = () => {
  return (
    <div className="bg-white rounded-2xl flex flex-col justify-center">
      <div className="">
        <img src={ProfileCover} alt="Cover for profile" className="object-cover rounded-t-2xl"/>
      </div>
      <div className="flex flex-col items-center -translate-y-20">
        <UserCircleIcon className="w-48" />
        <div className="text-center">
          <h5 className="h5">Admin User</h5>
          <h6 className="h6">Project Supervisor</h6>
          <p className="font-thin">Borno, Nigeria</p>
        </div>
      </div>
    </div>
  );
};

export const ChoosePhotoWidget = (props) => {
  const { title, photo } = props;

	return (
		<div className="bg-white shadow-sm rounded-2xl p-5 overflow-hidden">
			<h4 className="h4">{title}</h4>
			<div className="grid grid-cols-3 gap-3">
				<div className="col-span-1">
					<img src={ProfileCover} alt="Cover for profile" className="object-cover h-full w-full"/>
				</div>
				<div className="col-span-2 flex lg:justify-center">
					<div className="">
						<PaperClipIcon className="h-10" />
						<input type="file" />
						<div className="font-medium">Choose Image</div>
						<div className="text-xs">JPG, GIF or PNG. Max size of 800K</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export const CardWidget = (props) => {
  const { icon, title, value} = props;

	return (
		<div className="bg-white shadow-md p-4 rounded-lg h-full">
			<div className="xl:flex items-center justify-between">
				<div className="xl:w-1/3 flex items-center">
					<div className="rounded">{icon}</div>
					<div className="sm:hidden ml-10 md:ml-4">
						<h3 className="h3">{title}</h3>
						<h5 className="h5">{value} Projects</h5>
					</div>
				</div>
				<div className="xl:w-2/3">
					<div className="hidden sm:block">
						<h4 className="h4">{title}</h4>
						<h5 className="h5">{value} Projects</h5>
					</div>
				</div>
			</div>
		</div>
	);
};

export const PieChartWidget = (props) => {
  const { title, data = [] } = props;
  const series = data.map(d => d.value);
  const labels = data.map(d => d.label);
  const colors = data.map(d => d.chartColor);

  return (
    <div className="">
        <h5 className="h5">{title}</h5>
		    <hr/>
        <div className="flex items-center space-x-4 mt-8">
			<div className="w-2/3">
				<CircleChart series={series} labels={labels} colors={colors}/>
			</div>
			<div className="w-1/3">
				{data.map(d => (
				<h6 key={`circle-element-${d.id}`} className="flex items-center space-x-2 text-gray-500 h6">
					<d.icon className={``} />
					<span>{`${d.code} `}{`${d.value}%`}</span>
				</h6>
				))}
			</div>
        </div>
    </div>
  );
};

export const BarChartWidget = (props) => {
  const { title, value, data = [] } = props;
  const labels = ['JRE', 'MMC', 'BIU', 'BAM', 'BGA', 'DMB'];
  const series = data.map(d => d.value);

  return (
    <div border="light" className="shadow-sm">
      <div className="d-flex flex-row align-items-center flex-0 border-bottom">
        <div className="d-block">
          <h6 className="fw-normal text-gray mb-2">{title}</h6>
          {/* <h3>N{value}</h3> */}
        </div>
        <div className="d-block ms-auto">
          {data.map(d => (
            <div key={`bar-element-${d.id}`} className="d-flex align-items-center text-end text-nowrap mb-2">
              <span className={`shape-xs rounded-circle bg-${d.color} me-2`} />
              <small className="fw-normal">{d.label}</small>
            </div>
          ))}
        </div>
      </div>
      <div className="p-2">
        <BarChart labels={labels} series={series}/>
      </div>
    </div>
  );
};

export const LineChartWidget = (props) => {
  const { title, value, data = [] } = props;
  const labels = lgas;
  const series = [
    [45, 26, 32, 75, 1, 22, 72, 72, 28, 65, 19, 6, 66, 49, 44, 87, 33, 47, 23, 98, 36, 84, 96, 42, 82, 51, 23, 66],
    [45, 26, 32, 75, 1, 22, 72, 72, 28, 65, 19, 6, 66, 49, 44, 87, 33, 47, 23, 98, 36, 84, 96, 42, 82, 51, 23, 66].map(number => number-10)
  ]

  return (
    <div className="shadow-sm">
    	<h5 className="h5 text-center">{title}</h5>
      <hr/>
      <div className="mt-4 w-full">
        <LineChart labels={labels} series={series}/>
      </div>
    </div>
  );
};

export const ProjectWidget = (props) => {
  const { title, value } = props;
  return (
    <div className="shadow-sm">
        <div className="border-b-2 text-center mb-4">
          <h3 className="h3 mb-0 text-center">{title}</h3>
          <h5 className="h5">{value} Projects across 27 LGAs</h5>
        </div>
      <div className="">
        <ProjectChart />
      </div>
    </div>
  );
};

export function MapWidget({ coordinates }){
  const defaultProps = {
    center: {
      lat: 11.802926900993862,
      lng: 13.171610913316805
    },
    zoom: 12
  };
  const [center, setCenter] = React.useState({lat: 11.802926900993862, lng: 13.171610913316805})
  const [zoom, setZoom] = React.useState(11)

  const handleChange = ({center, zoom }) => {
    setCenter(center);
    setZoom(zoom)
  }
  
  return (
    // Important! Always set the container height explicitly
    <div className="w-full h-screen -z-20">
      <GoogleMapReact
        bootstrapURLKeys={{ key: process.env.REACT_APP_GOOGLE_MAP_API_KEY }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
        center={center}
        onChange={handleChange}>
          {coordinates.map(coordinate => (
            <Marker key={coordinate.lat} lat={coordinate.lat} lng={coordinate.lng} place={coordinate.place}/>
          ))}
      </GoogleMapReact>
    </div>
  );
}