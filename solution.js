var addBinary = function(a, b) {
    var result = "";
    var i = a.length - 1;
    var j = b.length - 1;
    var carry = 0;
    
    while (i >= 0 || j >= 0) {
        var digit_a = i >= 0 ? parseInt(a[i]) : 0;
        var digit_b = j >= 0 ? parseInt(b[j]) : 0;
        
        // Compute the sum and carry-over
        var digitSum = digit_a + digit_b + carry;
        carry = Math.floor(digitSum / 2);
        
        // Append the least significant bit to the result
        result = (digitSum % 2) + result;
        
        // Move to the next bit
        i--;
        j--;
    }
    
    // If there is a remaining carry-over, append it to the result
    if (carry === 1) {
        result = "1" + result;
    }
    
    return result;
};
