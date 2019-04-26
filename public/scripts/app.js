const userList = {
    method: 'GET',
    url: 'api/users',
    error: err => console.log(err),
    success: handleSuccess
}

function handleSuccess(data) {
    console.log(data)



    data.forEach((user, i) => {
        $('.table').append(`<tr scope ="row"></tr>
                            <th>${i + 1}</th>
                            <th>${user.firstName}</th>
                            <th>${user.lastName}</th>
                            <th>${user.email}</th>
                            <th>${user.weekly && 'X' || ''}</th>
                            <th>${user.monthly && 'X' || ''}</th>
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
