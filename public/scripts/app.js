const userList = {
    method: 'GET',
    url: 'api/users',
    error: err => console.log(err),
    success: handleSuccess
}

function handleSuccess(data) {
    console.log(data)



    data.forEach((user, i) => {
        $('.table').append(`<tr><td>${i + 1}</td><td>${user.firstName}</td><td> ${user.lastName}</td>  <td>${user.email}</td>  </tr>`)
    })
}

$.ajax(userList);