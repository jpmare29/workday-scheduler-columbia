
const newTime = moment().hour();
const displayDate = moment().format('MMM Do YYYY');
$('#currentDay').text(displayDate);

const $9AmDiv = $('#row1');
const $10AmDiv = $('#row2');
const $11AmDiv = $('#row3');
const $12PmDiv = $('#row4');
const $1PmDiv = $('#row5');
const $2PmDiv = $('#row6');
const $3PmDiv = $('#row7');
const $4PmDiv = $('#row8');
const $5PmDiv = $('#row9');


const testArray = [$9AmDiv, $10AmDiv, $11AmDiv, $12PmDiv, $1PmDiv, $2PmDiv, $3PmDiv, $4PmDiv, $5PmDiv];

console.log($9AmDiv.attr('id'));

localStorage.setItem($9AmDiv.attr('id'), $9AmDiv.children('.col-10').text());
console.log(localStorage.getItem($9AmDiv.attr('id')));

testArray.forEach(element => {

    let query = element.data('time');
    if (query < newTime) {
        element.children('.col-10').addClass('past');
    } else if (query === newTime) {
        element.children('.col-10').addClass('present');
    } else {
        element.children('.col-10').addClass('future');
    }
});

$('.col-10').on('click', event => {
    const $modifier = $(event.currentTarget)
    $modifier.siblings('.saveBtn').addClass('active');
    console.log($modifier.siblings('.saveBtn'));
    let initialText = $modifier.text();
    let $textArea = $("<textarea class='col-10'></textarea>" );
    $textArea.text(initialText);
    $modifier.replaceWith($textArea);
    $textArea.focus();
    $('.active').on('click', event => {
        let savedText = $(event.currentTarget).siblings('.col-10').val();
        let $newDiv = $("<div class='col-10'></div>")
        $newDiv.text(savedText);
        if ($modifier.hasClass('past')) {
            $newDiv.addClass('past');
        } else if ($modifier.hasClass('present')) {
            $newDiv.addClass('present');
        } else {
            $newDiv.addClass('future');
        }
        $textArea.replaceWith($newDiv);
    })

});

