const userList = {
    method: 'GET',
    url: 'api/users',
    error: err => console.log(err),
    success: handleSuccess
}

function handleSuccess(data) {
    console.log(data)



    data.forEach((user, key) => {
        $('.tbody').append(`<th scope ="row">${key}</th>
                            <td>${user.firstName}</td>
                            <td>${user.lastName}</td>
                            <td>${user.email}</td>
                            <td>${user.weekly && 'X' || ''}</td>
                            <td>${user.monthly && 'X' || ''}</td>
                            `)
    })
}

$.ajax(userList);


$('form').on('submit', event=>{
    event.preventDefault();
    console.log('submittted')
    let formData = {
        method: "POST",
        url: 'api/users',
        error: err => console.log(err),
        success: ()=>console.log(data) ,
        data: $('form').serialize()
    }

    $.ajax(formData)
    console.log(formData)
})
