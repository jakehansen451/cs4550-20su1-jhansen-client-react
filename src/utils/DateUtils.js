const toLocalDateTime = (isostr) => {
  const dt = new Date(isostr);
  const ds = dt.toDateString();
  const ts = dt.toLocaleTimeString();
  const lastColon = ts.lastIndexOf(':');
  return ds.concat(' ',
      ts.replace(ts.substring(lastColon, lastColon + 3), ' '));
};

const toShortLocalDateTime = (isostr) => {
  const dt = new Date(isostr);
  if (dt.toDateString() !== new Date().toDateString()) return dt.toDateString();
  else {
    const ts = dt.toLocaleTimeString();
    const lastColon = ts.lastIndexOf(':');
    return ts.replace(ts.substring(lastColon, lastColon + 3), ' ');
  }
};

export default {
  toLocalDateTime,
  toShortLocalDateTime
}