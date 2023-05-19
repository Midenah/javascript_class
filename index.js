const isFemale = false;
const age = 33;
const fullName = "Adams";

const sportV =[
    5, {netflix: true, wrestling: "fake"},
    "touring",
    "partying",
    [0,1,2,3,4]   
]


function alertUser(event) {
    Swal.fire(
        'The Internet?',
        'That thing is still around?',
        'question'
      );
      console.log(typeof isFemale,
        typeof age,
        typeof fullName,
        typeof sportV)
    };