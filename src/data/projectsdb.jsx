import uniqid from "uniqid";

import memory from "../assets/projects/color-memory_resize.png";
import drummer from "../assets/projects/drummer_resize.png";
import mind from "../assets/projects/mind_resize.png";
import todolist from "../assets/projects/todolist_resize.png";
import chart from "../assets/projects/chart.jpg";

const projectsdb = [
  {
    id: uniqid(),
    image: `${chart}`,
    title: "Real Time Data",
    description: "",
    github: "https://github.com/papadakisandone/chart-realtime",
    demo: "https://papadakisandone.github.io/chart-realtime/",
  },
  {
    id: uniqid(),
    image: `${memory}`,
    title: "Color Memory",
    description: "",
    github: "https://github.com/papadakisandone/Color-Memory-Game",
    demo: "https://papadakisandone.github.io/Color-Memory-Game/",
  },
  {
    id: uniqid(),
    image: `${drummer}`,
    title: "Drummer",
    description: "",
    github: "https://github.com/papadakisandone/The-Drummer",
    demo: "https://raw.githack.com/papadakisandone/The-Drummer/main/index.html",
  },
  {
    id: uniqid(),
    image: `${mind}`,
    title: "Mind Trick",
    description: "",
    github: "https://github.com/papadakisandone/MindCardGame",
    demo: "https://user-images.githubusercontent.com/83516016/116905924-e9c74580-ac3f-11eb-9880-78650c17096a.gif",
  },
  {
    id: uniqid(),
    image: `${todolist}`,
    title: "To do list",
    description: "",
    github: "https://github.com/papadakisandone/To-Do-List",
    demo: "https://frozen-hamlet-94396.herokuapp.com/",
  },
  {
    id: uniqid(),
    image: `${projects}`,
    title: "More Projects",
    description: "Github repositories",
    github: "https://github.com/papadakisandone?tab=repositories",
    demo: "",
  },
];
export default projectsdb;
