export function checkAllPropertiesAreNotNull(object: any, cb: () => any) {
  Object.values(object).forEach((value) => {
    if (typeof value === "object" && !Array.isArray(value)) {
      checkAllPropertiesAreNotNull(value, cb);
    } else if (Array.isArray(value) && value.length > 0) {
      value.forEach((v) => {
        checkAllPropertiesAreNotNull(v, cb);
      });
    } else if (value != null) {
      cb();
    } else {
      console.log("callback", value);
    }
  });
}
