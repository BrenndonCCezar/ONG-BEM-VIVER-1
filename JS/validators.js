export function required(value){
  return value != null && String(value).trim() !== "";
}

export function minValue(n){
  return (value)=> Number(value) >= n;
}

export function email(value){
  return /.+@.+\..+/.test(String(value));
}
