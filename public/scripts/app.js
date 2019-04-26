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

function handleSuccess(data) {
    console.log(data)



    data.forEach((user, i) => {
        $('.table').append(`<tr scope ="row"></tr>
                            <th>${user.firstName}     ${user.lastName}</th>
                            <th>${user.email}</th>
                            `)
    })
}

$.ajax(userList);


$('form').on('submit', event => {
    event.preventDefault();

    carlosSubmit();

    setTimeout(() => {
        $('#newsletterModal').modal('hide')
    }, 3000);

    console.log('submittted')
    let formData = {
        method: "POST",
        url: 'api/users',
        error: err => console.log(err),
        success: json => console.log(json),
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
    if ($input[0].name === 'firstName' || $input[0].name === 'lastName') {
        console.log('yep ' + $input.val())
        if (($input.val().length > 1) && $input.val().split(/([0-9]+)/).length === 1) {
            $(`#${$input[0].name}Check`).attr('class', 'fas fa-check-circle')
            console.log(` all good ${$input[0].name}Check`);
            console.log($(`#${$input[0].name}Check`));

            $input.removeClass('error')
            inputLock[`${$input[0].name}Check`] = false;
        } else {
            $(`#${$input[0].name}Check`).attr('class', 'fas fa-times-circle')
            $input.addClass('error')
            inputLock[`${$input[0].name}Check`] = true;

        }
        $(`#${$input[0].name}Check`).css('opacity', 100)
    }
    if ($input[0].name === 'email') {
        var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        var isValidEmailAddress = re.test($input.val());
        if (!isValidEmailAddress) {
            $(`#${$input[0].name}Check`).attr('class', 'fas fa-times-circle');

        } else {
            $(`#${$input[0].name}Check`).attr('class', 'fas fa-check-circle')
            inputLock[`${$input[0].name}Check`] = false;


        }
        $(`#${$input[0].name}Check`).css('opacity', 100)
            // if ($('form-control').forEach(input => console.log(!input.hasClass('error'))) === 3) {
            //     $('.btn-black').removeClass('disabled')
    }

    if (!inputLock.firstNameCheck & !inputLock.lastNameCheck && !inputLock.emailCheck) {
        console.log('first name check')
        $('.btn-black').removeClass('disabled')

    }
})


function carlosSubmit() {
    if (!$(this).hasClass('loading')) {
        $(this).addClass('loading');
        let self = this;

        setTimeout(function() {
            $(self).removeClass('loading');
            $(self).text('checkmark');
        }, 1000);

        setTimeout(function() {
            $(self).text('SUBMIT');
        }, 3000);
    }
};