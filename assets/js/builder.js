
$(document).ready(function() {

	function getScrollBarWidth () {
    var $outer = $('<div>').css({visibility: 'hidden', width: 100, overflow: 'scroll'}).appendTo('body'),
        widthWithScroll = $('<div>').css({width: '100%'}).appendTo($outer).outerWidth();
    $outer.remove();
    return 100 - widthWithScroll;
};
var scrollWidth = getScrollBarWidth ();
console.log(scrollWidth)

$('body').css('padding-right',getScrollBarWidth () + 'px');


	window.curentStage = 1;
	$('.next-choose').on('click',function(e){

		if(window.curentStage < $('[data-room]').length){
		$('[data-room='+window.curentStage+']').addClass('hiden-step');
		$('[data-room='+window.curentStage+']').attr('data-active',false);

		window.curentStage++;
		LoadingImage($('[data-room='+window.curentStage+'] .builder-render img[data-load]'));
		$('[data-room='+window.curentStage+']').removeClass('hiden-step');
		$('[data-room='+window.curentStage+']').attr('data-active',true)
	}
	
	})


function costUpdate (oldPrice, newPrice){
	var curentPrice = parseInt($('.curent-cost').text());
	if(typeof oldPrice == 'undefined'){
	var	updatedPrice = curentPrice + parseInt(newPrice);
	}else{
		var	updatedPrice = curentPrice - parseInt(oldPrice) + parseInt(newPrice);
	}
	$({numberValue: curentPrice}).animate({numberValue: updatedPrice}, {
		duration: 150,
		easing: "linear",
		step: function(val) {
			$('.curent-cost').html(Math.ceil(val));
		}
	});
}




// $(".flore-texture").on('load',function(){
// 	$('.builder-options').css('height',$('.flore-texture').height()+'px')
// 	console.log('loaded', $('.flore-texture').height())
// });




$('[data-color]').on('click',function(e){
	$('[data-room='+window.curentStage+'] .builder-render-bg').css('background',$(this).find('.option-img > svg > path').attr('fill'))
	$('[data-room='+window.curentStage+'] [data-color]').removeClass('selected')
	$(this).addClass('selected');

})

$('[data-wall]').on('click',function(e){
	$('.wall-texture').attr('src',$(this).attr('data-wall'))
	
	
	//вычисление цены стен
	var WallsPriceOld = $('[data-wall].selected').attr('data-price')
	var WallsePriceNew = $(this).attr('data-price')

	if(typeof WallsPriceOld == 'undefined'){
	costUpdate( 0 , parseInt(WallsePriceNew) * roomWalls)
	}else{
	costUpdate( parseInt(WallsPriceOld) * roomWalls , parseInt(WallsePriceNew) * roomWalls)
	}
	
	costUpdate($('[data-wall].selected').attr('data-price'),$(this).attr('data-price'))
	$('[data-wall]').removeClass('selected')
	$(this).addClass('selected');

})



$('[data-flore]').on('click',function(e){
	$('.flore-texture').attr('src',$(this).attr('data-flore'))
	//вычисление цены пола 
	var florePriceOld = $('[data-flore].selected').attr('data-price')
	var florePriceNew = $(this).attr('data-price')

	if(typeof florePriceOld == 'undefined'){
	costUpdate( 0 , parseInt(florePriceNew) * roomFlore)
	}else{
	costUpdate( parseInt(florePriceOld) * roomFlore , parseInt(florePriceNew) * roomFlore)
	}
	
	$('[data-flore]').removeClass('selected')
	$(this).addClass('selected');

})

$('[data-kitchen-flore]').on('click',function(e){
	$('.kithen-flore-texture').attr('src',$(this).attr('data-kitchen-flore'))
	
	//вычисление цены пола кухни
var florePriceOld = $('[data-kitchen-flore].selected').attr('data-price')
var florePriceNew = $(this).attr('data-price')

if(typeof florePriceOld == 'undefined'){
	costUpdate( 0 , parseInt(florePriceNew) * kitchenFlore)
}else{
	costUpdate( parseInt(florePriceOld) * kitchenFlore , parseInt(florePriceNew) * kitchenFlore)
}
	
	$('[data-kitchen-flore]').removeClass('selected')
	$(this).addClass('selected');

})


$('[data-bathroom-flore]').on('click',function(e){
	$('.bathroom-flore').attr('src',$(this).attr('data-bathroom-flore'))
	
	//вычисление цены пола кухни
var bWallsPriceOld = $('[data-bathroom-flore].selected').attr('data-price')
var bWallsPriceNew = $(this).attr('data-price')

if(typeof bWallsPriceOld == 'undefined'){
	costUpdate( 0 , parseInt(bWallsPriceNew) * bathroomWalls)
}else{
	costUpdate( parseInt(bWallsPriceOld) * bathroomWalls , parseInt(bWallsPriceNew) * bathroomWalls)
}
	
	$('[data-bathroom-flore]').removeClass('selected')
	$(this).addClass('selected');

})



$('[data-bathroom-wall]').on('click',function(e){
	$('.bathroom-wall').attr('src',$(this).attr('data-bathroom-wall'))
	
	//вычисление цены пола ванной
var florePriceOld = $('[data-bathroom-wall].selected').attr('data-price')
var florePriceNew = $(this).attr('data-price')

if(typeof florePriceOld == 'undefined'){
	costUpdate( 0 , parseInt(florePriceNew) * bathroomFlore)
}else{
	costUpdate( parseInt(florePriceOld) * bathroomFlore , parseInt(florePriceNew) * bathroomFlore)
}
	
	$('[data-bathroom-wall]').removeClass('selected')
	$(this).addClass('selected');

})


$('[data-bathroom-tumb]').on('click',function(e){
	$('.bathroom-tumb').attr('src',$(this).attr('data-bathroom-tumb'))
	
	//вычисление цены тумбы ванной
var TumbPriceOld = $('[data-bathroom-tumb].selected').attr('data-price')
var TumbPriceNew = $(this).attr('data-price')

if(typeof TumbPriceOld == 'undefined'){
	costUpdate( 0 , parseInt(TumbPriceNew))
}else{
	costUpdate( parseInt(TumbPriceOld) , parseInt(TumbPriceNew))
}
	
	$('[data-bathroom-tumb]').removeClass('selected')
	$(this).addClass('selected');

})


$('[data-kitchen-tile]').on('click',function(e){
	$('.kithen-tile-texture').attr('src',$(this).attr('data-kitchen-tile'))
	
	//вычисление цены фартука
var TilePriceOld = $('[data-kitchen-tile].selected').attr('data-price')
var TilePriceNew = $(this).attr('data-price')
if(typeof TilePriceOld == 'undefined'){
	costUpdate( 0 , parseInt(TilePriceNew) * kitchenTile)
}else{
	costUpdate( parseInt(TilePriceOld) * kitchenTile , parseInt(TilePriceNew) * kitchenTile)
}
	
	$('[data-kitchen-tile]').removeClass('selected')
	$(this).addClass('selected');

})





$('[data-door]').on('click',function(e){
	$('.door-texture').attr('src',$(this).attr('data-door'))

	var doorPriceOld = $('[data-door].selected').attr('data-price')
	var doorPriceNew = $(this).attr('data-price')

	if(typeof doorPriceOld == 'undefined'){
		costUpdate( 0 , parseInt(doorPriceNew))
	}else{
		costUpdate( parseInt(doorPriceOld) , parseInt(doorPriceNew))
	}

	$('[data-door]').removeClass('selected')
	$(this).addClass('selected');

})


$('[data-kitchen-door]').on('click',function(e){
	$('.kithen-door').attr('src',$(this).attr('data-kitchen-door'))

	var doorPriceOld = $('[data-kitchen-door].selected').attr('data-price')
	var doorPriceNew = $(this).attr('data-price')

	
	if(typeof doorPriceOld == 'undefined'){
		costUpdate( 0 , parseInt(doorPriceNew))
	}else{
		costUpdate( parseInt(doorPriceOld) , parseInt(doorPriceNew))
	}

	$('[data-kitchen-door]').removeClass('selected')
	$(this).addClass('selected');
})



// kitchen-wall
$('[data-kitchen-wall]').on('click',function(e){
	$('.kithen-wall').attr('src',$(this).attr('data-kitchen-wall'))

	var doorPriceOld = $('[data-kitchen-wall].selected').attr('data-price')
	var doorPriceNew = $(this).attr('data-price')

	
	if(typeof doorPriceOld == 'undefined'){
		costUpdate( 0 , parseInt(doorPriceNew)* kitchenWalls)
	}else{
		costUpdate( parseInt(doorPriceOld)* kitchenWalls , parseInt(doorPriceNew)* kitchenWalls)
	}

	$('[data-kitchen-wall]').removeClass('selected')
	$(this).addClass('selected');
})


$('[data-plinth]').on('click',function(e){
	$('.plinth-texture').attr('src',$(this).attr('data-plinth'))

	var PlinthPriceOld = $('[data-plinth].selected').attr('data-price')
	var PlinthPriceNew = $(this).attr('data-price')

	
	if(typeof PlinthPriceOld == 'undefined'){
		costUpdate( 0 , parseInt(PlinthPriceNew)*roomPlinth)
	}else{
		costUpdate( parseInt(PlinthPriceOld)*roomPlinth , parseInt(PlinthPriceNew)*roomPlinth)
	}

	$('[data-plinth]').removeClass('selected')
	$(this).addClass('selected');

})





$('[data-to]').on('click',function(e){
	console.log(window.curentStage)
	$('[data-room='+window.curentStage+'] [data-for]').removeClass('select');
	$('[data-room='+window.curentStage+'] [data-for='+$(this).attr('data-to')+']').addClass('select');
	$('[data-room='+window.curentStage+'] .calc-object').removeClass('active-step')
	$(this).addClass('active-step')

})


$('.back-btn').on('click',function(e){
	$('.color-variables').closest('.color-variables').removeClass('select');
})







// input-number
$('.input-number .add').on('click',function(e){
	var input = $(this).prev()
	var maxValue = input.attr('max');
	var curentValue = parseInt(input.val());
	if (curentValue < maxValue) {
		input.val(curentValue + 1);
	} 
})

$('.input-number .remove').on('click',function(e){
	var input = $(this).next()
	var minValue = input.attr('min');
	var curentValue = parseInt(input.val());
	if (curentValue > minValue) {
		input.val(curentValue - 1);
	} 
})

// form

$('input[type=checkbox]').on('change',function(e){
	if($(this).is(':checked')){
		costUpdate(0,$(this).attr('data-price'))
	}else{
		costUpdate($(this).attr('data-price'),0)
	}

})

$('.space-size').on('change',function(e){
		costUpdate($(this).attr('data-prev')* parseInt($(this).attr('data-price')) , $(this).val() * parseInt($(this).attr('data-price')))
		console.log($(this).attr('data-prev'))
		$(this).attr('data-prev', $(this).val())

})


function bodyLock(){
	if($('.repair-calc').height() > $(window).height()){
		console.log($(window).height())
		console.log($('.repair-calc').height())
	$('body').css('padding-right',getScrollBarWidth () + 'px');
	$('.calc-results').css('padding-right',getScrollBarWidth () + 'px');
	$('body').addClass('calc-init');
}else{
	$('body').addClass('calc-init');
}
}
function bodyFree(){
	if($('.repair-calc').height() > $(window).height()){
		console.log($(window).height())
		console.log($('.repair-calc').height())
	$('body').css('padding-right','0px');
	$('.calc-results').css('padding-right','0px');
	$('body').removeClass('calc-init');
}else{
	$('body').removeClass('calc-init');
}
}

function preloaderShow(){
	$('.preloader').addClass('preloader-active');
}
function preloaderHide(){
	$('.preloader').removeClass('preloader-active');
	$('.preloader-line').css('width','10%')
}

function LoadingImage(images){
	if (images.length!=0){
		preloaderShow();
		bodyLock()
		var length = images.length;
		var count = 1;
		images.each(function(){
			var img = new Image();
			$(this).attr('src',$(this).attr('data-load'));
			$(this).removeAttr('data-load')
			img.onload =  function() {
					console.log($(this).attr('src') + ' - done!');
					console.log(count , length)
					if (count == length) {
						preloaderHide()
						bodyFree()
						$('.builder-options').css('height',images.height()+'px')
					}else{
						$('.preloader-line').css('width',(100/length)*count + '%');
						count++;
						
					}
			}
			img.src = $(this).attr('src');
			console.log(img.src)
	});
}
else{
	preloaderShow();
	bodyLock();
$('.preloader-line').css('width','25%')
setTimeout(function () {
	$('.preloader-line').css('width','75%')
}, 700)

	setTimeout(function () {
	preloaderHide()
	bodyFree()	}, 1000)
}
}

$('.select-room-card').on('click', function(e){
	$('.select-room-dealog').addClass('hidden');
	window.curentStage = $(this).attr('data-room-choose');
		$('[data-room]').addClass('hiden-step');
		$('[data-room]').attr('data-active',false);
		console.log(window.curentStage)
			$('[data-room='+window.curentStage+']').removeClass('hiden-step');
			$('[data-room='+window.curentStage+']').attr('data-active',true);
			bodyFree();

			LoadingImage($('[data-room='+window.curentStage+'] .builder-render img[data-load]'));

			$('[data-room='+window.curentStage+']').removeClass('hiden-step');
})

$('.to-room-button').on('click', function(e){
	$('.select-room-dealog').removeClass('hidden');
	bodyLock();
})


$('.rc-presets-card-inner').on('click', function(e){
	
})



$('.start-design').on('click',function(e){
	if($('.space-size').val()!=''){
		$('.intro-calc').removeClass('intro-show')

	}else{
		$('.space-size').siblings('.error-tooltip').addClass('error-show')
		$('.space-size').siblings('.error-tooltip').find('.eroror-message').text($('.space-size').attr('data-error'))
		setTimeout(function () {
			$('.space-size').siblings('.error-tooltip').removeClass('error-show')
	}, 3000)
	}
})

});