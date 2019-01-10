export const API = 'http://localhost:3001'

export const updateList = list => list.map(item => ({
    key: item.id,
    children: updateList(item.childNetworkNodes),
    title: item.title
}))

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