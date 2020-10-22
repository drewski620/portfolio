document.getElementById('form').addEventListener('submit', function(event) {
    event.preventDefault();

    var length = document.querySelector('[name="length"]').value;
    if(length < 8 || length > 128) {
        alert('This password needs to be between 8 and 128 characters');
    } else {
        var characters = document.getElementsByName('characters')
        //a string of possible characters
        var possibleCharacters = "";
        for (var i = 0; i < characters.length; i++) {
            //we'll chck the value of the input and the checked attribute
            //if they are we'll include them i the final password genarator
            if(characters[i].value === 'uppercase' && characters[i].checked){
                possibleCharacters += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
            }
            
            if(characters[i].value === 'lowercase' && characters[i].checked) {
                possibleCharacters += 'abcdefghijklmnopqrstuvwxyz';
            }
            if(characters[i].value === 'special' && characters[i].checked) {
                possibleCharacters += '!#?*&';
            }
            if(characters[i].value === 'numeric' && characters[i].checked) {
                possibleCharacters += '0123456789';
            }
        }
        if (possibleCharacters === "") {
            alert('You need to check a box!');
        } else { var password = '';
        
        for (var j = 0; j < length; j++) {
            //pull random characters
           
            //charAt(randomInteger)
            var randomNumber =  Math.floor(Math.random() * possibleCharacters.length);
            var passwordChar = possibleCharacters.charAt(randomNumber);
            
            console.log(randomNumber);
            
            password += passwordChar;

            
        }
        // sets the p tag to the password value
        document.getElementById('password').innerHTML = password;

        }
        
        
    }

})