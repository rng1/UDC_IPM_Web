function validateForm() {
    var text_input = document.forms["form"]["text-input"].value;
    var date_input = document.forms["form"]["date-input"].value;
    var number_input = document.forms["form"]["number-input"].value;
    var select_input = document.forms["form"]["select-input"].value;
    var birth_data = "";

    if (text_input == "") {
        document.getElementById("name-error").innerHTML = "Name must be filled out";
        //alert("Name must be filled out");
        return false;
    } else if (/[^a-zA-Z\-]/.test(text_input)) {
        document.getElementById("name-error").innerHTML = "Your name must have only letters, not numbers";
        //alert("Your name must have only letters, not numbers");
        return false;
    } else if (number_input > 10 || number_input < 1) {
        document.getElementById("number-error").innerHTML = "Number must be between 1 and 10";
        //alert("Number must be between 1 and 10");
        return false;
    } else {
        date_input ? birth_data = ", birth: " + date_input:

        console.log(date_input);

        document.getElementById("name-error").innerHTML = "";

        let ul = document.getElementsByTagName('ul')[0];
        let li = document.createElement('li')
        ul.appendChild(li).innerHTML ='<img src="media/' + select_input + '.jpg" alt="'+ select_input +'" class="image-responsive"><br>Name: ' + text_input + birth_data + ', number: ' + number_input;

        return true;
    }
} 
