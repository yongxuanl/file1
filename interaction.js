

console.log("s")
var cat_image = document.getElementById('cat');
cat_image.addEventListener("click", function() {
    alert("Meow!"); 
});
var feed_button = document.getElementById('feed_button');

feed_button.addEventListener("click", feed);
function feed() {
    cat_image.style.width = (cat_image.offsetWidth + 30.0) + 'px';
};

var run_button = document.getElementById('run_button');

run_button.addEventListener("click", exercise);
function exercise() {
    cat_image.style.width = (cat_image.offsetWidth - 30.0) + 'px';
};
