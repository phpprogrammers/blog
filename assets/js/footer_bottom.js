!function(b){b(function(){b.support.transition=(function(){var a=(function(){var f=document.createElement("bootstrap"),g={WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"oTransitionEnd otransitionend",transition:"transitionend"},h;for(h in g){if(f.style[h]!==undefined){return g[h]}}}());return a&&{end:a}})()})}(window.jQuery);!function(g){var h='[data-dismiss="alert"]',e=function(a){g(a).on("click",h,this.close)};e.prototype.close=function(a){var b=g(this),d=b.attr("data-target"),c;if(!d){d=b.attr("href");d=d&&d.replace(/.*(?=#[^\s]*$)/,"")}c=g(d);a&&a.preventDefault();c.length||(c=b.hasClass("alert")?b:b.parent());c.trigger(a=g.Event("close"));if(a.isDefaultPrevented()){return}c.removeClass("in");function k(){c.trigger("closed").remove()}g.support.transition&&c.hasClass("fade")?c.on(g.support.transition.end,k):k()};var f=g.fn.alert;g.fn.alert=function(a){return this.each(function(){var b=g(this),c=b.data("alert");if(!c){b.data("alert",(c=new e(this)))}if(typeof a=="string"){c[a].call(b)}})};g.fn.alert.Constructor=e;g.fn.alert.noConflict=function(){g.fn.alert=f;return this};g(document).on("click.alert.data-api",h,e.prototype.close)}(window.jQuery);!function(f){var d=function(a,b){this.$element=f(a);this.options=f.extend({},f.fn.button.defaults,b)};d.prototype.setState=function(c){var a="disabled",k=this.$element,j=k.data(),b=k.is("input")?"val":"html";c=c+"Text";j.resetText||k.data("resetText",k[b]());k[b](j[c]||this.options[c]);setTimeout(function(){c=="loadingText"?k.addClass(a).attr(a,a):k.removeClass(a).removeAttr(a)},0)};d.prototype.toggle=function(){var a=this.$element.closest('[data-toggle="buttons-radio"]');a&&a.find(".active").removeClass("active");this.$element.toggleClass("active")};var e=f.fn.button;f.fn.button=function(a){return this.each(function(){var b=f(this),c=b.data("button"),h=typeof a=="object"&&a;if(!c){b.data("button",(c=new d(this,h)))}if(a=="toggle"){c.toggle()}else{if(a){c.setState(a)}}})};f.fn.button.defaults={loadingText:"loading..."};f.fn.button.Constructor=d;f.fn.button.noConflict=function(){f.fn.button=e;return this};f(document).on("click.button.data-api","[data-toggle^=button]",function(a){var b=f(a.target);if(!b.hasClass("btn")){b=b.closest(".btn")}b.button("toggle")})}(window.jQuery);!function(d){var f=function(a,b){this.$element=d(a);this.$indicators=this.$element.find(".carousel-indicators");this.options=b;this.options.pause=="hover"&&this.$element.on("mouseenter",d.proxy(this.pause,this)).on("mouseleave",d.proxy(this.cycle,this))};f.prototype={cycle:function(a){if(!a){this.paused=false}if(this.interval){clearInterval(this.interval)}this.options.interval&&!this.paused&&(this.interval=setInterval(d.proxy(this.next,this),this.options.interval));return this},getActiveIndex:function(){this.$active=this.$element.find(".item.active");this.$items=this.$active.parent().children();return this.$items.index(this.$active)},to:function(a){var c=this.getActiveIndex(),b=this;if(a>(this.$items.length-1)||a<0){return}if(this.sliding){return this.$element.one("slid",function(){b.to(a)})}if(c==a){return this.pause().cycle()}return this.slide(a>c?"next":"prev",d(this.$items[a]))},pause:function(a){if(!a){this.paused=true}if(this.$element.find(".next, .prev").length&&d.support.transition.end){this.$element.trigger(d.support.transition.end);this.cycle()}clearInterval(this.interval);this.interval=null;return this},next:function(){if(this.sliding){return}return this.slide("next")},prev:function(){if(this.sliding){return}return this.slide("prev")},slide:function(c,r){var a=this.$element.find(".item.active"),s=r||a[c](),n=this.interval,b=c=="next"?"left":"right",q=c=="next"?"first":"last",p=this,o;this.sliding=true;n&&this.pause();s=s.length?s:this.$element.find(".item")[q]();o=d.Event("slide",{relatedTarget:s[0],direction:b});if(s.hasClass("active")){return}if(this.$indicators.length){this.$indicators.find(".active").removeClass("active");this.$element.one("slid",function(){var g=d(p.$indicators.children()[p.getActiveIndex()]);g&&g.addClass("active")})}if(d.support.transition&&this.$element.hasClass("slide")){this.$element.trigger(o);if(o.isDefaultPrevented()){return}s.addClass(c);s[0].offsetWidth;a.addClass(b);s.addClass(b);this.$element.one(d.support.transition.end,function(){s.removeClass([c,b].join(" ")).addClass("active");a.removeClass(["active",b].join(" "));p.sliding=false;setTimeout(function(){p.$element.trigger("slid")},0)})}else{this.$element.trigger(o);if(o.isDefaultPrevented()){return}a.removeClass("active");s.addClass("active");this.sliding=false;this.$element.trigger("slid")}n&&this.cycle();return this}};var e=d.fn.carousel;d.fn.carousel=function(a){return this.each(function(){var b=d(this),c=b.data("carousel"),j=d.extend({},d.fn.carousel.defaults,typeof a=="object"&&a),i=typeof a=="string"?a:j.slide;if(!c){b.data("carousel",(c=new f(this,j)))}if(typeof a=="number"){c.to(a)}else{if(i){c[i]()}else{if(j.interval){c.pause().cycle()}}}})};d.fn.carousel.defaults={interval:5000,pause:"hover"};d.fn.carousel.Constructor=f;d.fn.carousel.noConflict=function(){d.fn.carousel=e;return this};d(document).on("click.carousel.data-api","[data-slide], [data-slide-to]",function(a){var b=d(this),l,m=d(b.attr("data-target")||(l=b.attr("href"))&&l.replace(/.*(?=#[^\s]+$)/,"")),k=d.extend({},m.data(),b.data()),c;m.carousel(k);if(c=b.attr("data-slide-to")){m.data("carousel").pause().to(c).cycle()}a.preventDefault()})}(window.jQuery);!function(d){var f=function(a,b){this.$element=d(a);this.options=d.extend({},d.fn.collapse.defaults,b);if(this.options.parent){this.$parent=d(this.options.parent)}this.options.toggle&&this.toggle()};f.prototype={constructor:f,dimension:function(){var a=this.$element.hasClass("width");return a?"width":"height"},show:function(){var a,h,b,c;if(this.transitioning||this.$element.hasClass("in")){return}a=this.dimension();h=d.camelCase(["scroll",a].join("-"));b=this.$parent&&this.$parent.find("> .accordion-group > .in");if(b&&b.length){c=b.data("collapse");if(c&&c.transitioning){return}b.collapse("hide");c||b.data("collapse",null)}this.$element[a](0);this.transition("addClass",d.Event("show"),"shown");d.support.transition&&this.$element[a](this.$element[0][h])},hide:function(){var a;if(this.transitioning||!this.$element.hasClass("in")){return}a=this.dimension();this.reset(this.$element[a]());this.transition("removeClass",d.Event("hide"),"hidden");this.$element[a](0)},reset:function(b){var a=this.dimension();this.$element.removeClass("collapse")[a](b||"auto")[0].offsetWidth;this.$element[b!==null?"addClass":"removeClass"]("collapse");return this},transition:function(a,i,c){var b=this,j=function(){if(i.type=="show"){b.reset()}b.transitioning=0;b.$element.trigger(c)};this.$element.trigger(i);if(i.isDefaultPrevented()){return}this.transitioning=1;this.$element[a]("in");d.support.transition&&this.$element.hasClass("collapse")?this.$element.one(d.support.transition.end,j):j()},toggle:function(){this[this.$element.hasClass("in")?"hide":"show"]()}};var e=d.fn.collapse;d.fn.collapse=function(a){return this.each(function(){var b=d(this),c=b.data("collapse"),h=d.extend({},d.fn.collapse.defaults,b.data(),typeof a=="object"&&a);if(!c){b.data("collapse",(c=new f(this,h)))}if(typeof a=="string"){c[a]()}})};d.fn.collapse.defaults={toggle:true};d.fn.collapse.Constructor=f;d.fn.collapse.noConflict=function(){d.fn.collapse=e;return this};d(document).on("click.collapse.data-api","[data-toggle=collapse]",function(a){var b=d(this),k,c=b.attr("data-target")||a.preventDefault()||(k=b.attr("href"))&&k.replace(/.*(?=#[^\s]+$)/,""),j=d(c).data("collapse")?"toggle":b.data();b[d(c).hasClass("in")?"addClass":"removeClass"]("collapsed");d(c).collapse(j)})}(window.jQuery);!function(i){var g="[data-toggle=dropdown]",h=function(a){var b=i(a).on("click.dropdown.data-api",this.toggle);i("html").on("click.dropdown.data-api",function(){b.parent().removeClass("open")})};h.prototype={constructor:h,toggle:function(a){var b=i(this),c,d;if(b.is(".disabled, :disabled")){return}c=j(b);d=c.hasClass("open");k();if(!d){c.toggleClass("open")}b.focus();return false},keydown:function(b){var c,a,n,d,e,f;if(!/(38|40|27)/.test(b.keyCode)){return}c=i(this);b.preventDefault();b.stopPropagation();if(c.is(".disabled, :disabled")){return}d=j(c);e=d.hasClass("open");if(!e||(e&&b.keyCode==27)){if(b.which==27){d.find(g).focus()}return c.click()}a=i("[role=menu] li:not(.divider):visible a",d);if(!a.length){return}f=a.index(a.filter(":focus"));if(b.keyCode==38&&f>0){f--}if(b.keyCode==40&&f<a.length-1){f++}if(!~f){f=0}a.eq(f).focus()}};function k(){i(g).each(function(){j(i(this)).removeClass("open")})}function j(a){var c=a.attr("data-target"),b;if(!c){c=a.attr("href");c=c&&/#/.test(c)&&c.replace(/.*(?=#[^\s]*$)/,"")}b=c&&i(c);if(!b||!b.length){b=a.parent()}return b}var l=i.fn.dropdown;i.fn.dropdown=function(a){return this.each(function(){var b=i(this),c=b.data("dropdown");if(!c){b.data("dropdown",(c=new h(this)))}if(typeof a=="string"){c[a].call(b)}})};i.fn.dropdown.Constructor=h;i.fn.dropdown.noConflict=function(){i.fn.dropdown=l;return this};i(document).on("click.dropdown.data-api",k).on("click.dropdown.data-api",".dropdown form",function(a){a.stopPropagation()}).on(".dropdown-menu",function(a){a.stopPropagation()}).on("click.dropdown.data-api",g,h.prototype.toggle).on("keydown.dropdown.data-api",g+", [role=menu]",h.prototype.keydown)}(window.jQuery);!function(f){var d=function(a,b){this.options=b;this.$element=f(a).delegate('[data-dismiss="modal"]',"click.dismiss.modal",f.proxy(this.hide,this));this.options.remote&&this.$element.find(".modal-body").load(this.options.remote)};d.prototype={constructor:d,toggle:function(){return this[!this.isShown?"show":"hide"]()},show:function(){var b=this,a=f.Event("show");this.$element.trigger(a);if(this.isShown||a.isDefaultPrevented()){return}this.isShown=true;this.escape();this.backdrop(function(){var c=f.support.transition&&b.$element.hasClass("fade");if(!b.$element.parent().length){b.$element.appendTo(document.body)}b.$element.show();if(c){b.$element[0].offsetWidth}b.$element.addClass("in").attr("aria-hidden",false);b.enforceFocus();c?b.$element.one(f.support.transition.end,function(){b.$element.focus().trigger("shown")}):b.$element.focus().trigger("shown")})},hide:function(a){a&&a.preventDefault();var b=this;a=f.Event("hide");this.$element.trigger(a);if(!this.isShown||a.isDefaultPrevented()){return}this.isShown=false;this.escape();f(document).off("focusin.modal");this.$element.removeClass("in").attr("aria-hidden",true);f.support.transition&&this.$element.hasClass("fade")?this.hideWithTransition():this.hideModal()},enforceFocus:function(){var a=this;f(document).on("focusin.modal",function(b){if(a.$element[0]!==b.target&&!a.$element.has(b.target).length){a.$element.focus()}})},escape:function(){var a=this;if(this.isShown&&this.options.keyboard){this.$element.on("keyup.dismiss.modal",function(b){b.which==27&&a.hide()})}else{if(!this.isShown){this.$element.off("keyup.dismiss.modal")}}},hideWithTransition:function(){var b=this,a=setTimeout(function(){b.$element.off(f.support.transition.end);b.hideModal()},500);this.$element.one(f.support.transition.end,function(){clearTimeout(a);b.hideModal()})},hideModal:function(){var a=this;this.$element.hide();this.backdrop(function(){a.removeBackdrop();a.$element.trigger("hidden")})},removeBackdrop:function(){this.$backdrop.remove();this.$backdrop=null},backdrop:function(a){var b=this,c=this.$element.hasClass("fade")?"fade":"";if(this.isShown&&this.options.backdrop){var h=f.support.transition&&c;this.$backdrop=f('<div class="modal-backdrop '+c+'" />').appendTo(document.body);this.$backdrop.click(this.options.backdrop=="static"?f.proxy(this.$element[0].focus,this.$element[0]):f.proxy(this.hide,this));if(h){this.$backdrop[0].offsetWidth}this.$backdrop.addClass("in");if(!a){return}h?this.$backdrop.one(f.support.transition.end,a):a()}else{if(!this.isShown&&this.$backdrop){this.$backdrop.removeClass("in");f.support.transition&&this.$element.hasClass("fade")?this.$backdrop.one(f.support.transition.end,a):a()}else{if(a){a()}}}}};var e=f.fn.modal;f.fn.modal=function(a){return this.each(function(){var b=f(this),c=b.data("modal"),h=f.extend({},f.fn.modal.defaults,b.data(),typeof a=="object"&&a);if(!c){b.data("modal",(c=new d(this,h)))}if(typeof a=="string"){c[a]()}else{if(h.show){c.show()}}})};f.fn.modal.defaults={backdrop:true,keyboard:true,show:true};f.fn.modal.Constructor=d;f.fn.modal.noConflict=function(){f.fn.modal=e;return this};f(document).on("click.modal.data-api",'[data-toggle="modal"]',function(a){var b=f(this),j=b.attr("href"),k=f(b.attr("data-target")||(j&&j.replace(/.*(?=#[^\s]+$)/,""))),c=k.data("modal")?"toggle":f.extend({remote:!/#/.test(j)&&j},k.data(),b.data());a.preventDefault();k.modal(c).one("hide",function(){b.focus()})})}(window.jQuery);!function(f){var d=function(a,b){this.init("tooltip",a,b)};d.prototype={constructor:d,init:function(b,i,n){var a,p,c,o,m;this.type=b;this.$element=f(i);this.options=this.getOptions(n);this.enabled=true;c=this.options.trigger.split(" ");for(m=c.length;m--;){o=c[m];if(o=="click"){this.$element.on("click."+this.type,this.options.selector,f.proxy(this.toggle,this))}else{if(o!="manual"){a=o=="hover"?"mouseenter":"focus";p=o=="hover"?"mouseleave":"blur";this.$element.on(a+"."+this.type,this.options.selector,f.proxy(this.enter,this));this.$element.on(p+"."+this.type,this.options.selector,f.proxy(this.leave,this))}}}this.options.selector?(this._options=f.extend({},this.options,{trigger:"manual",selector:""})):this.fixTitle()},getOptions:function(a){a=f.extend({},f.fn[this.type].defaults,this.$element.data(),a);if(a.delay&&typeof a.delay=="number"){a.delay={show:a.delay,hide:a.delay}}return a},enter:function(a){var b=f(a.currentTarget)[this.type](this._options).data(this.type);if(!b.options.delay||!b.options.delay.show){return b.show()}clearTimeout(this.timeout);b.hoverState="in";this.timeout=setTimeout(function(){if(b.hoverState=="in"){b.show()}},b.options.delay.show)},leave:function(a){var b=f(a.currentTarget)[this.type](this._options).data(this.type);if(this.timeout){clearTimeout(this.timeout)}if(!b.options.delay||!b.options.delay.hide){return b.hide()}b.hoverState="out";this.timeout=setTimeout(function(){if(b.hoverState=="out"){b.hide()}},b.options.delay.hide)},show:function(){var c,a,m,b,o,l,n=f.Event("show");if(this.hasContent()&&this.enabled){this.$element.trigger(n);if(n.isDefaultPrevented()){return}c=this.tip();this.setContent();if(this.options.animation){c.addClass("fade")}o=typeof this.options.placement=="function"?this.options.placement.call(this,c[0],this.$element[0]):this.options.placement;c.detach().css({top:0,left:0,display:"block"});this.options.container?c.appendTo(this.options.container):c.insertAfter(this.$element);a=this.getPosition();m=c[0].offsetWidth;b=c[0].offsetHeight;switch(o){case"bottom":l={top:a.top+a.height,left:a.left+a.width/2-m/2};break;case"top":l={top:a.top-b,left:a.left+a.width/2-m/2};break;case"left":l={top:a.top+a.height/2-b/2,left:a.left-m};break;case"right":l={top:a.top+a.height/2-b/2,left:a.left+a.width};break}this.applyPlacement(l,o);this.$element.trigger("shown")}},applyPlacement:function(o,n){var m=this.tip(),q=m[0].offsetWidth,a=m[0].offsetHeight,r,c,b,p;m.offset(o).addClass(n).addClass("in");r=m[0].offsetWidth;c=m[0].offsetHeight;if(n=="top"&&c!=a){o.top=o.top+a-c;p=true}if(n=="bottom"||n=="top"){b=0;if(o.left<0){b=o.left*-2;o.left=0;m.offset(o);r=m[0].offsetWidth;c=m[0].offsetHeight}this.replaceArrow(b-q+r,r,"left")}else{this.replaceArrow(c-a,c,"top")}if(p){m.offset(o)}},replaceArrow:function(a,b,c){this.arrow().css(c,a?(50*(1-a/b)+"%"):"")},setContent:function(){var a=this.tip(),b=this.getTitle();a.find(".tooltip-inner")[this.options.html?"html":"text"](b);a.removeClass("fade in top bottom left right")},hide:function(){var i=this,b=this.tip(),c=f.Event("hide");this.$element.trigger(c);if(c.isDefaultPrevented()){return}b.removeClass("in");function a(){var g=setTimeout(function(){b.off(f.support.transition.end).detach()},500);b.one(f.support.transition.end,function(){clearTimeout(g);b.detach()})}f.support.transition&&this.$tip.hasClass("fade")?a():b.detach();this.$element.trigger("hidden");return this},fixTitle:function(){var a=this.$element;if(a.attr("title")||typeof(a.attr("data-original-title"))!="string"){a.attr("data-original-title",a.attr("title")||"").attr("title","")}},hasContent:function(){return this.getTitle()},getPosition:function(){var a=this.$element[0];return f.extend({},(typeof a.getBoundingClientRect=="function")?a.getBoundingClientRect():{width:a.offsetWidth,height:a.offsetHeight},this.$element.offset())},getTitle:function(){var a,c=this.$element,b=this.options;a=c.attr("data-original-title")||(typeof b.title=="function"?b.title.call(c[0]):b.title);return a},tip:function(){return this.$tip=this.$tip||f(this.options.template)},arrow:function(){return this.$arrow=this.$arrow||this.tip().find(".tooltip-arrow")},validate:function(){if(!this.$element[0].parentNode){this.hide();this.$element=null;this.options=null}},enable:function(){this.enabled=true},disable:function(){this.enabled=false},toggleEnabled:function(){this.enabled=!this.enabled},toggle:function(a){var b=a?f(a.currentTarget)[this.type](this._options).data(this.type):this;b.tip().hasClass("in")?b.hide():b.show()},destroy:function(){this.hide().$element.off("."+this.type).removeData(this.type)}};var e=f.fn.tooltip;f.fn.tooltip=function(a){return this.each(function(){var b=f(this),c=b.data("tooltip"),h=typeof a=="object"&&a;if(!c){b.data("tooltip",(c=new d(this,h)))}if(typeof a=="string"){c[a]()}})};f.fn.tooltip.Constructor=d;f.fn.tooltip.defaults={animation:true,placement:"top",selector:false,template:'<div class="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',trigger:"hover focus",title:"",delay:0,html:false,container:false};f.fn.tooltip.noConflict=function(){f.fn.tooltip=e;return this}}(window.jQuery);!function(f){var d=function(a,b){this.init("popover",a,b)};d.prototype=f.extend({},f.fn.tooltip.Constructor.prototype,{constructor:d,setContent:function(){var a=this.tip(),b=this.getTitle(),c=this.getContent();a.find(".popover-title")[this.options.html?"html":"text"](b);a.find(".popover-content")[this.options.html?"html":"text"](c);a.removeClass("fade top bottom left right in")},hasContent:function(){return this.getTitle()||this.getContent()},getContent:function(){var b,c=this.$element,a=this.options;b=(typeof a.content=="function"?a.content.call(c[0]):a.content)||c.attr("data-content");return b},tip:function(){if(!this.$tip){this.$tip=f(this.options.template)}return this.$tip},destroy:function(){this.hide().$element.off("."+this.type).removeData(this.type)}});var e=f.fn.popover;f.fn.popover=function(a){return this.each(function(){var b=f(this),c=b.data("popover"),h=typeof a=="object"&&a;if(!c){b.data("popover",(c=new d(this,h)))}if(typeof a=="string"){c[a]()}})};f.fn.popover.Constructor=d;f.fn.popover.defaults=f.extend({},f.fn.tooltip.defaults,{placement:"right",trigger:"click",content:"",template:'<div class="popover"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'});f.fn.popover.noConflict=function(){f.fn.popover=e;return this}}(window.jQuery);!function(f){function d(b,c){var a=f.proxy(this.process,this),j=f(b).is("body")?f(window):f(b),i;this.options=f.extend({},f.fn.scrollspy.defaults,c);this.$scrollElement=j.on("scroll.scroll-spy.data-api",a);this.selector=(this.options.target||((i=f(b).attr("href"))&&i.replace(/.*(?=#[^\s]+$)/,""))||"")+" .nav li > a";this.$body=f("body");this.refresh();this.process()}d.prototype={constructor:d,refresh:function(){var b=this,a;this.offsets=f([]);this.targets=f([]);a=this.$body.find(this.selector).map(function(){var i=f(this),j=i.data("target")||i.attr("href"),c=/^#\w/.test(j)&&f(j);return(c&&c.length&&[[c.position().top+(!f.isWindow(b.$scrollElement.get(0))&&b.$scrollElement.scrollTop()),j]])||null}).sort(function(c,h){return c[0]-h[0]}).each(function(){b.offsets.push(this[0]);b.targets.push(this[1])})},process:function(){var b=this.$scrollElement.scrollTop()+this.options.offset,l=this.$scrollElement[0].scrollHeight||this.$body[0].scrollHeight,c=l-this.$scrollElement.height(),i=this.offsets,n=this.targets,a=this.activeTarget,m;if(b>=c){return a!=(m=n.last()[0])&&this.activate(m)}for(m=i.length;m--;){a!=n[m]&&b>=i[m]&&(!i[m+1]||b<=i[m+1])&&this.activate(n[m])}},activate:function(a){var b,c;this.activeTarget=a;f(this.selector).parent(".active").removeClass("active");c=this.selector+'[data-target="'+a+'"],'+this.selector+'[href="'+a+'"]';b=f(c).parent("li").addClass("active");if(b.parent(".dropdown-menu").length){b=b.closest("li.dropdown").addClass("active")}b.trigger("activate")}};var e=f.fn.scrollspy;f.fn.scrollspy=function(a){return this.each(function(){var b=f(this),c=b.data("scrollspy"),h=typeof a=="object"&&a;if(!c){b.data("scrollspy",(c=new d(this,h)))}if(typeof a=="string"){c[a]()}})};f.fn.scrollspy.Constructor=d;f.fn.scrollspy.defaults={offset:10};f.fn.scrollspy.noConflict=function(){f.fn.scrollspy=e;return this};f(window).on("load",function(){f('[data-spy="scroll"]').each(function(){var a=f(this);a.scrollspy(a.data())})})}(window.jQuery);!function(f){var d=function(a){this.element=f(a)};d.prototype={constructor:d,show:function(){var a=this.element,k=a.closest("ul:not(.dropdown-menu)"),l=a.attr("data-target"),c,m,b;if(!l){l=a.attr("href");l=l&&l.replace(/.*(?=#[^\s]*$)/,"")}if(a.parent("li").hasClass("active")){return}c=k.find(".active:last a")[0];b=f.Event("show",{relatedTarget:c});a.trigger(b);if(b.isDefaultPrevented()){return}m=f(l);this.activate(a.parent("li"),k);this.activate(m,m.parent(),function(){a.trigger({type:"shown",relatedTarget:c})})},activate:function(j,k,a){var l=k.find("> .active"),b=a&&f.support.transition&&l.hasClass("fade");function c(){l.removeClass("active").find("> .dropdown-menu > .active").removeClass("active");j.addClass("active");if(b){j[0].offsetWidth;j.addClass("in")}else{j.removeClass("fade")}if(j.parent(".dropdown-menu")){j.closest("li.dropdown").addClass("active")}a&&a()}b?l.one(f.support.transition.end,c):c();l.removeClass("in")}};var e=f.fn.tab;f.fn.tab=function(a){return this.each(function(){var b=f(this),c=b.data("tab");if(!c){b.data("tab",(c=new d(this)))}if(typeof a=="string"){c[a]()}})};f.fn.tab.Constructor=d;f.fn.tab.noConflict=function(){f.fn.tab=e;return this};f(document).on("click.tab.data-api",'[data-toggle="tab"], [data-toggle="pill"]',function(a){a.preventDefault();f(this).tab("show")})}(window.jQuery);!function(d){var f=function(a,b){this.$element=d(a);this.options=d.extend({},d.fn.typeahead.defaults,b);this.matcher=this.options.matcher||this.matcher;this.sorter=this.options.sorter||this.sorter;this.highlighter=this.options.highlighter||this.highlighter;this.updater=this.options.updater||this.updater;this.source=this.options.source;this.$menu=d(this.options.menu);this.shown=false;this.listen()};f.prototype={constructor:f,select:function(){var a=this.$menu.find(".active").attr("data-value");this.$element.val(this.updater(a)).change();return this.hide()},updater:function(a){return a},show:function(){var a=d.extend({},this.$element.position(),{height:this.$element[0].offsetHeight});this.$menu.insertAfter(this.$element).css({top:a.top+a.height,left:a.left}).show();this.shown=true;return this},hide:function(){this.$menu.hide();this.shown=false;return this},lookup:function(a){var b;this.query=this.$element.val();if(!this.query||this.query.length<this.options.minLength){return this.shown?this.hide():this}b=d.isFunction(this.source)?this.source(this.query,d.proxy(this.process,this)):this.source;return b?this.process(b):this},process:function(b){var a=this;b=d.grep(b,function(c){return a.matcher(c)});b=this.sorter(b);if(!b.length){return this.shown?this.hide():this}return this.render(b.slice(0,this.options.items)).show()},matcher:function(a){return ~a.toLowerCase().indexOf(this.query.toLowerCase())},sorter:function(c){var b=[],i=[],j=[],a;while(a=c.shift()){if(!a.toLowerCase().indexOf(this.query.toLowerCase())){b.push(a)}else{if(~a.indexOf(this.query)){i.push(a)}else{j.push(a)}}}return b.concat(i,j)},highlighter:function(b){var a=this.query.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g,"\\$&");return b.replace(new RegExp("("+a+")","ig"),function(h,c){return"<strong>"+c+"</strong>"})},render:function(b){var a=this;b=d(b).map(function(h,c){h=d(a.options.item).attr("data-value",c);h.find("a").html(a.highlighter(c));return h[0]});b.first().addClass("active");this.$menu.html(b);return this},next:function(b){var a=this.$menu.find(".active").removeClass("active"),c=a.next();if(!c.length){c=d(this.$menu.find("li")[0])}c.addClass("active")},prev:function(b){var a=this.$menu.find(".active").removeClass("active"),c=a.prev();if(!c.length){c=this.$menu.find("li").last()}c.addClass("active")},listen:function(){this.$element.on("focus",d.proxy(this.focus,this)).on("blur",d.proxy(this.blur,this)).on("keypress",d.proxy(this.keypress,this)).on("keyup",d.proxy(this.keyup,this));if(this.eventSupported("keydown")){this.$element.on("keydown",d.proxy(this.keydown,this))}this.$menu.on("click",d.proxy(this.click,this)).on("mouseenter","li",d.proxy(this.mouseenter,this)).on("mouseleave","li",d.proxy(this.mouseleave,this))},eventSupported:function(b){var a=b in this.$element;if(!a){this.$element.setAttribute(b,"return;");a=typeof this.$element[b]==="function"}return a},move:function(a){if(!this.shown){return}switch(a.keyCode){case 9:case 13:case 27:a.preventDefault();break;case 38:a.preventDefault();this.prev();break;case 40:a.preventDefault();this.next();break}a.stopPropagation()},keydown:function(a){this.suppressKeyPressRepeat=~d.inArray(a.keyCode,[40,38,9,13,27]);this.move(a)},keypress:function(a){if(this.suppressKeyPressRepeat){return}this.move(a)},keyup:function(a){switch(a.keyCode){case 40:case 38:case 16:case 17:case 18:break;case 9:case 13:if(!this.shown){return}this.select();break;case 27:if(!this.shown){return}this.hide();break;default:this.lookup()}a.stopPropagation();a.preventDefault()},focus:function(a){this.focused=true},blur:function(a){this.focused=false;if(!this.mousedover&&this.shown){this.hide()}},click:function(a){a.stopPropagation();a.preventDefault();this.select();this.$element.focus()},mouseenter:function(a){this.mousedover=true;this.$menu.find(".active").removeClass("active");d(a.currentTarget).addClass("active")},mouseleave:function(a){this.mousedover=false;if(!this.focused&&this.shown){this.hide()}}};var e=d.fn.typeahead;d.fn.typeahead=function(a){return this.each(function(){var b=d(this),c=b.data("typeahead"),h=typeof a=="object"&&a;if(!c){b.data("typeahead",(c=new f(this,h)))}if(typeof a=="string"){c[a]()}})};d.fn.typeahead.defaults={source:[],items:8,menu:'<ul class="typeahead dropdown-menu"></ul>',item:'<li><a href="#"></a></li>',minLength:1};d.fn.typeahead.Constructor=f;d.fn.typeahead.noConflict=function(){d.fn.typeahead=e;return this};d(document).on("focus.typeahead.data-api",'[data-provide="typeahead"]',function(a){var b=d(this);if(b.data("typeahead")){return}b.typeahead(b.data())})}(window.jQuery);!function(f){var d=function(a,b){this.options=f.extend({},f.fn.affix.defaults,b);this.$window=f(window).on("scroll.affix.data-api",f.proxy(this.checkPosition,this)).on("click.affix.data-api",f.proxy(function(){setTimeout(f.proxy(this.checkPosition,this),1)},this));this.$element=f(a);this.checkPosition()};d.prototype.checkPosition=function(){if(!this.$element.is(":visible")){return}var l=f(document).height(),b=this.$window.scrollTop(),p=this.$element.offset(),a=this.options.offset,n=a.bottom,m=a.top,c="affix affix-top affix-bottom",o;if(typeof a!="object"){n=m=a}if(typeof m=="function"){m=a.top()}if(typeof n=="function"){n=a.bottom()}o=this.unpin!=null&&(b+this.unpin<=p.top)?false:n!=null&&(p.top+this.$element.height()>=l-n)?"bottom":m!=null&&b<=m?"top":false;if(this.affixed===o){return}this.affixed=o;this.unpin=o=="bottom"?p.top-b:null;this.$element.removeClass(c).addClass("affix"+(o?"-"+o:""))};var e=f.fn.affix;f.fn.affix=function(a){return this.each(function(){var b=f(this),c=b.data("affix"),h=typeof a=="object"&&a;if(!c){b.data("affix",(c=new d(this,h)))}if(typeof a=="string"){c[a]()}})};f.fn.affix.Constructor=d;f.fn.affix.defaults={offset:0};f.fn.affix.noConflict=function(){f.fn.affix=e;return this};f(window).on("load",function(){f('[data-spy="affix"]').each(function(){var a=f(this),b=a.data();b.offset=b.offset||{};b.offsetBottom&&(b.offset.bottom=b.offsetBottom);b.offsetTop&&(b.offset.top=b.offsetTop);a.affix(b)})})}(window.jQuery);
/*! http://tinynav.viljamis.com v1.1 by @viljamis */
(function(f,d,e){f.fn.tinyNav=function(b){var a=f.extend({active:"selected",header:"",label:""},b);return this.each(function(){e++;var p=f(this),l="tinynav",c=l+e,m=".l_"+c,n=f("<select/>").attr("id",c).addClass(l+" "+c);if(p.is("ul,ol")){if(a.header!==""){n.append(f("<option/>").text(a.header))}var o="";p.addClass("l_"+c).find("a").each(function(){o+='<option value="'+f(this).attr("href")+'">';var g;for(g=0;g<f(this).parents("ul, ol").length-1;g++){o+="- "}o+=f(this).text()+"</option>"});n.append(o);if(!a.header){n.find(":eq("+f(m+" li").index(f(m+" li."+a.active))+")").attr("selected",true)}n.change(function(){d.location.href=f(this).val()});f(m).after(n);if(a.label){n.before(f("<label/>").attr("for",c).addClass(l+"_label "+c+"_label").append(a.label))}}})}})(jQuery,this,0);$(function(){$("#nav").tinyNav({header:"-- Navigation --"})});$(function(){if($.cookie("first_visit")!=="0"){$("#myModal").modal("show");$.cookie("first_visit","0",{expires:2})}});document.onreadystatechange=function(){if(document.readyState==="complete"){$("ul.ww-nav ul.dropdown-menu").each(function(){parentWidth=$(this).parent().innerWidth();menuWidth=$(this).innerWidth();margin=(parentWidth/2)-(menuWidth/2);margin=margin+"px";$(this).css("margin-left",margin)})}};