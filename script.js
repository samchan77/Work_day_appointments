

// Present day:
let currentDay = moment().format("dddd, MMMM")

// Block of time in schedule:
let hour9 = moment().hour(9)
let hour10 = moment().hour(10)
let hour11 = moment().hour(11)
let hour12 = moment().hour(12)
let hour13 = moment().hour(13)
let hour14 = moment().hour(14)
let hour15 = moment().hour(15)
let hour16 = moment().hour(16)
let hour17 = moment().hour(17)

// Array for hours:
let hours = [hour9, hour10, hour11, hour12, hour13, hour14, hour15, hour16, hour17];

// Local storage:
let events9 = JSON.parse(localStorage.getItem('hour9'))  || "";
let events10 = JSON.parse(localStorage.getItem('hour10'))  || "";
let events11 = JSON.parse(localStorage.getItem('hour11')) || "";
let events12 = JSON.parse(localStorage.getItem('hour12')) || "";
let events13 = JSON.parse(localStorage.getItem('hour13')) || "";
let events14 = JSON.parse(localStorage.getItem('hour14')) || "";
let events15 = JSON.parse(localStorage.getItem('hour15')) || "";
let events16 = JSON.parse(localStorage.getItem('hour16')) || "";
let events17 = JSON.parse(localStorage.getItem('hour17')) || "";

// Local storage and time:
$.each(hours, function (index, value) {
    events = [events9, events10, events11, events12, events13, events14, events15, events16, events17]
    $(".container").append("<div class='row'><div class='col-2 hour text-right' id='hour" +
        (index + 9) + "'><span>" + value.format("h A") + "</span></div><div class='col-8 event-group' id='timeblock" +
        (index + 9) + "'><textarea class='events col-12' id='eventblock" + (index + 9) + "'>" + events[index] + "</textarea></div>" +
        "<div class='col-2 saveBtn' id='saveBtn" + (index + 9) + "'><i class='fas fa-save' title='Save Event'></i> <i class='fas fa-trash' title='Remove Event'></i></div></div></div>");
});

// Current day:
$("#currentDay").text(currentDay);

// Present, past, and future time:
let auditTime = function () {
    currentTime = moment().format("hh:mm:ss");
    // $("#currentDay").text(currentTime);

    // For hour 9:
    if (moment().isBetween(hour9, hour10)) {
        $("#timeblock9").addClass("present");
    }
    else if (moment().isAfter(hour10)) {
        $("#timeblock9").addClass("past");
    }
    else {
        $("#timeblock9").addClass("future");
    }

    // For hour 10:
    if (moment().isBetween(hour10, hour11)) {
        $("#timeblock10").addClass("present");
    }
    else if (moment().isAfter(hour11)) {
        $("#timeblock10").addClass("past");
    }
    else {
        $("#timeblock10").addClass("future");
    }

    // For hour 11:
    if (moment().isBetween(hour11, hour12)) {
        $("#timeblock11").addClass("present");
    }
    else if (moment().isAfter(hour12)) {
        $("#timeblock11").addClass("past");
    }
    else {
        $("#timeblock11").addClass("future");
    }

    // For hour 12:
    if (moment().isBetween(hour12, hour13)) {
        $("#timeblock12").addClass("present");
    }
    else if (moment().isAfter(hour13)) {
        $("#timeblock12").addClass("past");
    }
    else {
        $("#timeblock12").addClass("future");
    }

    // For hour 13:
    if (moment().isBetween(hour13, hour14)) {
        $("#timeblock13").addClass("present");
    }
    else if (moment().isAfter(hour14)) {
        $("#timeblock13").addClass("past");
    }
    else {
        $("#timeblock13").addClass("future");
    }

    // For hour 14:
    if (moment().isBetween(hour14, hour15)) {
        $("#timeblock14").addClass("present");
    }
    else if (moment().isAfter(hour15)) {
        $("#timeblock14").addClass("past");
    }
    else {
        $("#timeblock14").addClass("future");
    }

    // For hour 15:
    if (moment().isBetween(hour15, hour16)) {
        $("#timeblock15").addClass("present");
    }
    else if (moment().isAfter(hour16)) {
        $("#timeblock15").addClass("past");
    }
    else {
        $("#timeblock15").addClass("future");
    }

    // For hour 16:
    if (moment().isBetween(hour16, hour17)) {
        $("#timeblock16").addClass("present");
    }
    else if (moment().isAfter(hour17)) {
        $("#timeblock16").addClass("past");
    }
    else {
        $("#timeblock16").addClass("future");
    }

    // For hour 17:
    if (moment().isBetween(hour17, hour18)) {
        $("#timeblock17").addClass("present");
    }
    else if (moment().isAfter(hour18)) {
        $("#timeblock17").addClass("past");
    }
    else {
        $("#timeblock17").addClass("future");
    };
}

// Event function delete:
$("#saveBtn9").on("click", "i.fa-trash", function () {
    localStorage.removeItem("hour9");
    $("#eventblock9").val("");
})
$("#saveBtn10").on("click", "i.fa-trash", function () {
    localStorage.removeItem("hour10");
    $("#eventblock10").val("");
})
$("#saveBtn11").on("click", "i.fa-trash", function () {
    localStorage.removeItem("hour11");
    $("#eventblock11").val("");
})
$("#saveBtn12").on("click", "i.fa-trash", function () {
    localStorage.removeItem("hour12");
    $("#eventblock12").val("");
})
$("#saveBtn13").on("click", "i.fa-trash", function () {
    localStorage.removeItem("hour13");
    $("#eventblock13").val("");
})
$("#saveBtn14").on("click", "i.fa-trash", function () {
    localStorage.removeItem("hour14");
    $("#eventblock14").val("");
})
$("#saveBtn15").on("click", "i.fa-trash", function () {
    localStorage.removeItem("hour15");
    $("#eventblock15").val("");
})
$("#saveBtn16").on("click", "i.fa-trash", function () {
    localStorage.removeItem("hour16");
    $("#eventblock16").val("");
})
$("#saveBtn17").on("click", "i.fa-trash", function () {
    localStorage.removeItem("hour17");
    $("#eventblock17").val("");
})

// Event function save
$("#saveBtn9").on("click", "i.fa-save", function () {
    let event9 = $("#eventblock9").val().trim();
    localStorage.setItem('hour9', JSON.stringify(event9));
})
$("#saveBtn10").on("click", "i.fa-save", function () {
    let event10 = $("#eventblock10").val().trim();
    localStorage.setItem('hour10', JSON.stringify(event10));
})
$("#saveBtn11").on("click", "i.fa-save", function () {
    let event11 = $("#eventblock11").val().trim();
    localStorage.setItem('hour11', JSON.stringify(event11));
})
$("#saveBtn12").on("click", "i.fa-save", function () {
    let event12 = $("#eventblock12").val().trim();
    localStorage.setItem('hour12', JSON.stringify(event12));
})
$("#saveBtn13").on("click", "i.fa-save", function () {
    let event13 = $("#eventblock13").val().trim();
    localStorage.setItem('hour13', JSON.stringify(event13));
})
$("#saveBtn14").on("click", "i.fa-save", function () {
    let event14 = $("#eventblock14").val().trim();
    localStorage.setItem('hour14', JSON.stringify(event14));
})
$("#saveBtn15").on("click", "i.fa-save", function () {
    let event15 = $("#eventblock15").val().trim();
    localStorage.setItem('hour15', JSON.stringify(event15));
})
$("#saveBtn16").on("click", "i.fa-save", function () {
    let event16 = $("#eventblock16").val().trim();
    localStorage.setItem('hour16', JSON.stringify(event16));
})
$("#saveBtn17").on("click", "i.fa-save", function () {
    let event17 = $("#eventblock17").val().trim();
    localStorage.setItem('hour17', JSON.stringify(event17));
})


