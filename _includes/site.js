<script>
// toggle mobile menu
var b = document.getElementById('mobile-navigation');
b.onclick = function(e) {
	e.preventDefault();
	document.getElementById('mobile-menu').classList.toggle('active');
	return false;
};

window.twttr = (function (d,s,id) {
	var t, js, fjs = d.getElementsByTagName(s)[0];
	if (d.getElementById(id)) return; js=d.createElement(s); js.id=id;
	js.src="//platform.twitter.com/widgets.js"; fjs.parentNode.insertBefore(js, fjs);
	return window.twttr || (t = { _e: [], ready: function(f){ t._e.push(f) } });
}(document, "script", "twitter-wjs"));
</script>