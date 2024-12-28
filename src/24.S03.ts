import * as fs from 'fs';
import { convert2 } from './utils';

const readFile = (filename: string): string[] => {
  const filepath = `./origins/24/Season3/${filename}`;

  const text = fs
    .readFileSync(filepath, {
      encoding: 'utf8',
    })
    .toString();

  // console.log(text);
  const result = text
    .split('\r\n')
    .filter((item) => item.trim().length !== 0)
    .filter((item) => isNaN(Number(item.substring(0, 1))))
    .filter((item) => item.startsWith('Dialogue:'))

    .filter((item) => item.split('原文字幕}').length !== 1)
    .map((item) => item.split('原文字幕}')[1])
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
    .map((item) => {
      console.log(111111, item);
      if (convert2(item) === 'dockerty') {
        console.log(item, filename);
      }

      return convert2(item);
    })
    .filter((item) => item.trim().length > 3);

  return Array.from(new Set(result));
};

const start = () => {
  const result: string[][] = [
    readFile('24.S03E01.1080p.BluRay.x264-SHORTBREHD.ass'),
    readFile('24.S03E02.1080p.BluRay.x264-SHORTBREHD.ass'),
    readFile('24.S03E03.1080p.BluRay.x264-SHORTBREHD.ass'),
    readFile('24.S03E04.1080p.BluRay.x264-SHORTBREHD.ass'),
    readFile('24.S03E05.1080p.BluRay.x264-SHORTBREHD.ass'),
    readFile('24.S03E06.1080p.BluRay.x264-SHORTBREHD.ass'),
    readFile('24.S03E07.1080p.BluRay.x264-SHORTBREHD.ass'),
    readFile('24.S03E08.1080p.BluRay.x264-SHORTBREHD.ass'),
    readFile('24.S03E09.1080p.BluRay.x264-SHORTBREHD.ass'),
    readFile('24.S03E10.1080p.BluRay.x264-SHORTBREHD.ass'),
    readFile('24.S03E11.1080p.BluRay.x264-SHORTBREHD.ass'),
    readFile('24.S03E12.1080p.BluRay.x264-SHORTBREHD.ass'),
    readFile('24.S03E13.1080p.BluRay.x264-SHORTBREHD.ass'),
    readFile('24.S03E14.1080p.BluRay.x264-SHORTBREHD.ass'),
    readFile('24.S03E15.1080p.BluRay.x264-SHORTBREHD.ass'),
    readFile('24.S03E16.1080p.BluRay.x264-SHORTBREHD.ass'),
    readFile('24.S03E17.1080p.BluRay.x264-SHORTBREHD.ass'),
    readFile('24.S03E18.1080p.BluRay.x264-SHORTBREHD.ass'),
    readFile('24.S03E19.1080p.BluRay.x264-SHORTBREHD.ass'),
    readFile('24.S03E20.1080p.BluRay.x264-SHORTBREHD.ass'),
    readFile('24.S03E21.1080p.BluRay.x264-SHORTBREHD.ass'),
    readFile('24.S03E22.1080p.BluRay.x264-SHORTBREHD.ass'),
    readFile('24.S03E23.1080p.BluRay.x264-SHORTBREHD.ass'),
    readFile('24.S03E24.1080p.BluRay.x264-SHORTBREHD.ass'),
  ];

  // const result: string[] = [
  //   ...readFile('24.S03E01.1080p.BluRay.x264-SHORTBREHD01.ass'),
  //   ...readFile('24.S03E01.1080p.BluRay.x264-SHORTBREHD02.ass'),
  //   ...readFile('24.S03E01.1080p.BluRay.x264-SHORTBREHD03.ass'),
  //   ...readFile('24.S03E01.1080p.BluRay.x264-SHORTBREHD04.ass'),
  //   ...readFile('24.S03E01.1080p.BluRay.x264-SHORTBREHD05.ass'),
  //   ...readFile('24.S03E01.1080p.BluRay.x264-SHORTBREHD06.ass'),
  //   ...readFile('24.S03E01.1080p.BluRay.x264-SHORTBREHD07.ass'),
  //   ...readFile('24.S03E01.1080p.BluRay.x264-SHORTBREHD08.ass'),
  //   ...readFile('24.S03E01.1080p.BluRay.x264-SHORTBREHD09.ass'),
  //   ...readFile('24.S03E01.1080p.BluRay.x264-SHORTBREHD10.ass'),
  //   ...readFile('24.S03E01.1080p.BluRay.x264-SHORTBREHD11.ass'),
  //   ...readFile('24.S03E01.1080p.BluRay.x264-SHORTBREHD12.ass'),
  //   ...readFile('24.S03E01.1080p.BluRay.x264-SHORTBREHD13.ass'),
  //   ...readFile('24.S03E01.1080p.BluRay.x264-SHORTBREHD14.ass'),
  //   ...readFile('24.S03E01.1080p.BluRay.x264-SHORTBREHD15.ass'),
  //   ...readFile('24.S03E01.1080p.BluRay.x264-SHORTBREHD16.ass'),
  //   ...readFile('24.S03E01.1080p.BluRay.x264-SHORTBREHD17.ass'),
  //   ...readFile('24.S03E01.1080p.BluRay.x264-SHORTBREHD18.ass'),
  //   ...readFile('24.S03E01.1080p.BluRay.x264-SHORTBREHD19.ass'),
  //   ...readFile('24.S03E01.1080p.BluRay.x264-SHORTBREHD20.ass'),
  //   ...readFile('24.S03E01.1080p.BluRay.x264-SHORTBREHD21.ass'),
  //   ...readFile('24.S03E01.1080p.BluRay.x264-SHORTBREHD22.ass'),
  //   ...readFile('24.S03E01.1080p.BluRay.x264-SHORTBREHD23.ass'),
  //   ...readFile('24.S03E01.1080p.BluRay.x264-SHORTBREHD24.ass'),
  // ];

  result.forEach((item, idx) => {
    fs.writeFileSync(`./results/24/Season3/S03E${(idx + 1).toString().padStart(2, '0')}.txt`, item.join('\n'), {
      flag: 'w',
    });
  });

  // const array = _.orderBy(Array.from(new Set(result)));

  // fs.writeFileSync(`./results/24/Season2/24.S03E01.1080p.BluRay.x264-SHORTBREHD99.txt`, array.join('\n'), {
  //   flag: 'w',
  // });
};

start();
