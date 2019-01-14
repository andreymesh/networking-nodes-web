export const API = 'http://localhost:3001'

export const updateList = (list, data) => (
    list && list.map(item => {
        if (item.childNetworkNodes) {
            if (item.id === data.id) {
                item = { ...data }
            }
            item.childNetworkNodes = updateList(item.childNetworkNodes, data)
            return item
        }
    })
)

export const addElement = (list, data) => {
    if (data.parentId) {
        list = list.map(item => {
            if (item.id === data.parentId) {
                item.childNetworkNodes.push(data)
            }
            item.childNetworkNodes = addElement(item.childNetworkNodes, data)
            return item
        })
    }
    else {
        list.push(data)
    }
    return list
}

export const deleteElement = (list, data) => {
    if (data.parentId) {
        list = list.map(item => {
            if (item.id === data.parentId) {
                item.childNetworkNodes = item.childNetworkNodes.filter(item => item.id !== data.id)
            }
            item.childNetworkNodes = deleteElement(item.childNetworkNodes, data)
            return item
        })
    }
    else {
        list = list.filter(item => item.id !== data.id)
    }
    return list
}

const ipAddressValidation = value =>
    value &&
        !/\b(?:\d{1,3}\.){3}\d{1,3}\b/.test(value)
        ? 'Неверный IP-адресс'
        : undefined

const webPortValidation = value => value && !/^[0-9]{1,5}$/.test(value) ? 'Неверный Web-port' : undefined

const networkNodeValidation = value =>
    value && value.length > 30
        ? 'Неверное имя узла (max длина имени = 30 символам)' : undefined

export const networkNode = [
    { id: 0, title: 'Имя Узла', name: 'title', validateField: networkNodeValidation },
    { id: 1, title: 'IP-адрес', name: 'IPAddress', validateField: ipAddressValidation },
    { id: 2, title: 'Web-узел', name: 'webPort', validateField: webPortValidation }
]