<script src="/js/fastclick.min.js"></script>
<script>
// toggle mobile menu
var b = document.getElementById('mobile-navigation');
new FastClick(b);
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

var _gaq = _gaq || [];
  _gaq.push(['_setAccount', 'UA-44925534-1']);
  _gaq.push(['_trackPageview']);

  (function() {
    var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
    ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
    var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
  })();
</script>