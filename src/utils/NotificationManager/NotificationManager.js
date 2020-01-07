import * as Toastr from 'toastr'
import '../../../node_modules/toastr/build/toastr.css'

const NotificationManager = {
  showSuccessNotification: (title, message) => {
    Toastr.success(title, message)
  },
  showWarnNotification: (title, message) => {
    Toastr.warning(title, message)
  },
  showErrorNotification: (title, message) => {
    Toastr.error(title, message)
  },
  showInfoNotification: (title, message) => {
    Toastr.info(title, message)
  },
}

export default NotificationManager
