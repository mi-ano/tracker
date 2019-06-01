var triangle = [];

function tracker() {
    triangle[0] = document.getElementById('s1').value;
    triangle[1] = document.getElementById('s2').value;
    triangle[2] = document.getElementById('s3').value;

    if ( (triangle[0]+triangle[1]) <= triangle[2] || (triangle[1]+triangle[2]) <= triangle[0] || (triangle[2]+triangle[0]) <= triangle[1] ) {
        alert("cannot form a triangle");
    }else if ( triangle[0] === triangle[1] && triangle[1] === triangle[2] && triangle[2] === triangle[0] ) {
        document.getElementById('type').innerHTML = "<P>this is an equilateral triangle. All side sof the triangle are equal and the angles are 60.</P>";
    }else if ( triangle[0] === triangle[1] || triangle[1] === triangle[2] || triangle[2] === triangle[0] ) {
        document.getElementById('type').innerHTML = "<p>this is an isosceles triangle. 2 sides and 2 angles are equal</p>";
    }else if ( (triangle[0]+triangle[1]) >= triangle[2] || (triangle[1]+triangle[2]) >= triangle[0] || (triangle[2]+triangle[0]) >= triangle[1]){
        document.getElementById('type').innerHTML = "<p>this is a scalene triangle no sides a equal and none of the angles are equal</p>";
    }else {
        document.getElementById('type').innerHTML = "<h2>Please try again</h2>";
    }
}
function trianglereset() {
document.getElementById('type').innerHTML = "";
triangle = [];
};

