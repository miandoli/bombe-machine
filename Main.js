// Takes in a message and a crib and returns all the possible enigma machine settings that could
// have generatored the crib
function crack(msg, crib) {
    var posSettings = []; // Possible settings

    for (var i = 0; i < msg.length - crib.length; i++) {
        const substr = msg.substring(i, i + msg.length);
        if (!sameLetter(crib, substr)) {
            // Find settings with the possible substring and crib
            const found = findSettings(substr, crib);
            // Add found settings to possible settings
            for (var j = 0; j < found.length; j++) {
                posSettings.push(found[j]);
            }
        }
    }
}

// Returns a boolean if any letters in the two strings match up
function sameLetter(str1, str2) {
    for (var i = 0; i < str1.length; i++) {
        if (str1[i] == str2[i]) {
            return true;
        }
    }
    return false;
}

// Finds the possible settings of the enigma machine given the two strings
function findSettings(str1, str2) {

}
