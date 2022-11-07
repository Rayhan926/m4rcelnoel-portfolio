import { getTags } from "@utils";
import { ProjectCard, Service, Tag } from "./types";

export const services: Service[] = [
  {
    text: "Websites",
    value: "websites",
  },
  {
    text: "Apps",
    value: "apps",
  },
  {
    text: "Logos",
    value: "logos",
  },
  {
    text: "Visitenkarten",
    value: "visitenkarten",
  },
  {
    text: "Webshops",
    value: "webshops",
  },
  {
    text: "Digitale Speisekarten",
    value: "digitale-speisekarten",
  },
];

export const tags: Tag[] = [
  {
    name: "Website",
    value: "websites",
  },
  // {
  //   name: "Apps",
  //   value: "apps",
  // },
  {
    name: "Logo",
    value: "logos",
  },
  {
    name: "Visitenkarten",
    value: "visitenkarten",
  },
  {
    name: "Webshop",
    value: "webshops",
  },
  {
    name: "Digitale Speisekarten",
    value: "digitale-speisekarten",
  },
  {
    name: "Plakat",
    value: "plakat",
  },
  {
    name: "Hochzeit",
    value: "hochzeit",
  },
];

export const projectCards: ProjectCard[] = [
  {
    tags: getTags("logos", "visitenkarten"),
    title: "Elektro- und Haustechnik",
    imgSrc: "/img/Group 85.jpg",
  },
  {
    tags: getTags("logos"),
    title: "Wander- und  Trekking-Guide",
    imgSrc: "/img/Group 86.jpg",
  },
  {
    tags: getTags("visitenkarten"),
    title: "Grafik- und Webdesignerin",
    imgSrc: "/img/Group 87.jpg",
  },
  {
    tags: getTags("visitenkarten"),
    title: "Wander- und Outdoor Guide",
    imgSrc: "/img/Group 88.jpg",
  },
  {
    tags: getTags("webshops", "websites"),
    title: "Lachgas und Sahnekapseln",
    imgSrc: "/img/Group 89.jpg",
  },
  {
    tags: getTags("logos", "visitenkarten"),
    title: "Immobilien-vermarktung",
    imgSrc: "/img/Group 90.jpg",
  },
  {
    tags: getTags("websites"),
    title: "Zahnarztpraxis",
    imgSrc: "/img/Group 91.jpg",
  },
  {
    tags: getTags("digitale-speisekarten"),
    title: "Bar & Club",
    imgSrc: "/img/Group 92.jpg",
  },
  {
    tags: getTags("websites"),
    title: "Großhandel",
    imgSrc: "/img/Group 93.jpg",
  },
  {
    tags: getTags("websites"),
    title: "Vazegreen",
    imgSrc: "/img/Group 94.jpg",
  },
  {
    tags: getTags("websites"),
    title: "Sahnekapseln",
    imgSrc: "/img/Group 95.jpg",
  },
  {
    tags: getTags("plakat"),
    title: "Wine Tasting",
    imgSrc: "/img/Group 96.jpg",
  },
  {
    tags: getTags("plakat"),
    title: "Bowling Night",
    imgSrc: "/img/Group 97.jpg",
  },
  {
    tags: getTags("hochzeit"),
    title: "Einladungskarte",
    imgSrc: "/img/Group 98.jpg",
  },
  {
    tags: getTags("hochzeit"),
    title: "Einladungskarte",
    imgSrc: "/img/Group 99.jpg",
  },
  {
    tags: getTags("digitale-speisekarten"),
    title: "Bar",
    imgSrc: "/img/Group 100.jpg",
  },
  {
    tags: getTags("hochzeit"),
    title: "Hochzeits-Website",
    imgSrc: "/img/Group 101.jpg",
  },
  {
    tags: getTags("hochzeit"),
    title: "Hochzeits-Website",
    imgSrc: "/img/Group 102.jpg",
  },
];

export const faqs = [
  {
    question: "Wie lange dauert ein Projekt?",
    answer:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum perspiciatis culpa quod fugit illum eius natus dolore dolorum praesentium delectus molestiae aut corrupti animi tempora blanditiis harum aliquid, atque deleniti dolor suscipit. Commodi magni dicta incidunt beatae corporis assumenda nihil? Ex officia est similique praesentium reprehenderit at eveniet autem asperiores!",
  },
  {
    question: "Wird auch Fotografie angeboten?",
    answer:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum perspiciatis culpa quod fugit illum eius natus dolore dolorum praesentium delectus molestiae aut corrupti animi tempora blanditiis harum aliquid, atque deleniti dolor suscipit. Commodi magni dicta incidunt beatae corporis assumenda nihil? Ex officia est similique praesentium reprehenderit at eveniet autem asperiores!",
  },
  {
    question: "Was kostet eine einfache Website (One Pager)?",
    answer:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum perspiciatis culpa quod fugit illum eius natus dolore dolorum praesentium delectus molestiae aut corrupti animi tempora blanditiis harum aliquid, atque deleniti dolor suscipit. Commodi magni dicta incidunt beatae corporis assumenda nihil? Ex officia est similique praesentium reprehenderit at eveniet autem asperiores!",
  },
];
