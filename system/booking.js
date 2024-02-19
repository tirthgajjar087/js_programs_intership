


$(document).ready(function () {

    let str = '';
    let seatPrice;

    for (let i = 1; i <= 50; i++) {

        if (i >= 1 && i <= 10) {
            seatPrice = 50;
            total = 0;
        }
        else if (i > 10 && i <= 20) {
            seatPrice = 100;
            total = 0;
        }
        else if (i > 20 && i <= 40) {
            seatPrice = 150;
            total = 0;
        }
        else {
            seatPrice = 200;
            total = 0;
        }

        str += `<label for="seat${i}"> <input class="seat_checkbox" type="checkbox" name="seats" id="seat${i}" data-price="${seatPrice}" />${i}</label>`

    }


    $('#left_side_details').html(str)
    // console.log($('.seat_checkbox'))


    const updateSeats = () => {

        let seatStr = ''
        let hasSeat = false;


        let main_total = 0;

        $('.seat_checkbox').each(function (ele) {

            let inputEle = $('.seat_checkbox')[ele];

            // console.log("Main ----", inputEle);



            if (inputEle.checked) {
                let price = $(inputEle).data('price')

                seatStr += `<div class="seat_wrapper">
                <table>
                    <tr>
                        <td>  <h4>Seat-${ele + 1}</h4></td>
                        <td>  <h4> ₹${price} </h4>   </td>
                    
                    </tr>
                </table>

                </div>`

                main_total += price
                hasSeat = true;
                console.log("Main seat str--:", seatStr)


            }

        })

        $('#total_price').html(`Total price -: ${main_total}`)
        $rightSide = $('.right_side_details')

        if (hasSeat) {
            $rightSide.removeClass('hide')
        } else {
            $rightSide.addClass('hide')
        }


        $('.selected_list').html(seatStr)
    }


    $('.seat_checkbox').on('change', function () {
        $(this).parent().toggleClass('active')
        updateSeats()

    })


})

