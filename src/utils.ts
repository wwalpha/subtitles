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

// console.log('kisses', convert('kisses'));
// console.log('dishes', convert('dishes'));
// console.log('mixes', convert('mixes'));
// console.log('teaches', convert('teaches'));
// console.log('goes', convert('goes'));

// console.log('studies', convert('studies'));
// console.log('lilies', convert('lilies'));
// console.log('plays', convert('plays'));

// console.log('liked', convert('liked'));
// console.log('stopped', convert('stopped'));
// console.log('studied', convert('studied'));
// console.log('played', convert('played'));
// console.log('taking', convert('taking'));
// console.log('running', convert('running'));

// console.log('tabs', convert('tabs'));
console.log('accused', convert('accused'));
