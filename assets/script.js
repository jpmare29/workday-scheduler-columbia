
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