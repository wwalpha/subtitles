import * as fs from 'fs';
import { convert2 } from './utils';
import _ from 'lodash';

const readFile = (filename: string): string[] => {
  const filepath = `./origins/24/Season2/${filename}`;

  const text = fs
    .readFileSync(filepath, {
      encoding: 'utf16le',
    })
    .toString();

  const result = text
    .split('\r\n')
    .filter((item) => item.trim().length !== 0)
    .filter((item) => isNaN(Number(item.substring(0, 1))))
    .filter((item) => item.startsWith('Dialogue:'))
    .filter((item) => item.split('{\\fs14}').length !== 1)
    .map((item) => item.split('{\\fs14}')[1])
    .map((item) => item.replace(/\./g, ''))
    .map((item) => item.replace(/\"/g, ''))
    .map((item) => item.replace(/\?/g, ''))
    .map((item) => item.replace(/,/g, ''))
    .map((item) => item.replace(/!/g, ''))
    .map((item) => item.replace(/:/g, ''))
    .map((item) => item.replace(/;/g, ''))
    .map((item) => item.replace(/'s/g, ''))
    .map((item) => item.replace(/'m/g, ''))
    .map((item) => item.replace(/'n/g, ''))
    .map((item) => item.replace(/'ve/g, ''))
    .map((item) => item.replace(/'d/g, ''))
    .map((item) => item.replace(/'t/g, ''))
    .map((item) => item.replace(/'ll/g, ''))
    .map((item) => item.replace(/'re/g, ''))
    .map((item) => item.replace(/'em/g, ''))
    .join(' ')
    .split(' ')
    .filter((item) => (item.trim() === '-' ? '' : item))
    .map((item) => item.replace(/--/g, ''))
    .map((item) => (item.endsWith("'") ? item.replace(/'/g, '') : item))
    .map((item) => (item.startsWith("'") ? item.replace(/'/g, '') : item))
    .map((item) => (item.startsWith('-') ? item.replace(/-/g, '') : item))
    .map((item) => {
      if (item.toUpperCase() === item) {
        return item;
      }

      return item.toLowerCase();
    })
    .filter((item) => isNaN(Number(item.substring(0, 1))))
    .filter((item) => !item.startsWith('$'))
    .map((item) => convert2(item))
    .filter((item) => item.trim().length > 3);

  return Array.from(new Set(result));
};

const start = () => {
  // const result: string[][] = [
  //   readFile('S02E01.ass'),
  //   readFile('S02E02.ass'),
  //   readFile('S02E03.ass'),
  //   readFile('S02E04.ass'),
  //   readFile('S02E05.ass'),
  //   readFile('S02E06.ass'),
  //   readFile('S02E07.ass'),
  //   readFile('S02E08.ass'),
  //   readFile('S02E09.ass'),
  //   readFile('S02E10.ass'),
  //   readFile('S02E11.ass'),
  //   readFile('S02E12.ass'),
  //   readFile('S02E13.ass'),
  //   readFile('S02E14.ass'),
  //   readFile('S02E15.ass'),
  //   readFile('S02E16.ass'),
  //   readFile('S02E17.ass'),
  //   readFile('S02E18.ass'),
  //   readFile('S02E19.ass'),
  //   readFile('S02E20.ass'),
  //   readFile('S02E21.ass'),
  //   readFile('S02E22.ass'),
  //   readFile('S02E23.ass'),
  //   readFile('S02E24.ass'),
  // ];

  const result: string[] = [
    ...readFile('S02E01.ass'),
    ...readFile('S02E02.ass'),
    ...readFile('S02E03.ass'),
    ...readFile('S02E04.ass'),
    ...readFile('S02E05.ass'),
    ...readFile('S02E06.ass'),
    ...readFile('S02E07.ass'),
    ...readFile('S02E08.ass'),
    ...readFile('S02E09.ass'),
    ...readFile('S02E10.ass'),
    ...readFile('S02E11.ass'),
    ...readFile('S02E12.ass'),
    ...readFile('S02E13.ass'),
    ...readFile('S02E14.ass'),
    ...readFile('S02E15.ass'),
    ...readFile('S02E16.ass'),
    ...readFile('S02E17.ass'),
    ...readFile('S02E18.ass'),
    ...readFile('S02E19.ass'),
    ...readFile('S02E20.ass'),
    ...readFile('S02E21.ass'),
    ...readFile('S02E22.ass'),
    ...readFile('S02E23.ass'),
    ...readFile('S02E24.ass'),
  ];

  // result.forEach((item, idx) => {
  //   fs.writeFileSync(`./results/24/Season2/S02E${(idx + 1).toString().padStart(2, '0')}.txt`, item.join('\n'), {
  //     flag: 'w',
  //   });
  // });

  const array = _.orderBy(Array.from(new Set(result)));

  fs.writeFileSync(`./results/24/Season2/S02E99.txt`, array.join('\n'), {
    flag: 'w',
  });
};

start();
