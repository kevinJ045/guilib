(function(){

	const classMap = {
	  pre: 'mngr-code'
	}

	const bindings = Object.keys(classMap)
	  .map(key => ({
	    type: 'output',
	    regex: new RegExp(`<${key}(.*)>`, 'g'),
	    replace: `<${key} class="${classMap[key]}" $1>`
	  }));

	// var converter = new TurndownService();


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

	// console.log(converter);

	const getPage = page => {
		return marked.parse($.ajax({
			'url': page,
			'async': false
		}).responseText.replace(/R(.+)R/, '')) + `<div class="navigation"><a class="prev">Prev</a> <a class="next">Next</a></div>`;
	}

	const _ROUTES = [
		'home.md|/|Home',
		'widget.md|/widget|Widget',
		'text.md|/text|Text',
		'button.md|/button|Button',
		'checkbox.md|/checkbox|Checkbox',
		'radio.md|/radio|Radio',
		'toggle.md|/toggle|Toggle',
		'floatingactionbutton.md|/floatingactionbutton|FloatingActionButton',
		'canvas.md|/canvas|Canvas',
		'body.md|/body|Body',
		'card.md|/card|Card',
		'directedwidget.md|/directedwidget|DirectedWidget',
		'container.md|/container|Container',
		'header.md|/header|Header',
		'toolbar.md|/toolbar|Toolbar',
		'view.md|/view|View',
		'page.md|/page|Page'
	].map((s, index) => ({
			view: "./static/views/"+s.split('|')[0],
			path: s.split('|')[1],
			name: s.split('|')[2],
			index
	}));

	const getRoute = () => {
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

		return { route: match.route, match };
	}

	const router = async () => {

		var { route, match } = getRoute(),
			view = route.view;

		if(typeof view == "function"){
			var _view = new view(getParams(match));
			view = _view;
			view = _view.getHtml().replace(/R(.+)R/, '');
		} else {
			view = getPage(route.view);
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
		const {route: currentRoute} = getRoute();
		$('#app').find('.next').click(() => {
			location.search = 'path='+_ROUTES[currentRoute.index+1].path
		});
		$('#app').find('.prev').click(() => {
			location.search = 'path='+_ROUTES[currentRoute.index-1].path
		});
		if(currentRoute.index == 0) $('#app').find('.prev').remove();
		if(currentRoute.index == _ROUTES.length-1) $('#app').find('.next').remove();
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