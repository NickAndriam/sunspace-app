import axios from '../../../../http-common'

export const uploadActions = async (image, uploadTo = '') => {
    const fd = new FormData()
    fd.append('image', image);
    const config = {
        headers: {
            'Content-Type': 'multipart/form-data'
        }
    }
    try {
        const res = await axios.post(uploadTo, fd, config)
        console.log('here is what I am saying', res.data)

    } catch (err) {
        console.log(err)
    }
}