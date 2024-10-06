
let users = []

export async function fetchUsers() {
    let response = await fetch('https://jsonplaceholder.typicode.com/users');
    users = await response.json();
    let names = users.map(user => user.name);

    // console.log(names)

    return names
}
fetchUsers()
