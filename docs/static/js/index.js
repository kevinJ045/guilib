(function(){

	let isNavigating = false;
	const navigateTo = url => {
		// isNavigating = true;
		history.pushState(null,null,"?path="+url+"&");
		router();
	};

	const pathToRegex = path => new RegExp("^"+ path.replace(/\\/g,"\\/")
		.replace(/:\w+/g,"(.+)") +"$");

	const getParams = match => {
		const values = match.result.slice(1);
		const keys = Array.from(match.route.path.matchAll(/:(\w+)/g)).map(result => result[1]);

		return Object.fromEntries(keys.map((key,i) => {
			return [key,values[0]];
		}));
	};

	const getPage = page => {
		return $.ajax({
			'url': page,
			'async': false
		}).responseText;
	}

	function processData(r){
		let [pre, routes] = r.responseText.split('views/');
		routes = routes.split('\n').slice(1, 4).map(f => f !== '' ? f.trim() : null).map(f => {
			let text = $.ajax({url: './static/views/'+f, async: false}).responseText;
			let route = {};
			text.replace(/R(.+)R/, (a, b) => {
				route = JSON.parse(b);
				route.view = "./static/views/"+f;
				return "";
			});
			return route;
		}).sort((a, b) => {
			if(a.name == 'Home'){
		  	return -1;
		  }
			if (a.name < b.name) {
		    return -1;
		  }
		  if (a.name > b.name) {
		    return 1;
		  }
		  return 0;
		});
		return routes;
	}

	const _ROUTES = processData($.ajax({
		'url': './.dirmap',
		async: false
	}));

	console.log(_ROUTES);

	const router = async () => {
		const routes = _ROUTES;
		const matches = routes.map(route => {
			return {
				route: route,
				result: location.search ? location.search
					.split('path=')[1].split('&')[0].match(pathToRegex(route.path)) : '/',
			}
		});

		let match = matches.find(match => match.result != null);

		if(!match){
			match = {
				route: routes[0],
				result: true,
			}
		}

		var route = match.route,
				view = route.view;

		if(typeof view == "function"){
			var _view = new view(getParams(match));
			view = _view;
			view = _view.getHtml().replace(/R(.+)R/, '');
		} else {
			view = getPage(route.view).replace(/R(.+)R/, '');
		}

		if(route.showdemo != null && route.showdemo == false){
			view = view;
		} else {
			view = view;
		}

		function Appendtitles(){
			$("#app h2,#app h3,#app h4,#app h5,#app h6").each(function(){
				var $ths = $(this),
					$text = $ths.text(),
					$id = $text.replace(/\ /gmis,'_').replace(/\?/,''),
					$html = `<a href="javascript:void(0)"
					data-href="[scrollwith='${$id}']" class="chip" title="Scroll to ${$text}">${$text}</a>`;

				$ths.attr('scrollwith',$id);

				$("#app #headerContainer .chipContainer").append($html)

			});
		}

		var show = function show(){
			$("#app").html(view);
			$("#app").fadeIn(500);
			$("#app h1").first().append(`
				<div class="progress-container" id="progress-indicator-parent">
				    <div class="progress-bar" id="progress-indicator"></div>
				</div>
			`)
			$("#app h1").first()[0]?.insertAdjacentHTML('afterEnd',`
				<div id="headerContainer">
					<span class="topics">Topics:</span> <span class="chipContainer"></span>
				</div>
			`);
			Appendtitles();
			Highlight();
			OnClick();
			var onInit = route.onInit ? route.onInit : function(path,view,name){};
			onInit(route.path,route.view,route.name);
		}

		$("#app").fadeOut(500);
		setTimeout(show, 500);



		var title = route.name;
		// title = title == "Home" ? "/Code" : "R921/Code/" + title;

		document.title = title;

		// var filter = new filter('#SearchInput','#navBar');
		// sortList('#navBar');

		$("#navBar a").removeClass("active");
		if($("#navBar a[data-href=\""+route.path+"\"]").length){
			$("#navBar a[data-href=\""+route.path+"\"]").addClass("active");
		} else {
			$("#navBar a[data-href=\"/\"]").addClass("active");
		}
	}

	$(document).ready(function(){
		router();
	});

	window.addEventListener('popstate', () => {
		if (!isNavigating) {
      router();
    }
    // Reset the flag
    isNavigating = false;
	});

	for (var i = 0; i < _ROUTES.length; i++) {
		var route = _ROUTES[i],name = route.name,
				link = route.path;
		if(route.isVisible != null && route.isVisible == false){
			continue;
		}

		if(route.isVisible != null && typeof route.isVisible == "string"){
			link = route.isVisible;
		}

		if(route.version){
			name += "<br><small>only available in V"+route.version+"</small>";
		}

		$("#navBar").append(`
			<li><a href="javascript:void(0)" data-href="${link}" class="nav__link">
				${name}
			</a></li>
		`);
	}

	const OnClick = function(){
		$(".nav__link").off('click');
		$(".nav__link").on('click',function(e){
			var $ths = $(this),
				$url = $ths.data('href');

			e.preventDefault();

			navigateTo($url);
		});

		$('.chip').off('click');
		$('.chip').on('click',function(e){
			var $ths = $(this),
				$url = $ths.data('href'),
				$el = $($url);

			e.preventDefault();

			$("body,html").animate({
				scrollTop: $el.offset().top - 200
			},900);
		});
	}

	$(window).on('scroll',function(){
		var top = $(this).scrollTop(),
			$height = $("#app").height();

		scrollIndicator();

		if(top > 100){
			if($height < screen.availHeight){
				return false;
			}
			$("#app h1").first().addClass('topped');

			$("#progress-indicator-parent").addClass('active');

			$(".scrollTop").addClass('show');

			$("#headerContainer").addClass('activeHeader');

			$('#app h2,#app h3,#app h4,#app h5,#app h6').each(function(index){
				var $ths = $(this),
					$thsTop = $ths.offset().top,
					$tops = $("#headerContainer").height() - $("#app h1").first().height();
				if(top >= $thsTop - $tops){
					$("#headerContainer .chipContainer").children('.chip').removeClass('active');
					$("#headerContainer .chipContainer").children('.chip').eq(index).addClass('active');
				}
			});

		} else {
			$("#app h1").first().removeClass('topped');	
			$('#headerContainer').removeClass('activeHeader');
			$("#progress-indicator-parent").removeClass('active');
			$(".scrollTop").removeClass('show');
			$("#headerContainer .chipContainer").children('.chip').removeClass('active');
		}
	});

	function scrollIndicator(){
		var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
	  	var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
	  	var scrolled = (winScroll / height) * 100;
	  	$("#progress-indicator").css("width",scrolled + "%");
	}

	$(".navBarToggle").click(function(){
		$(".navBar").toggleClass('active');
		$(this).toggleClass('active');
	});

	$("#app").click(function(){
		if($(".navBar,.navBarToggle").hasClass('active')){
			$(".navBar,.navBarToggle").removeClass('active')
		} else {

		}
	});

	$(".scrollTop").click(function(){
		$("body,html").animate({
			scrollTop: 0
		},900);
	});

})();