import React from 'react';
// import PlayerAPI from '../api'
// import { Link } from 'react-router-dom';
import '../css/Projects.css';

let data = [
  {name:"BlogPlatform", description: "App built in SpringBoot, Spring Security, JWT auth, React, and MySql database (a work in progress)", url: "https://github.com/fatcatdog/SpringBootReactPoweredBlog", demoUrl: "https://github.com/fatcatdog/SpringBootReactPoweredBlog", screenshot: ""},
  {name:"YoutubeLite", description: "App built with React, Redux, Node, and Youtube API", url: "https://github.com/fatcatdog/light-youtube-player-", demoUrl: "https://youtube-player-react-redux.herokuapp.com/", screenshot: ""},
  {name:"JSBudgetTracker", description: "Budget Calcultor built in Vanilla JS", url:"https://github.com/fatcatdog/monthly-budget-vanilla-js" , demoUrl: "https://vanillajsbudgettracker.herokuapp.com/", screenshot: "" },
  {name:"CheckTheWeather", description: "App built with React, Redux, Node, Google Maps API, and OpenWeatherMap API", url: "https://github.com/fatcatdog/check-the_weather-app", demoUrl: "https://checktheweatherapp.herokuapp.com/", screenshot: "" },
  {name:"WikipediaReader", description: "App built utilizing WikiPedia API, JQuery, and Normalize CSS", url: "https://codepen.io/fatcatdog/pen/aGbrga", demoUrl: "https://codepen.io/fatcatdog/full/aGbrga/", screenshot: "" }
];

const Projects = () => (
<div>
<div className="top_half_of_projects_page">
<h1>Projects</h1>
  <ul className="project_list">
    {data.map(project => (
      <li className="list_item">
        {project.name} - {project.description} - <a className="project_link" href={project.url} rel="noreferrer noopener" target="_blank">Repo</a> - <a className="project_link" href={project.demoUrl} rel="noreferrer noopener" target="_blank">Demo</a>
      </li>
    ))}
    <br />
    More on the way ...
  </ul>
</div>
<div className="bottom_portion">

      </div>
</div>
)

export default Projects;
