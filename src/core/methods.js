import { isNaN, isFinite, isFloat, isInteger, isFunction, isBoolean, isString, isRegExp, isObject, isError, isTypeError, isEmpty, isNull, isSymbol, isArguments, isElement, isDocument, isWindow, isFormData, isLeapYear, getType, uniqueId, getSize, lastIndexOf, includes, contains, objectAssign, assign, extend, stringToJson, jsonToString, objectKeys, keys, objectValues, values, objectEntries, entries, arrayFirst, first, arrayLast, last, objectEach, arrayEach, each, groupBy, objectMap, clone } from './base'
import { arrayUniq, uniq, arrayUnion, union, arraySort, sort, arrayShuffle, shuffle, arraySample, sample, arraySome, some, arrayEvery, every, arrayFilter, filter, arrayFind, find, arrayMap, map } from './array'
import { timestamp, now, stringToDate, dateToString, getWhatMonth, getWhatWeek, getWhatDay, getDaysOfMonth, getDateDiff } from './date'
import { escape, unescape } from './string'
import { getRandom, arrayMin, min, arrayMax, max } from './number'

export var coreMethods = {
  isNaN: isNaN,
  isFinite: isFinite,
  isFloat: isFloat,
  isInteger: isInteger,
  isFunction: isFunction,
  isBoolean: isBoolean,
  isString: isString,
  isRegExp: isRegExp,
  isObject: isObject,
  isError: isError,
  isTypeError: isTypeError,
  isEmpty: isEmpty,
  isNull: isNull,
  isSymbol: isSymbol,
  isArguments: isArguments,
  isElement: isElement,
  isDocument: isDocument,
  isWindow: isWindow,
  isFormData: isFormData,
  isLeapYear: isLeapYear,
  getType: getType,
  uniqueId: uniqueId,
  getSize: getSize,
  lastIndexOf: lastIndexOf,
  includes: includes,
  contains: contains,
  objectAssign: objectAssign,
  assign: assign,
  extend: extend,
  stringToJson: stringToJson,
  jsonToString: jsonToString,
  objectKeys: objectKeys,
  keys: keys,
  objectValues: objectValues,
  values: values,
  objectEntries: objectEntries,
  entries: entries,
  arrayFirst: arrayFirst,
  first: first,
  arrayLast: arrayLast,
  last: last,
  objectEach: objectEach,
  arrayEach: arrayEach,
  each: each,
  groupBy: groupBy,
  objectMap: objectMap,
  clone: clone,

  arrayUniq: arrayUniq,
  uniq: uniq,
  arrayUnion: arrayUnion,
  union: union,
  arraySort: arraySort,
  sort: sort,
  arrayShuffle: arrayShuffle,
  shuffle: shuffle,
  arraySample: arraySample,
  sample: sample,
  arraySome: arraySome,
  some: some,
  arrayEvery: arrayEvery,
  every: every,
  arrayFilter: arrayFilter,
  filter: filter,
  arrayFind: arrayFind,
  find: find,
  arrayMap: arrayMap,
  map: map,

  timestamp: timestamp,
  now: now,
  stringToDate: stringToDate,
  dateToString: dateToString,
  getWhatMonth: getWhatMonth,
  getWhatWeek: getWhatWeek,
  getWhatDay: getWhatDay,
  getDaysOfMonth: getDaysOfMonth,
  getDateDiff: getDateDiff,

  escape: escape,
  unescape: unescape,

  getRandom: getRandom,
  arrayMin: arrayMin,
  min: min,
  arrayMax: arrayMax,
  max: max
}
