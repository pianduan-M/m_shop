export default {
  addCart({ state, commit }, products) {
    
    return new Promise((resolve, reject) => {
      let oldproduct = state.cartList.find(item => item.iid === products.iid)
      if(oldproduct){
        commit('addCount', oldproduct)
        resolve('加入购物车成功')
      }else {
        products.checked = true
        commit('addCart', products)
        resolve('添加购物车成功')
      }
    }) 
  },
  increment({state, commit }, iid){
    const product = state.cartList.find(item => item.iid === iid)
    commit('addCount', product)
  },
  decrement({state, commit }, iid) {
    const product = state.cartList.find(item => item.iid === iid)
    if(product.count <= 1 ) return
    commit('decrement', product)
  },
  changeCheckBox({state, commit }, iid) {
    const product = state.cartList.find(item => item.iid === iid)
    commit('changeCheckBox', product)
  }

}