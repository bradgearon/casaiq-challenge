export default (name) => {
  const split = name.split(/\W/);
  for (let i = 0; i < split.length; i++) {
    split[i] = `${split[i][0].toUpperCase()}${split[i].substring(1)}`;
  }
  return split.join(' ');
};
