export enum SelectedPage {
    Home = "home",
    Services = "services",
    Skills = "skills",
    Projects = "projects",
    ContactMe = "contactme"
  }

  export interface ServicesType {
    heading: string,
    imageHeader: string,
    title: string;
    description: string;
    cornerImage: string;
  }

  export interface SkillsType {
    id: number;
    title: string;
    percentage: string;
    description: string;
    bar: string;
  }

  export interface ProjectType {
    title: string;
    tech: string;
    description: string;
    image: string;
  }