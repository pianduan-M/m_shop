export default {
  addCart(state, product) {
    state.cartList.push(product)
  },
  addCount(state, product) {
    product.count += 1
  },
  decrement(state, product) {
    product.count -= 1
  },
  changeCheckBox(state, product) {
    product.checked = !product.checked
  },
  allChecked(state, isChecked) {
    if(isChecked) {
      state.cartList.forEach(item => {
        item.checked = false
      });
    }else {
      state.cartList.forEach(item => {
        item.checked = true
      });
    }
  },
  handleSelectedText(state, value) {
    state.selectedText = value
  }
}