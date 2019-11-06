const apiCalls = {
getAllObjects () {
    return fetch("http://localhost:8088/employees?_expand=department&_expand=computer")
    .then(response => response.json())
}
}
export default apiCalls