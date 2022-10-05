export function checkAllPropertiesAreNotNull(object: any, cb: () => any) {
  Object.values(object).forEach((value) => {
    if (typeof value === "object" && !Array.isArray(value)) {
      checkAllPropertiesAreNotNull(value, cb);
    } else if (Array.isArray(value)) {
      value.forEach((v) => {
        checkAllPropertiesAreNotNull(v, cb);
      });
    } else if (!value) {
      cb();
    }
  });
}
