import * as fs from 'fs';

const readFile = (filename: string): string[] => {
  const filepath = `./24/Season1/${filename}`;

  const text = fs
    .readFileSync(filepath, {
      encoding: 'utf16le',
    })
    .toString();

  const result = text
    .split('\r\n')
    .filter((item) => item.trim().length !== 0)
    .filter((item) => isNaN(Number(item.substring(0, 1))))
    .filter((item) => item.substring(0, 1) !== '{')
    .join(' ')
    .split(' ')
    .map((item) => item.replace(/\./g, ''))
    .map((item) => item.replace(/\"/g, ''))
    .map((item) => item.replace(/\?/g, ''))
    .map((item) => item.replace(/,/g, ''))
    .map((item) => item.replace(/;/g, ''))
    .map((item) => item.replace(/-/g, ''))
    .map((item) => (item.indexOf("'") === -1 ? item : item.split("'")[0]))
    .filter((item) => item.trim().length > 3)
    .map((item) => item.toLowerCase())
    .filter((item) => item.substring(0, 1).match(/[a-z]/));

  return Array.from(new Set(result));
};

const start = () => {
  const result: string[] = [
    ...readFile('24.S01E01.srt'),
    ...readFile('24.S01E02.srt'),
    ...readFile('24.S01E03.srt'),
    ...readFile('24.S01E04.srt'),
    ...readFile('24.S01E05.srt'),
    ...readFile('24.S01E06.srt'),
    ...readFile('24.S01E07.srt'),
    ...readFile('24.S01E08.srt'),
    ...readFile('24.S01E09.srt'),
    ...readFile('24.S01E10.srt'),
    ...readFile('24.S01E11.srt'),
    ...readFile('24.S01E12.srt'),
    ...readFile('24.S01E14.srt'),
    ...readFile('24.S01E15.srt'),
    ...readFile('24.S01E16.srt'),
    ...readFile('24.S01E17.srt'),
    ...readFile('24.S01E18.srt'),
    ...readFile('24.S01E19.srt'),
    ...readFile('24.S01E20.srt'),
    ...readFile('24.S01E21.srt'),
    ...readFile('24.S01E22.srt'),
    ...readFile('24.S01E23.srt'),
  ];

  fs.writeFileSync('./results/24.txt', Array.from(new Set(result)).join('\n'), {
    flag: 'w',
  });
};

start();
