var triangle = [];

function tracker() {
    triangle[0] = document.getElementById('s1').value;
    triangle[1] = document.getElementById('s2').value;
    triangle[2] = document.getElementById('s3').value;

            if ( (triangle[0]+triangle[1]) <= triangle[2] || (triangle[1]+triangle[2]) <= triangle[0] || (triangle[2]+triangle[0]) <= triangle[1] ) {
          alert("triangle not confirmed");
        }
        else if ( triangle[0] === triangle[1] && triangle[1] === triangle[2] && triangle[2] === triangle[0] ) {
          /* alert("Equilateral triangle confirmed"); */
          document.getElementById('type').innerHTML = "<h2>This is an Equilateral triangle</h2> <p>This triangle has same lengths for all sides of the triangle. The sides intersect at angle of 60 degrees to give a total of 180 degrees</p>";
        }
        else if ( triangle[0] === triangle[1] || triangle[1] === triangle[2] || triangle[2] === triangle[0] ) {
          /* alert("Isosceles triangle confirmed"); */
          document.getElementById('type').innerHTML = "<h2>This is an Isosceles triangle</h2> <p>This triangle has two sides with the same values for length but one side with a different length</p>";
        }
        else if ( (triangle[0]+triangle[1]) >= triangle[2] || (triangle[1]+triangle[2]) >= triangle[0] || (triangle[2]+triangle[0]) >= triangle[1]){
          /* alert("Scalene triangle confirmed"); */
          document.getElementById('type').innerHTML = "<h2>This is a Scalene triangle</h2> <p>The sides of this triangle all have different lengths and the may be further divided into Right angled triangles and obtuse triangles among others</p>";
        }
        else {
          /* alert("Please try again"); */
          document.getElementById('type').innerHTML = "<h2>Please try again</h2>";
        }

}
function trianglereset() {
document.getElementById('type').innerHTML = "";
triangle = [];
};

