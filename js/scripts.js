var triangle = [];

function tracker() {
    triangle[0] = parseInt(document.getElementById('s1').value);
    triangle[1] = parseInt(document.getElementById('s2').value);
    triangle[2] = parseInt(document.getElementById('s3').value);

    if ( (triangle[0]+triangle[1]) <= triangle[2] || (triangle[1]+triangle[2]) <= triangle[0] || (triangle[2]+triangle[0]) <= triangle[1] ) {
        alert("your sides cannot form a triangle");
    }else if ( triangle[0] === triangle[1] && triangle[1] === triangle[2] && triangle[2] === triangle[0] ) {
        document.getElementById('type').innerHTML = "<P>This is an equilateral triangle. all sides and angles are equal.</P>";
    }else if ( triangle[0] === triangle[1] || triangle[1] === triangle[2] || triangle[2] === triangle[0] ) {
        document.getElementById('type').innerHTML = "<p>This is an isosceles triangle. two sides and two angles are equal</p>";
        document.getElementById('image').src="../images/tri2.png";
    }else if ( (triangle[0]+triangle[1]) >= triangle[2] || (triangle[1]+triangle[2]) >= triangle[0] || (triangle[2]+triangle[0]) >= triangle[1]){
        document.getElementById('type').innerHTML = "<p>this is a scalene triangle no sides are equal.</p>";
    }else {
        document.getElementById('type').innerHTML = "<h2>Please try again</h2>";
    }
};
function trianglereset() {
document.getElementById('type').innerHTML = "";
triangle = [];
};

