
export interface Quest {
  title: string;
  description: string;
  keyConcepts: string[];
}

export interface User {
  name: string;
  avatarUrl: string;
}

export enum Language {
  JavaScript = "JavaScript",
  Python = "Python",
  TypeScript = "TypeScript",
  Go = "Go",
  Rust = "Rust",
}

export enum Framework {
  React = "React",
  Vue = "Vue",
  Angular = "Angular",
  NodeJS = "Node.js",
  Django = "Django",
  Flask = "Flask",
  None = "None",
}
