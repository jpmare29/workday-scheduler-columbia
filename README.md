# Work Day Scheduler Starter Code

When the user accesses the page the CSS frameworks are called in proper order
finishing with our own custom stylesheet. Next the HTML elements are loaded and 
finally the JS frameworks are loaded before our custom script.

Depending on the time of day the user will see either gray, red, or green
colored divs in the center column denoting past, present, and future respectively.
An array function compares the data-time attribute of each div to the current time
in order to do so.

The user can click into the colored div to add or edit an event.
Once they are done only the sibling save button will be able to employ 
the save logic, setting the event to local storage, and then refresh the page.
This allows the event to be re-edited and will also reset the background
colors based on time.

When the user comes back to the page the script will check local storage
to see if a time slot has an event. If it does not it will initialize
that time to an empty string in local storage. If it does the key value
will be filled into the div text.

https://jpmare29.github.io/workday-scheduler-columbia/

