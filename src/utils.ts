export const convert = (origin: string): string => {
  return '';
};

const vowel = ['a', 'e', 'i', 'o', 'u'];
const esRules1 = ['s', 'z', 'sh', 'ch', 'x'];
const excepts = ['unimpeded', 'angeles', 'morning', 'species', 'sometimes', 'unsubstantiated', 'undying', 'clothes'];

export const convert2 = (origin: string): string => {
  if (excepts.includes(origin)) return origin;
  if (origin.endsWith('thing')) return origin;
  if (origin.endsWith('oceed')) return origin;
  if (origin.endsWith('ss')) return origin;

  if (origin.endsWith('ing')) {
    const d = origin.charAt(origin.length - 4);
    const e = origin.charAt(origin.length - 5);
    const f = origin.charAt(origin.length - 6);
    const de = `${e}${d}`;
    const ef = `${f}${e}`;
    const edf = `${f}${e}${d}`;

    if (['el', 'im', 'ff', 'ss', 'ch', 'ay'].includes(de)) {
      return `${origin.substring(0, origin.length - 3)}`;
    }

    if (['eak'].includes(edf)) {
      return `${origin.substring(0, origin.length - 3)}`;
    }

    if (d === e) {
      return `${origin.substring(0, origin.length - 4)}`;
    }

    if (d === 'c') {
      if (['n', 'a', 'r'].includes(e)) {
        return `${origin.substring(0, origin.length - 3)}e`;
      }
    }

    if (d === 'd') {
      if (['ea', 'oa'].includes(`${f}${e}`)) {
        return `${origin.substring(0, origin.length - 3)}`;
      }

      if (e === 'a') {
        return `${origin.substring(0, origin.length - 3)}e`;
      }
    }

    if (d === 't') {
      if (vowel.includes(e) && !(e === 'i' || `${f}${e}` === 'ea')) {
        return `${origin.substring(0, origin.length - 3)}e`;
      }
    }

    if (d === 'y') {
      return `${origin.substring(0, origin.length - 4)}ie`;
    }

    if (['ag', 'ak', 'ng', 'rg', 'bl'].includes(de)) {
      return `${origin.substring(0, origin.length - 3)}e`;
    }

    if (d === 'r') {
      // informed
      if (['e'].includes(e)) {
        return `${origin.substring(0, origin.length - 3)}`;
      }

      if (['ea'].includes(ef)) {
        return `${origin.substring(0, origin.length - 3)}`;
      }

      // injured
      if (['u', 'a'].includes(e)) {
        return `${origin.substring(0, origin.length - 3)}e`;
      }
    }

    if (['s', 'm', 'z', 'v'].includes(d)) {
      return `${origin.substring(0, origin.length - 3)}e`;
    }

    return `${origin.substring(0, origin.length - 3)}`;
  }

  if (origin.endsWith('es')) {
    const c = origin.charAt(origin.length - 3);
    const d = origin.charAt(origin.length - 4);
    const cd = `${d}${c}`;

    if (['us'].includes(cd)) {
      return `${origin.substring(0, origin.length - 1)}`;
    }

    if (esRules1.includes(c) || esRules1.includes(`${d}${c}`)) {
      return `${origin.substring(0, origin.length - 2)}`;
    }

    if (c === 'o' && !vowel.includes(d)) {
      return `${origin.substring(0, origin.length - 2)}`;
    }

    if (c === 'i' && !vowel.includes(d)) {
      return `${origin.substring(0, origin.length - 3)}y`;
    }

    if (c === 'v') {
      // if (!vowel.includes(d)) {
      //   return `${origin.substring(0, origin.length - 3)}fe`;
      // }
    }

    // angeles
    if (c === 'l') {
    }

    return `${origin.substring(0, origin.length - 1)}`;
  }

  if (origin.endsWith('ed')) {
    const c = origin.charAt(origin.length - 3);
    const d = origin.charAt(origin.length - 4);
    const e = origin.charAt(origin.length - 5);

    // ied
    if (c === 'i') {
      return `${origin.substring(0, origin.length - 3)}y`;
    }

    if (`${d}${c}` === 'ss' || `${d}${c}` === 'ch') {
      return `${origin.substring(0, origin.length - 2)}`;
    }

    // hopped
    if (c === d && vowel.includes(e)) {
      return `${origin.substring(0, origin.length - 3)}`;
    }

    if (['ead', 'oad'].includes(`${e}${d}${c}`)) {
      return `${origin.substring(0, origin.length - 2)}`;
    }

    if (['ac', 'ad', 'ag', 'bl', 'gl'].includes(`${d}${c}`)) {
      return `${origin.substring(0, origin.length - 1)}`;
    }

    if (['nc', 'ng', 'rc', 'lv', 'ud', 'od'].includes(`${d}${c}`)) {
      return `${origin.substring(0, origin.length - 1)}`;
    }

    if (['rg', 'is', 'iv', 'iz', 'us', 'os', 'ps', 'yz'].includes(`${d}${c}`)) {
      return `${origin.substring(0, origin.length - 1)}`;
    }

    if (c === 'g') {
      if (['n', 'r', 'a'].includes(d)) {
        return `${origin.substring(0, origin.length - 1)}`;
      }
    }

    if (c === 'l') {
      // detailed
      if (d === 'i' && !vowel.includes(e)) {
        return `${origin.substring(0, origin.length - 1)}`;
      }
    }

    if (c === 'r') {
      // informed
      if (['e'].includes(d)) {
        return `${origin.substring(0, origin.length - 2)}`;
      }

      // injured
      if (['u', 'a'].includes(d)) {
        return `${origin.substring(0, origin.length - 1)}`;
      }
    }

    if (c === 't') {
      if (['a', 'i'].includes(d) && `${e}${d}` !== 'ai') {
        return `${origin.substring(0, origin.length - 1)}`;
      }

      if (['u'].includes(d)) {
        return `${origin.substring(0, origin.length - 1)}`;
      }
    }

    if (vowel.includes(c)) {
      return `${origin.substring(0, origin.length - 1)}`;
    }

    return `${origin.substring(0, origin.length - 2)}`;
  }

  if (origin.endsWith('s')) {
    const b = origin.charAt(origin.length - 2);

    if (vowel.includes(b)) {
      return origin;
    }

    return `${origin.substring(0, origin.length - 1)}`;
  }

  return origin;
};

// console.log('discovered', convert2('discovered'));
// console.log('triple-sourced', convert2('triple-sourced'));
// console.log('injured', convert2('injured'));
// console.log('analyzed', convert2('analyzed'));
// console.log('operating', convert2('operating'));
// console.log('operated', convert2('operated'));
// console.log('leveled', convert2('leveled'));
// console.log('united', convert2('united'));
// console.log('recognised', convert2('recognised'));
// console.log('awaiting', convert2('awaiting'));
// console.log('changed', convert2('changed'));
// console.log('proofing', convert2('proofing'));
// console.log('seating', convert2('seating'));
// console.log('rerouted', convert2('rerouted'));
// console.log('resulted', convert2('resulted'));
// console.log('wanted', convert2('wanted'));
// console.log('listening', convert2('listening'));
// console.log('listened', convert2('listened'));
// console.log('compiled', convert2('compiled'));
// console.log('issued', convert2('issued'));
// console.log('convinced', convert2('convinced'));
// console.log('waited', convert2('waited'));
// console.log('belonging', convert2('belonging'));
// console.log('challenging', convert2('challenged'));
// console.log('changing', convert2('changing'));
// console.log('charges', convert2('charges'));
// console.log('collapsed', convert2('collapsed'));
// console.log('collapsing', convert2('collapsing'));

console.log('shaking', convert2('shaking'));

// man→men
// woman→women
// child→children
// mouse→mice
// tooth→teeth
// knife→knives
// life→lives
// foot→feet
// person→people
// a e i o u
