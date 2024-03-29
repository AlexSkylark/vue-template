import 'izitoast/dist/css/izitoast.min.css'
import iZtoast from 'izitoast'

const toast = {
    error: (message, title = 'Error') => {
        return iZtoast.error({
            title: title,
            message: message,
            position: 'topCenter'
        })
    },
    success: (message, title = 'Success') => {
        return iZtoast.success({
            title: title,
            message: message,
            position: 'topCenter'
        })
    }
}

export default toast
