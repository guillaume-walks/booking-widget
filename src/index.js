import BookingWidget from './components/BookingWidget.vue'

function install(Vue, options = {}) {
  Vue.component(options.BookingWidget || 'BookingWidget', BookingWidget)
}

export default install

export {
  BookingWidget
}