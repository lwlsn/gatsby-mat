import React from "react"

import * as ProjectCardStyle from "./project_card.module.css"

export default function HomeProject(props) {
  return (
    <div className="column is-one-third-tablet is-full-mobile">
      <div className={`${ProjectCardStyle.card}`}>
        <a href={props.url}>
          <span className={ProjectCardStyle.arrow}></span>
          <img src={props.img} alt={`${props.title}`} />
          <div>
            <h2>
              {props.title} <i>{props.year}</i>
            </h2>

            <p>
              <strong>Student: </strong>
              {props.student}
            </p>
          </div>
        </a>
      </div>
    </div>
  )
}
