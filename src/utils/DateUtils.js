const toLocalDateTime = (isostr) => {
  const dt = new Date(isostr);
  const datestr = dt.toDateString();
  const timestr = dt.toLocaleTimeString();
  return datestr.concat(' ', timestr.replace(timestr.substring(5, 8), ''));
};

export default {
  toLocalDateTime
}