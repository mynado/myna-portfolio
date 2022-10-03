import Experience from "../Experience/Experience";

export type ExperienceModel = {
  client: string;
  projectTitle?: string;
  location?: string;
  endYear?: number;
  title: string;
  startYear: number;
  present: boolean;
  moreInfo?: string;
};

export const workExperiences: ExperienceModel[] = [
  {
    client: "BIMobject",
    location: "Malmö, Sweden",
    title: "Front End Developer",
    startYear: 2020,
    present: true,
  },
  {
    client: "Mahoyo",
    title: "Co-founder & Creative Producer",
    startYear: 2008,
    present: true,
  },
  {
    client: "Mahoyo",
    projectTitle: "Reflexion",
    title: "Film Director",
    startYear: 2016,
    present: true,
  },
  {
    client: "Natur & Kultur",
    title: "Web Editor",
    startYear: 2018,
    endYear: 2019,
    present: false,
  },
  {
    client: "Natur & Kultur",
    title: "Digital Producer",
    startYear: 2018,
    endYear: 2019,
    present: false,
  },
  {
    client: "Bråvalla Festival",
    projectTitle: "Busy Creating The Future",
    title: "Event Producer",
    startYear: 2016,
    endYear: 2016,
    present: false,
  },
  {
    client: "Mahoyo",
    projectTitle: "The Mahoyo Project: South Africa",
    title: "Film Director & Producer",
    startYear: 2013,
    endYear: 2015,
    present: false,
  },
];

export const educationExperiences: ExperienceModel[] = [
  {
    client: "Medieinstitutet",
    location: "Malmö, Sweden",
    title: "Front End Developer",
    startYear: 2019,
    endYear: 2021,
    present: false,
  },
  {
    client: "Jönköping University",
    location: "Jönköping, Sweden",
    title: "Computer Engineering",
    startYear: 2005,
    endYear: 2009,
    present: false,
  },
];
