export default (name) => {
  let fixed = '';
  let split = name.split(/\W/);
  for(var i= 0; i < split.length; i++) {
    split[i] = `${split[i][0].toUpperCase()}${split[i].substring(1)}`;
  }
  return split.join(' ');
};