import { getCategries } from "@utils";
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
    categories: getCategries("logos", "visitenkarten"),
    title: "Elektro- und Haustechnik",
    imgSrc: "/img/Group 85.jpg",
  },
  {
    categories: getCategries("logos"),
    title: "Wander- und  Trekking-Guide",
    imgSrc: "/img/Group 86.jpg",
  },
  {
    categories: getCategries("visitenkarten"),
    title: "Grafik- und Webdesignerin",
    imgSrc: "/img/Group 87.jpg",
  },
  {
    categories: getCategries("visitenkarten"),
    title: "Wander- und Outdoor Guide",
    imgSrc: "/img/Group 88.jpg",
  },
  {
    categories: getCategries("webshops", "websites"),
    title: "Lachgas und Sahnekapseln",
    imgSrc: "/img/Group 89.jpg",
  },
  {
    categories: getCategries("logos", "visitenkarten"),
    title: "Immobilien-vermarktung",
    imgSrc: "/img/Group 90.jpg",
  },
  {
    categories: getCategries("websites"),
    title: "Zahnarztpraxis",
    imgSrc: "/img/Group 91.jpg",
  },
  {
    categories: getCategries("digitale-speisekarten"),
    title: "Bar & Club",
    imgSrc: "/img/Group 92.jpg",
  },
  {
    categories: getCategries("websites"),
    title: "Großhandel",
    imgSrc: "/img/Group 93.jpg",
  },
  {
    categories: getCategries("websites"),
    title: "Vazegreen",
    imgSrc: "/img/Group 94.jpg",
  },
  {
    categories: getCategries("websites"),
    title: "Sahnekapseln",
    imgSrc: "/img/Group 95.jpg",
  },
  {
    categories: getCategries("plakat"),
    title: "Wine Tasting",
    imgSrc: "/img/Group 96.jpg",
  },
  {
    categories: getCategries("plakat"),
    title: "Bowling Night",
    imgSrc: "/img/Group 97.jpg",
  },
  {
    categories: getCategries("hochzeit"),
    title: "Einladungskarte",
    imgSrc: "/img/Group 98.jpg",
  },
  {
    categories: getCategries("hochzeit"),
    title: "Einladungskarte",
    imgSrc: "/img/Group 99.jpg",
  },
  {
    categories: getCategries("digitale-speisekarten"),
    title: "Bar",
    imgSrc: "/img/Group 100.jpg",
  },
  {
    categories: getCategries("hochzeit"),
    title: "Hochzeits-Website",
    imgSrc: "/img/Group 101.jpg",
  },
  {
    categories: getCategries("hochzeit"),
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
