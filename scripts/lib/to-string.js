
const toString = (thing, depth) => {

  depth = (depth === undefined)
    ? 1
    : depth;

  let stringed;
  if (thing instanceof Error) {
    stringed = toString.error(thing, depth);

    // } else if (thing instanceof Element) {
    //   stringed = toString.element(thing, depth);

  } else if (typeof thing === 'function') {
    stringed = toString.function(thing, depth);

  } else if (typeof thing === 'string') {
    stringed = toString.string(thing, depth);

  } else if (typeof thing === 'number') {
    stringed = toString.number(thing, depth);

  } else if (typeof thing === 'boolean') {
    stringed = toString.boolean(thing, depth);

  } else if (typeof thing === 'symbol') {
    stringed = toString.symbol(thing, depth);

  } else if (thing === undefined) {
    stringed = toString.undefined(thing, depth);

  } else if (thing === null) {
    stringed = toString.null(thing, depth);

  } else if (Array.isArray(thing)) {
    stringed = toString.array(thing, depth);

    // } else if (thing.constructor.name === 'Object') {
  } else if (thing === Object(thing)) {
    stringed = toString.object(thing, depth);

  } else {
    stringed = '"un-toString-able type"';
  }

  return stringed;
}

toString.indent = (depth) => {
  let indent = '';
  for (let i = 0; i < depth; i++) indent += '  ';
  return indent;
}

toString.object = (obj, depth) => {

  if (Object.keys(obj).length === 0) {
    return '{ }';
  };

  let objStr = '{';

  for (let key in obj) {

    const descriptor = Object.getOwnPropertyDescriptor(obj, key);

    if (descriptor.hasOwnProperty('value')) {
      const keyStr = `\n${toString.indent(depth)}${key}: `;
      const valStr = toString(obj[key], depth + 1);
      objStr += keyStr;
      objStr += valStr;
    }

    if (descriptor.set || descriptor.get) {
      const valStr = toString(obj[key]);
      objStr += valStr;
      objStr += ',';
    }
  }
  objStr += '\n';
  objStr += toString.indent(depth - 1) + '}';

  return objStr;
};

toString.array = (arr, depth) => {

  if (arr.length === 0) {
    return '[ ]';
  }

  let arrStr = '[';
  for (let item of arr) {

    const indentStr = `\n${toString.indent(depth)}`;
    const valStr = toString(item, depth + 1);
    arrStr += indentStr;
    arrStr += valStr;
    arrStr += ',';

  }
  arrStr += '\n';
  arrStr += toString.indent(depth - 1) + ']';

  return arrStr;
};

toString.function = (func, depth) => {
  return func
    .toString()
    .split('\n')
    .join('\n' + toString.indent(depth - 1));
};

toString.string = (val, depth) => {
  return val;
};

toString.boolean = (val) => {
  return String(val);
};

toString.number = (val) => {
  return String(val);
};

toString.symbol = String;

toString.null = (val) => {
  return String(val);
};

toString.undefined = (val) => {
  return String(val);
};

toString.error = (val) => {
  return `${val.name}: ${val.message}`;
};

toString.element = (val, depth) => {
  return val.outerHTML
    .split('\n')
    .join('\n' + toString.indent(depth - 1));
};


module.exports = toString;
