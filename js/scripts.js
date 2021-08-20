// Business Logic
function MovieTicket(movie, cost, time) {
  this.movie = movie;
  this.cost = cost;
  this.time = time;
};

function calculateCost(movie, age, time) {
  const baseCost = 50;
  let ageDiscount = 1;

  if(age <= 14 || age >= 60) {
    ageDiscount = .75
  }

  return ((baseCost * parseInt(movie)) * ageDiscount) + (time * 5);
};

function movieNamer(movieNumber) {
  if (movieNumber === "3") {
    return "A New Movie"
  }

  if (movieNumber === "1") {
    return "A Bad Movie"
  }

  if (movieNumber === "2") {
    return "A Old Movie"
  }
}

function movieTime(time) {
  if (time === "1") {
    return "Morning"
  }

  if (time === "3") {
    return "Afternoon"
  }

  if (time === "2") {
    return "Evening"
  }
}

// UI Logic
function displayTicket(ticket) {
  let output = $("div#output");
  let htmlForTicket = "<li> To see " + ticket.movie + " at the " + ticket.time + " for " + ticket.cost + " rubies";
  output.html(htmlForTicket);
}

$(document).ready(function() {
  $("form").submit(function(event) {
    event.preventDefault();
    const inputtedMovie = $("input:radio[name=movies]:checked").val();
    const inputtedAge = $("input#age").val();
    const inputtedTime = $("#time").val();
    const calculatedCost = calculateCost(inputtedMovie, inputtedAge, inputtedTime);
    const movieName = movieNamer(inputtedMovie);
    const time = movieTime(inputtedTime);
    let newTicket = new MovieTicket(movieName, calculatedCost, time);
    displayTicket(newTicket);
  });
});