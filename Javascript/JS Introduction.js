<!DOCTYPE html>
<html>
<body>

<h2>What Can JavaScript Do?</h2>
<p>JavaScript can change HTML attributes.</p>
<p>In this case JavaScript changes the src (source) attribute of an image.</p>

<button onclick="document.getElementById('myImage').src='../img/Desert.jpg'">Turn on the light</button>
<img id="myImage" src="../img/Desert.jpg" style="width:100px">
<button onclick="document.getElementById('myImage').src='../img/test.jpg'">Turn off the light</button>

</body>
</html>
