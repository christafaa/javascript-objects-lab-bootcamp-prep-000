var recipes = {};

function updateObjectWithKeyAndValue(object,key, value) {
  return Object.assign({}, object, object[key] = value);
}

