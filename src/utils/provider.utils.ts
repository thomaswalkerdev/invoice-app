export function UpdateObjInArr(
  array: any[],
  object: any,
  comparatorProp: string
) {
  return array.map((arrayObj) => {
    if (arrayObj[comparatorProp] === object[comparatorProp]) {
      return object;
    }
    return arrayObj;
  });
}

export function RemoveObjInArr(
  array: any[],
  object: any,
  comparatorProp: string
) {
  return array.filter(
    (arrayObj) => arrayObj[comparatorProp] !== object[comparatorProp]
  );
}
