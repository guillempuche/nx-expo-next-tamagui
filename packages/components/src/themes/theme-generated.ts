type Theme = {
  background: string;
  backgroundHover: string;
  backgroundPress: string;
  backgroundFocus: string;
  backgroundStrong: string;
  backgroundTransparent: string;
  color: string;
  colorHover: string;
  colorPress: string;
  colorFocus: string;
  colorTransparent: string;
  borderColor: string;
  borderColorHover: string;
  borderColorFocus: string;
  borderColorPress: string;
  placeholderColor: string;
};

function t(a) {
  let res: Record<string, string> = {};
  for (const [ki, vi] of a) {
    // @ts-ignore
    res[ks[ki]] = vs[vi];
  }
  return res;
}
const vs = [
  '#ffffff',
  '#ffcbcb',
  '#ffb9ba',
  '#fda7a9',
  '#ffeeed',
  '#0A0A0A',
  '#ee5967',
  '#e94057',
  '#fa9598',
  '#f78288',
  '#290508',
  '#410b12',
  '#5a131c',
  '#030000',
  '#f3f3f3',
  '#cb364b',
  '#741b27',
  '#902433',
];

const ks = [
  'background',
  'backgroundHover',
  'backgroundPress',
  'backgroundFocus',
  'backgroundStrong',
  'backgroundTransparent',
  'color',
  'colorHover',
  'colorPress',
  'colorFocus',
  'colorTransparent',
  'borderColor',
  'borderColorHover',
  'borderColorFocus',
  'borderColorPress',
  'placeholderColor',
];

const n1 = t([
  [0, 0],
  [1, 1],
  [2, 2],
  [3, 3],
  [4, 4],
  [5, 0],
  [6, 5],
  [7, 6],
  [8, 7],
  [9, 6],
  [10, 5],
  [11, 3],
  [12, 8],
  [13, 2],
  [14, 3],
  [15, 9],
]) as Theme;

export const light = n1 as Theme;
const n2 = t([
  [0, 5],
  [1, 10],
  [2, 11],
  [3, 12],
  [4, 13],
  [5, 5],
  [6, 14],
  [7, 15],
  [8, 7],
  [9, 15],
  [10, 14],
  [11, 12],
  [12, 16],
  [13, 11],
  [14, 12],
  [15, 17],
]) as Theme;

export const dark = n2 as Theme;
