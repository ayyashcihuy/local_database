getPagination = (page, size) => {
  const limit = size ? +size : 12;
  const offset = page ? page * limit : 0;
  return { limit, offset };
};

getPagingData = (data, page, limit) => {
  const { count: totalItems, rows: news } = data;
  const currentPage = page ? +page : 0;
  const totalPages = Math.ceil(totalItems / limit);
  return { totalItems, news, totalPages, currentPage };
};

module.exports = { getPagination, getPagingData };
