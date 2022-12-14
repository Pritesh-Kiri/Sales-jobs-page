import React, { useRef } from "react"
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai"
import {
  question,
  curicullumtopicinner,
  topic,
  btn,
  answersection,
  answer,
  nochapter,
} from "../styles/curriculum.module.css"

const CuricullumTopic = ({ item, onToggle, active }) => {
  const contentEl = useRef()
  return (
    <article className={question}>
      <div className={curicullumtopicinner}>
        <header aria-hidden="true" onClick={onToggle}>
          <div className={topic}>
            <h4>{item.topic}</h4>
            <p>{`${item.weeks}  | ${item.casestudy}  | ${item.quiz}  `}</p>
          </div>
          <p className={btn}>
            {active ? (
              <AiOutlineMinus fill="black" />
            ) : (
              <AiOutlinePlus fill="black" />
            )}
          </p>
        </header>
        <div
          ref={contentEl}
          className={answersection}
          style={
            active
              ? { height: contentEl.current.scrollHeight }
              : { height: "0px" }
          }
        >
          <p className={answer}>{item.description}</p>
          <ul>
            <li
              className={item.chapter1 ? "" : `${nochapter}`}
            >{` ${item.chapter1}`}</li>
            <li
              className={item.chapter2 ? "" : `${nochapter}`}
            >{` ${item.chapter2}`}</li>
            <li
              className={item.chapter3 ? "" : `${nochapter}`}
            >{` ${item.chapter3}`}</li>
            <li
              className={item.chapter4 ? "" : `${nochapter}`}
            >{` ${item.chapter4}`}</li>
            <li
              className={item.chapter5 ? "" : `${nochapter}`}
            >{` ${item.chapter5}`}</li>

            <li
              className={item.chapter6 ? "" : `${nochapter}`}
            >{` ${item.chapter6}`}</li>

            <li
              className={item.chapter7 ? "" : `${nochapter}`}
            >{` ${item.chapter7}`}</li>
          </ul>
        </div>
      </div>
    </article>
  )
}

export default CuricullumTopic
