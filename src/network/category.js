import request from './request'


export function getCategoryData() {
  return request({
    url: '/category'
  })
}

export function getSubCategory(maitKey) {
  return request({
    url:'/subcategory',
    params: {
      maitKey
    }
  })
}

export function getSubCategoryData(miniWallkey, type) {
  return request({
    url:'/subcategory/detail',
    params: {
      miniWallkey,
      type
    }
  })
}

