		var	tpj = jQuery;

		var	revapi1;

		if(window.RS_MODULES === undefined) window.RS_MODULES = {};
		if(RS_MODULES.modules === undefined) RS_MODULES.modules = {};
		RS_MODULES.modules["revslider11"] = {once: RS_MODULES.modules["revslider11"]!==undefined ? RS_MODULES.modules["revslider11"].once : undefined, init:function() {
			window.revapi1 = window.revapi1===undefined || window.revapi1===null || window.revapi1.length===0  ? document.getElementById("rev_slider_1_1") : window.revapi1;
			if(window.revapi1 === null || window.revapi1 === undefined || window.revapi1.length==0) { window.revapi1initTry = window.revapi1initTry ===undefined ? 0 : window.revapi1initTry+1; if (window.revapi1initTry<20) requestAnimationFrame(function() {RS_MODULES.modules["revslider11"].init()}); return;}
			window.revapi1 = jQuery(window.revapi1);
			if(window.revapi1.revolution==undefined){ revslider_showDoubleJqueryError("rev_slider_1_1"); return;}
			revapi1.revolutionInit({
					revapi:"revapi1",
					visibilityLevels:"1240,1024,778,480",
					gridwidth:"1160,940,540,320",
					gridheight:"990,768,620,560",
					lazyType:"smart",
					spinner:"spinner0",
					perspective:600,
					perspectiveType:"local",
					editorheight:"990,768,620,560",
					responsiveLevels:"1240,1024,778,480",
					progressBar:{disableProgressBar:true},
					navigation: {
						keyboardNavigation:true,
						mouseScrollNavigation:false,
						wheelCallDelay:1000,
						onHoverStop:false,
						tabs: {
							enable:true,
							tmp:"<div class=\"tp-tab-title\">{{param1}}</div><div class=\"tp-tab-desc\">{{title}}</div>",
							style:"hebe",
							h_align:"left",
							space:50,
							width:240,
							wrapper_padding:5,
							wrapper_color:"transparent",
							container:"layergrid"
						}
					},
					viewPort: {
						global:true,
						globalDist:"-200px",
						enable:false,
						visible_area:"20%"
					},
					fallbacks: {
						allowHTML5AutoPlayOnAndroid:true
					},
			});
			
		}} // End of RevInitScript

		if (window.RS_MODULES.checkMinimal!==undefined) { window.RS_MODULES.checkMinimal();};