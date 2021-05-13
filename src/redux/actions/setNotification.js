const setNotification = (isOpen, msg) => {
    return {
        type: 'success',
        isOpen: isOpen,
        msg: msg,
        status: 1
    },
    {
        type: 'error',
        isOpen: isOpen,
        msg: msg,
        status: 0
    }
}
export default setNotification