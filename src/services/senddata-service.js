import axios from 'axios'

var SendDataService = {
    sendData: async function(data) {
        await axios.post(
            process.env.ROOT_API + '/senddata',
            data
        )
    }
}

export default SendDataService
