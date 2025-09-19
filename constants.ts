
import { Language, Framework } from './types';

export const LANGUAGES: Language[] = [
  Language.JavaScript,
  Language.Python,
  Language.TypeScript,
  Language.Go,
  Language.Rust,
];

export const FRAMEWORKS: Record<Language, Framework[]> = {
  [Language.JavaScript]: [Framework.React, Framework.Vue, Framework.Angular, Framework.NodeJS, Framework.None],
  [Language.TypeScript]: [Framework.React, Framework.Vue, Framework.Angular, Framework.NodeJS, Framework.None],
  [Language.Python]: [Framework.Django, Framework.Flask, Framework.None],
  [Language.Go]: [Framework.None],
  [Language.Rust]: [Framework.None],
};
