const userList = {
    method: 'GET',
    url: 'api/users',
    error: err => console.log(err),
    success: handleSuccess
}

const inputLock = {
    firstNameCheck: true,
    lastNameCheck: true,
    emailCheck: true
}

function handleSuccess(data){
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



$('form').on('focusout', 'input', event => {
    event.preventDefault();
    const $input = $(event.target)
    console.log($input)
    console.log($input.val().split(/([0-9]+)/).length)
    if ($input[0].name === 'firstName' || $input[0].name === 'lastName'){
        console.log('yep ' + $input.val())
        if (($input.val().length > 1) && $input.val().split(/([0-9]+)/).length === 1) {
            $(`#${$input[0].name}Check`).attr('class', 'fas fa-check-circle')
            console.log(` all good ${$input[0].name}Check`);
            $input.removeClass('error')
            // console.log(`inputCount = ${inputCount}`)
        }else{
            $(`#${$input[0].name}Check`).attr('class', 'fas fa-times-circle')
            $input.addClass('error')

            inputCount--
            // console.log(`inputCount = ${inputCount}`)
        }
        $(`#${$input[0].name}Check`).css('opacity', 100)
    }
    if ($input[0].name === 'email') {
        var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        var isValidEmailAddress = re.test($input.val());
        if (!isValidEmailAddress) {
            $(`#${$input[0].name}Check`).attr('class', 'fas fa-times-circle');
            // inputCount--
            // console.log(`inputCount = ${inputCount}`)
        }else{
            $(`#${$input[0].name}Check`).attr('class', 'fas fa-check-circle')
            // inputCount++
            // console.log(`inputCount = ${inputCount}`)
        }
        $(`#${$input[0].name}Check`).css('opacity', 100)
        if ($('form-control').forEach(input => console.log(!input.hasClass('error'))) === 3){
            $('.btn-black').removeClass('disabled')
        }


    } 
})