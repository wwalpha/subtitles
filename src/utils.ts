export const convert = (origin: string): string => {
  if (origin.endsWith('angeles')) return origin;
  if (origin.endsWith('virus')) return origin;
  if (origin.endsWith('morning')) return origin;
  if (origin.endsWith('agree')) return origin;
  if (origin.endsWith('deed')) return origin;
  if (origin.endsWith('called')) return `${origin.substring(0, origin.length - 2)}`;
  if (origin.endsWith('thing')) return origin;

  if (origin.endsWith('ocused')) return `${origin.substring(0, origin.length - 2)}`;
  if (origin.endsWith('ocusing')) return `${origin.substring(0, origin.length - 3)}`;
  if (origin.endsWith('ccused')) return `${origin.substring(0, origin.length - 1)}`;
  if (origin.endsWith('ccusing')) return `${origin.substring(0, origin.length - 3)}e`;

  if (origin.endsWith('ailed')) return `${origin.substring(0, origin.length - 2)}`;

  if (origin.endsWith('rases')) return `${origin.substring(0, origin.length - 1)}`;
  if (origin.endsWith('eating')) return `${origin.substring(0, origin.length - 3)}`;

  if (origin.endsWith('ering')) return `${origin.substring(0, origin.length - 3)}`;
  if (origin.endsWith('ening')) return `${origin.substring(0, origin.length - 3)}`;

  if (origin.endsWith('rning')) return `${origin.substring(0, origin.length - 3)}`;

  if (origin.endsWith('pping')) return `${origin.substring(0, origin.length - 4)}`;
  if (origin.endsWith('pped')) return `${origin.substring(0, origin.length - 3)}`;

  if (origin.endsWith('tting')) return `${origin.substring(0, origin.length - 4)}`;
  if (origin.endsWith('ssing')) return `${origin.substring(0, origin.length - 3)}`;
  if (origin.endsWith('lling')) return `${origin.substring(0, origin.length - 4)}`;

  if (origin.endsWith('ulled')) return `${origin.substring(0, origin.length - 3)}`;
  if (origin.endsWith('alled')) return `${origin.substring(0, origin.length - 3)}`;
  if (origin.endsWith('olled')) return `${origin.substring(0, origin.length - 3)}`;
  if (origin.endsWith('elled')) return `${origin.substring(0, origin.length - 3)}`;

  if (origin.endsWith('rred')) return `${origin.substring(0, origin.length - 3)}`;

  if (origin.endsWith('uding')) return `${origin.substring(0, origin.length - 3)}e`;
  if (origin.endsWith('uded')) return `${origin.substring(0, origin.length - 1)}`;

  if (origin.endsWith('aging')) return `${origin.substring(0, origin.length - 3)}e`;
  if (origin.endsWith('aged')) return `${origin.substring(0, origin.length - 1)}`;

  if (origin.endsWith('eging')) return `${origin.substring(0, origin.length - 3)}e`;
  if (origin.endsWith('eged')) return `${origin.substring(0, origin.length - 1)}`;

  if (origin.endsWith('rging')) return `${origin.substring(0, origin.length - 3)}e`;
  if (origin.endsWith('rged')) return `${origin.substring(0, origin.length - 1)}`;

  if (origin.endsWith('ating')) return `${origin.substring(0, origin.length - 3)}e`;
  if (origin.endsWith('ated')) return `${origin.substring(0, origin.length - 1)}`;

  if (origin.endsWith('using')) return `${origin.substring(0, origin.length - 3)}e`;
  if (origin.endsWith('used')) return `${origin.substring(0, origin.length - 1)}`;

  if (origin.endsWith('ving')) return `${origin.substring(0, origin.length - 3)}e`;
  if (origin.endsWith('ved')) return `${origin.substring(0, origin.length - 1)}`;

  if (origin.endsWith('ping')) return `${origin.substring(0, origin.length - 3)}e`;
  if (origin.endsWith('sing')) return `${origin.substring(0, origin.length - 3)}e`;
  if (origin.endsWith('ring')) return `${origin.substring(0, origin.length - 3)}e`;

  if (origin.endsWith('iked')) return `${origin.substring(0, origin.length - 1)}`;
  if (origin.endsWith('iled')) return `${origin.substring(0, origin.length - 1)}`;

  if (origin.endsWith('ised')) return `${origin.substring(0, origin.length - 1)}`;
  if (origin.endsWith('ased')) return `${origin.substring(0, origin.length - 1)}`;

  if (origin.endsWith('rced')) return `${origin.substring(0, origin.length - 1)}`;
  if (origin.endsWith('nced')) return `${origin.substring(0, origin.length - 1)}`;
  if (origin.endsWith('iced')) return `${origin.substring(0, origin.length - 1)}`;

  if (origin.endsWith('uted')) return `${origin.substring(0, origin.length - 1)}`;

  if (origin.endsWith('ured')) return `${origin.substring(0, origin.length - 1)}`;
  if (origin.endsWith('ired')) return `${origin.substring(0, origin.length - 1)}`;

  if (origin.endsWith('reed')) return `${origin.substring(0, origin.length - 1)}`;

  if (origin.endsWith('aced')) return `${origin.substring(0, origin.length - 1)}`;
  if (origin.endsWith('aped')) return `${origin.substring(0, origin.length - 1)}`;
  if (origin.endsWith('ared')) return `${origin.substring(0, origin.length - 1)}`;

  if (origin.endsWith('osed')) return `${origin.substring(0, origin.length - 1)}`;
  if (origin.endsWith('yzed')) return `${origin.substring(0, origin.length - 1)}`;

  if (origin.endsWith('gged')) return `${origin.substring(0, origin.length - 3)}`;
  if (origin.endsWith('eged')) return `${origin.substring(0, origin.length - 1)}`;

  if (origin.endsWith('nged')) return `${origin.substring(0, origin.length - 1)}`;
  if (origin.endsWith('dged')) return `${origin.substring(0, origin.length - 1)}`;

  if (origin.endsWith('sued')) return `${origin.substring(0, origin.length - 1)}`;

  // if (origin.endsWith('rved')) return `${origin.substring(0, origin.length - 1)}`;
  // if (origin.endsWith('lved')) return `${origin.substring(0, origin.length - 1)}`;

  if (origin.endsWith('shes')) return `${origin.substring(0, origin.length - 4)}sh`;
  if (origin.endsWith('ches')) return `${origin.substring(0, origin.length - 4)}ch`;
  if (origin.endsWith('rges')) return `${origin.substring(0, origin.length - 1)}`;

  if (origin.endsWith('xing')) return `${origin.substring(0, origin.length - 3)}`;

  if (origin.endsWith('king') || origin.endsWith('ting')) {
    return `${origin.substring(0, origin.length - 3)}`;
  }

  if (origin.endsWith('ing')) {
    const a = origin.substring(origin.length - 5, origin.length - 4);
    const b = origin.substring(origin.length - 4, origin.length - 3);

    if (a === b) {
      return `${origin.substring(0, origin.length - 4)}`;
    }

    return `${origin.substring(0, origin.length - 3)}`;
  }

  if (origin.endsWith('ies')) return `${origin.substring(0, origin.length - 3)}y`;
  if (origin.endsWith('ses')) return `${origin.substring(0, origin.length - 3)}s`;
  if (origin.endsWith('xes')) return `${origin.substring(0, origin.length - 3)}x`;
  if (origin.endsWith('oes')) return `${origin.substring(0, origin.length - 3)}o`;
  if (origin.endsWith('ves')) return `${origin.substring(0, origin.length - 1)}`;

  if (origin.endsWith('ied')) return `${origin.substring(0, origin.length - 3)}y`;
  if (origin.endsWith('sed')) return `${origin.substring(0, origin.length - 2)}`;
  if (origin.endsWith('xed')) return `${origin.substring(0, origin.length - 2)}`;
  if (origin.endsWith('oed')) return `${origin.substring(0, origin.length - 2)}`;
  if (origin.endsWith('ted')) return `${origin.substring(0, origin.length - 2)}`;
  if (origin.endsWith('zed')) return `${origin.substring(0, origin.length - 2)}`;
  if (origin.endsWith('ked')) return `${origin.substring(0, origin.length - 2)}`;
  if (origin.endsWith('led')) return `${origin.substring(0, origin.length - 2)}`;
  if (origin.endsWith('ped')) return `${origin.substring(0, origin.length - 2)}`;

  if (origin.endsWith('ed')) {
    const a = origin.substring(origin.length - 4, origin.length - 3);
    const b = origin.substring(origin.length - 3, origin.length - 2);

    if (a === b) {
      return `${origin.substring(0, origin.length - 3)}`;
    }

    return `${origin.substring(0, origin.length - 2)}`;
  }

  if (origin.endsWith('tus')) return origin;
  if (origin.endsWith('ous')) return origin;
  if (origin.endsWith('pus')) return origin;
  if (origin.endsWith('ris')) return origin;

  if (origin.endsWith('ys')) return `${origin.substring(0, origin.length - 2)}y`;
  if (origin.endsWith('ss')) return origin;

  if (origin.endsWith('s')) return `${origin.substring(0, origin.length - 1)}`;

  return '';
};

const vowel = ['a', 'e', 'i', 'o', 'u'];
const esRules1 = ['s', 'z', 'sh', 'ch', 'x'];

export const convert2 = (origin: string): string => {
  if (origin.endsWith('morning')) return origin;
  if (origin.endsWith('thing')) return origin;
  if (origin.endsWith('ss')) return origin;

  if (origin.endsWith('ing')) {
    const d = origin.charAt(origin.length - 4);
    const e = origin.charAt(origin.length - 5);
    const f = origin.charAt(origin.length - 6);

    if (`${e}${d}` === 'ss' || `${e}${d}` === 'ch') {
      return `${origin.substring(0, origin.length - 3)}`;
    }

    if (d === e) {
      return `${origin.substring(0, origin.length - 4)}`;
    }

    if (d === 'd') {
      if (`${f}${e}` === 'ea') {
        return `${origin.substring(0, origin.length - 3)}`;
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

    if (`${e}${d}` === 'el') {
      return `${origin.substring(0, origin.length - 3)}`;
    }

    if (d === 'g') {
      if (['n', 'r'].includes(e)) {
        return `${origin.substring(0, origin.length - 3)}e`;
      }
    }

    if (d === 's') {
      return `${origin.substring(0, origin.length - 3)}e`;
    }

    return `${origin.substring(0, origin.length - 3)}`;
  }

  if (origin.endsWith('es')) {
    const c = origin.charAt(origin.length - 3);
    const d = origin.charAt(origin.length - 4);

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

    if (c === 'g') {
      // if (d === 'n') {
      //   return `${origin.substring(0, origin.length - 1)}`;
      // }
    }

    return `${origin.substring(0, origin.length - 1)}`;
  }

  if (origin.endsWith('ed')) {
    const c = origin.charAt(origin.length - 3);
    const d = origin.charAt(origin.length - 4);
    const e = origin.charAt(origin.length - 5);

    // ied
    if (c === 'i' && !vowel.includes(d)) {
      return `${origin.substring(0, origin.length - 3)}y`;
    }

    if (`${d}${c}` === 'ss' || `${d}${c}` === 'ch') {
      return `${origin.substring(0, origin.length - 2)}`;
    }

    // hopped
    if (c === d && vowel.includes(e)) {
      return `${origin.substring(0, origin.length - 3)}`;
    }

    // analyzed
    if (c === 'z' && d === 'y') {
      return `${origin.substring(0, origin.length - 1)}`;
    }

    if (c === 'd') {
      if (['u', 'o'].includes(d)) {
        return `${origin.substring(0, origin.length - 1)}`;
      }
    }

    if (c === 'g') {
      if (['n', 'r'].includes(d)) {
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
      if (d === 'e') {
        return `${origin.substring(0, origin.length - 2)}`;
      }

      // injured
      if (d === 'u') {
        return `${origin.substring(0, origin.length - 1)}`;
      }
    }

    if (c === 't') {
      if (['a', 'i'].includes(d) && `${e}${d}` !== 'ai') {
        return `${origin.substring(0, origin.length - 1)}`;
      }

      if (['n', 'u'].includes(d)) {
        if (!vowel.includes(e)) {
          return `${origin.substring(0, origin.length - 1)}`;
        }
      }
    }

    if (c === 's') {
      if (['i', 'u', 'o', 'p'].includes(d)) {
        return `${origin.substring(0, origin.length - 1)}`;
      }
    }

    if (c === 'c') {
      if (['r', 'n'].includes(d)) {
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
console.log('feeding', convert2('feeding'));
console.log('feeds', convert2('feeds'));

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
