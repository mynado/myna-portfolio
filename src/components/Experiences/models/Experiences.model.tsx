export type ExperienceModel = {
  client: string;
  degree?: string;
  projectTitle?: string;
  location?: string;
  endYear?: number;
  title: string;
  startYear: number;
  present: boolean;
  moreInfo?: string[];
};

export const workExperiences: ExperienceModel[] = [
  {
    client: "BIMobject",
    location: "Malmö, Sweden",
    title: "Front End Developer",
    startYear: 2020,
    present: true,
    moreInfo: [
      "Developer of BIMobjects marketplace in Angular",
      "Scrum",
      "Tracking events",
      "",
    ],
  },
  {
    client: "Mahoyo",
    title: "Co-founder & Creative Producer",
    startYear: 2008,
    present: true,
    moreInfo: [
      "Mahoyo is a Stockholm-based creative duo consisting of Farah Yusuf and MyNa Do. We work as filmmakers, photographers, DJs, club organizers and stylists. We find inspiration for our work through our international travels and mixed backgrounds. Through our involvement in the arts and culture scene since 2008, we have established a wide network worldwide.",
    ],
  },
  {
    client: "Mahoyo",
    projectTitle: "Reflexion",
    title: "Film Director",
    startYear: 2016,
    present: true,
    moreInfo: [
      "RE-FLEX-ION is a documentary film that deals with the value of growing up in between cultures, where two childhood friends who make up a creative duo visit different parts of the world, to meet creatives and search for new expressions that can identify, define and make space for a non-normative perspective.",
    ],
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
    moreInfo: [
      "Mahoyo, RMH and This Is Sweden joined forces during Bråvalla (under the name “Busy creating the future”) to create a borderless utopia. The ambition were to invite visitors to take part in the global movement of the future that unites people who believe in activism through creativity.",
    ],
  },
  {
    client: "Mahoyo",
    projectTitle: "The Mahoyo Project: South Africa",
    title: "Film Director & Producer",
    startYear: 2013,
    endYear: 2015,
    present: false,
    moreInfo: [
      "The Mahoyo Project is a documentary about the Swedish creative trio Mahoyo and their journey to Johannesburg, South Africa. In the growing cultural scene in Johannesburg, Mahoyo collaborates with local artists who all have counterparts in the creative scene in Stockholm where the collaboration continues. In both places we see a budding movement where norms and stereotypes are challenged. This story aims to break stereotypes of gender, race and location.",
    ],
  },
];

export const educationExperiences: ExperienceModel[] = [
  {
    client: "Medieinstitutet",
    degree: "Higher Vocational Education Diploma",
    location: "Malmö, Sweden",
    title: "Front End Developer",
    startYear: 2019,
    endYear: 2021,
    present: false,
  },
  {
    client: "Jönköping University",
    degree: "Degree of Bachelor of Science with major in Computer Engineering",
    location: "Jönköping, Sweden",
    title: "Computer Engineering",
    startYear: 2005,
    endYear: 2009,
    present: false,
  },
];
