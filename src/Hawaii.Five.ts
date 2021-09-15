import * as fs from 'fs';

const readFile = (filename: string): string[] => {
  const filepath = `./subtitles/Hawaii.Five/Season1/${filename}`;

  const text = fs
    .readFileSync(filepath, {
      encoding: 'utf16le',
    })
    .toString();

  const result = text
    .split('\r\n')
    .filter((item) => item.trim().length !== 0)
    .filter((item) => item.indexOf('}') !== -1)
    .map((item) => item.substring(item.indexOf('}') + 1))
    .join(' ')
    .split(' ')
    .map((item) => item.replace(/\./g, ''))
    .map((item) => item.replace(/\"/g, ''))
    .map((item) => item.replace(/\!/g, ''))
    .map((item) => item.replace(/\?/g, ''))
    .map((item) => item.replace(/\:/g, ''))
    .map((item) => item.replace(/--/g, ''))
    .map((item) => item.replace(/,/g, ''))
    .map((item) => item.replace(/;/g, ''))
    .map((item) => (item.indexOf("'") === -1 ? item : ''))
    .map((item) => (item.indexOf('/') === -1 ? item : ''))
    .filter((item) => item.trim().length > 3)
    .map((item) => item.toLowerCase())
    .filter((item) => item.substring(0, 1).match(/[a-z]/));

  return Array.from(new Set(result));
};

const start = () => {
  const result: string[] = [
    ...readFile('Hawaii.Five.0.S01E01.ass'),
    ...readFile('Hawaii.Five.0.S01E02.ass'),
    ...readFile('Hawaii.Five.0.S01E03.ass'),
    ...readFile('Hawaii.Five.0.S01E04.ass'),
    ...readFile('Hawaii.Five.0.S01E05.ass'),
    ...readFile('Hawaii.Five.0.S01E06.ass'),
    ...readFile('Hawaii.Five.0.S01E07.ass'),
    ...readFile('Hawaii.Five.0.S01E08.ass'),
    ...readFile('Hawaii.Five.0.S01E09.ass'),
    ...readFile('Hawaii.Five.0.S01E10.ass'),
    ...readFile('Hawaii.Five.0.S01E11.ass'),
    ...readFile('Hawaii.Five.0.S01E12.ass'),
    ...readFile('Hawaii.Five.0.S01E13.ass'),
    ...readFile('Hawaii.Five.0.S01E14.ass'),
    ...readFile('Hawaii.Five.0.S01E15.ass'),
    ...readFile('Hawaii.Five.0.S01E16.ass'),
    ...readFile('Hawaii.Five.0.S01E17.ass'),
    ...readFile('Hawaii.Five.0.S01E18.ass'),
    ...readFile('Hawaii.Five.0.S01E19.ass'),
    ...readFile('Hawaii.Five.0.S01E20.ass'),
    ...readFile('Hawaii.Five.0.S01E21.ass'),
    ...readFile('Hawaii.Five.0.S01E22.ass'),
    ...readFile('Hawaii.Five.0.S01E23.ass'),
    ...readFile('Hawaii.Five.0.S01E24.ass'),
  ]
    .filter((item, idx, array) => (item.endsWith('s') ? !array.includes(item.substring(0, item.length - 1)) : true))
    .filter((item, idx, array) => (item.endsWith('ing') ? !array.includes(item.substring(0, item.length - 3)) : true))
    .filter((item, idx, array) =>
      item.endsWith('ies') ? !array.includes(`${item.substring(0, item.length - 3)}y`) : true
    )
    .filter((item, idx, array) => (item.endsWith('ed') ? !array.includes(item.substring(0, item.length - 2)) : true))
    .filter((item, idx, array) => (item.endsWith('ed') ? !array.includes(item.substring(0, item.length - 1)) : true))
    .filter((item, idx, array) => (item.endsWith('ed') ? !array.includes(item.substring(0, item.length - 3)) : true));

  result.sort();

  const fileTexts = Array.from(new Set(result));

  for (let i = 1; fileTexts.length > 0; i++) {
    const lines = fileTexts.length > 1000 ? fileTexts.splice(0, 1000) : fileTexts.splice(0, fileTexts.length);

    fs.writeFileSync(`./results/Hawaii.Five/Season1_${i}.txt`, lines.join('\n'), {
      flag: 'w',
    });
  }
};

start();
