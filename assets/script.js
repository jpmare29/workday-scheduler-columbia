//variable to compare current time to html elemnts data-time
const newTime = moment().hour();

//formatted date for display on page
const displayDate = moment().format('MMM Do YYYY');
$('#currentDay').text(displayDate);

//getting div elements for each row of time
const $9AmDiv = $('#row1');
const $10AmDiv = $('#row2');
const $11AmDiv = $('#row3');
const $12PmDiv = $('#row4');
const $1PmDiv = $('#row5');
const $2PmDiv = $('#row6');
const $3PmDiv = $('#row7');
const $4PmDiv = $('#row8');
const $5PmDiv = $('#row9');

//array for testing div elements against current time later
const testArray = [$9AmDiv, $10AmDiv, $11AmDiv, $12PmDiv, $1PmDiv, $2PmDiv, $3PmDiv, $4PmDiv, $5PmDiv];

//array function to compare current time to div element time
//and set background color accordingly
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

//testing to see if each div has an associated event in localStorage
//if they don't key is initialized to ''
//if they do then the div text is set to the key value
testArray.forEach(element => {
    let testEvent = localStorage.getItem(element.attr('id'));
    if(!testEvent) {
        localStorage.setItem(element.attr('id'), '')
    } else {
        element.children('.col-10').text(testEvent);
    }
})

//logic for changing div to textarea on click and preserving any text inside
//once clicked user can update event inside of the div
//it also activates the save button sibling to the div so that
//the save logic can be employed properly
$('.col-10').on('click', event => {
    let $modifier = $(event.currentTarget)
    $modifier.siblings('.saveBtn').addClass('active');
    let initialText = $modifier.text();
    let $textArea = $("<textarea class='col-10'></textarea>" );
    $textArea.text(initialText);
    $modifier.replaceWith($textArea);
    $textArea.focus();
    //save to localStorage logic and add updated text back to div
    //also added the bckground color back before deciding to refresh the page at the end
    $('.active').on('click', event => {
        let savedText = $(event.currentTarget).siblings('.col-10').val();
        let saveKey = $(event.currentTarget).parent().attr('id');
        localStorage.setItem(saveKey, savedText);
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
        //added a refresh because div could not be re-edited a second time
        //this also removes the active class from the save button
        document.location.reload();
    })

});