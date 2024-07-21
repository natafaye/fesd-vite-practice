import "bootstrap/dist/css/bootstrap.min.css"
import { renderTag } from "./tag"

const tagList = ["important", "personal", "errand"]

const renderTagList = () => {
  const div = document.createElement("div")
  div.innerHTML = tagList.map(tag => (
    renderTag(tag)
  )).join("")
  document.getElementById("app").appendChild(div)
}

renderTagList()