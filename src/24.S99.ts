import * as fs from 'fs';
import _ from 'lodash';

const readFile = (filename: string): string[] => {
  const filepath = `./results/24/Season2/${filename}`;

  const text = fs
    .readFileSync(filepath, {
      encoding: 'utf8',
    })
    .toString();

  return Array.from(new Set(text.split('\n')));
};

const start = () => {
  const result: string[] = [
    ...readFile('S02E01.txt'),
    ...readFile('S02E02.txt'),
    ...readFile('S02E03.txt'),
    ...readFile('S02E04.txt'),
    ...readFile('S02E05.txt'),
    ...readFile('S02E06.txt'),
    ...readFile('S02E07.txt'),
    ...readFile('S02E08.txt'),
    ...readFile('S02E09.txt'),
    ...readFile('S02E10.txt'),
    ...readFile('S02E11.txt'),
    ...readFile('S02E12.txt'),
    ...readFile('S02E13.txt'),
    ...readFile('S02E14.txt'),
    ...readFile('S02E15.txt'),
    ...readFile('S02E16.txt'),
    ...readFile('S02E17.txt'),
    ...readFile('S02E18.txt'),
    ...readFile('S02E19.txt'),
    ...readFile('S02E20.txt'),
    ...readFile('S02E21.txt'),
    ...readFile('S02E22.txt'),
    ...readFile('S02E23.txt'),
    ...readFile('S02E24.txt'),
  ];

  fs.writeFileSync(`./results/24/Season2/S02E99.txt`, _.orderBy(Array.from(new Set(result))).join('\n'), {
    flag: 'w',
  });
};

start();
