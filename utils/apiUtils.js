export function createApiQueryString(page, size = 6, search) {
  let queryStr = 'https://dummyjson.com/users'
  let queryCount = 0

  if (search) {
    queryStr += `/search?q=${search}`
    queryCount += 1
  }

  if (size) {
    if (queryCount > 0) {
      queryStr += '&'
    } else {
      queryStr += '?'
    }
    queryCount += 1
    queryStr += `limit=${size}`
  }

  if (page) {
    if (queryCount > 0) {
      queryStr += '&'
    } else {
      queryStr += '?'
    }
    queryCount += 1
    queryStr += `skip=${(page - 1) * size}`
  }

  return queryStr
}

export function createURLPath(searchText, perPage, currentPage) {
  let path = '/dashboard/students'

  const params = new URLSearchParams()

  if (searchText) {
    params.set('search', searchText)
  }
  params.set('size', perPage)
  params.set('page', currentPage)

  const queryString = params.toString()
  if (queryString) {
    path += `?${queryString}`
  }

  return path
}
