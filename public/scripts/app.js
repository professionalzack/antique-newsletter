const userList = {
    method: 'GET',
    url: 'api/users',
    error: err => console.log(err),
    success: handleSuccess
}

function handleSuccess(data){
    console.log(data)



    data.forEach(user => {
        $('.user-list').append(`<li>${user.firstName} ${user.lastName}   ${user.email}     interested in ${user.topics.join(', ')}</li>`)
    })
}

$.ajax(userList);