
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
		$('[data-room='+window.curentStage+']').attr('data-active',false)
		window.curentStage++;
		console.log(window.curentStage)
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




$(".flore-texture").on('load',function(){
	$('.builder-options').css('height',$('.flore-texture').height()+'px')
	console.log('loaded', $('.flore-texture').height())
});




$('[data-color]').on('click',function(e){
	$('[data-room='+window.curentStage+'] .builder-render-bg').css('background',$(this).find('.option-img > svg > path').attr('fill'))
	$('[data-room='+window.curentStage+'] [data-color]').removeClass('selected')
	$(this).addClass('selected');

})

$('[data-wall]').on('click',function(e){
	$('.wall-texture').attr('src',$(this).attr('data-wall'))


	costUpdate($('[data-wall].selected').attr('data-price'),$(this).attr('data-price'))


	$('[data-wall]').removeClass('selected')
	$(this).addClass('selected');

	if($('.texture-options').attr('data-complite')=='false'){
		$('.progress-line-inner').css('width', readiCalc(curentStage) + 25 + '%');
		$('.texture-options').attr('data-complite','true')
	}

})



$('[data-flore]').on('click',function(e){
	$('.flore-texture').attr('src',$(this).attr('data-flore'))
	//вычисление цены пола 
var florePriceOld = $('[data-flore].selected').attr('data-price')
var florePriceNew = $(this).attr('data-price')
var floreSize = parseInt($('.space-size').val());
if(typeof florePriceOld == 'undefined'){
	costUpdate( 0 , parseInt(florePriceNew) * floreSize)
}else{
	costUpdate( parseInt(florePriceOld) * floreSize , parseInt(florePriceNew) * floreSize)
}
	
	$('[data-flore]').removeClass('selected')
	$(this).addClass('selected');

})

$('[data-kitchen-flore]').on('click',function(e){
	$('.kithen-flore-texture').attr('src',$(this).attr('data-kitchen-flore'))
	
	//вычисление цены пола 
var florePriceOld = $('[data-kitchen-flore].selected').attr('data-price')
var florePriceNew = $(this).attr('data-price')
var floreSize = parseInt($('.space-size').val());
if(typeof florePriceOld == 'undefined'){
	costUpdate( 0 , parseInt(florePriceNew) * floreSize)
}else{
	costUpdate( parseInt(florePriceOld) * floreSize , parseInt(florePriceNew) * floreSize)
}
	
	$('[data-kitchen-flore]').removeClass('selected')
	$(this).addClass('selected');

})




$('[data-kitchen-tile]').on('click',function(e){
	$('.kithen-tile-texture').attr('src',$(this).attr('data-kitchen-tile'))
	
	//вычисление цены пола 
var florePriceOld = $('[data-kitchen-tile].selected').attr('data-price')
var florePriceNew = $(this).attr('data-price')
if(typeof florePriceOld == 'undefined'){
	costUpdate( 0 , parseInt(florePriceNew))
}else{
	costUpdate( parseInt(florePriceOld) , parseInt(florePriceNew))
}
	
	$('[data-kitchen-tile]').removeClass('selected')
	$(this).addClass('selected');

})





$('[data-door]').on('click',function(e){
	$('.door-texture').attr('src',$(this).attr('data-door'))

	var doorPriceOld = $('[data-door].selected').attr('data-price')
	var doorPriceNew = $(this).attr('data-price')
	var doorTotal = parseInt($('.total-doors').val());
	

	if(typeof doorPriceOld == 'undefined'){
		costUpdate( 0 , parseInt(doorPriceNew) * doorTotal)
	}else{
		costUpdate( parseInt(doorPriceOld) * doorTotal , parseInt(doorPriceNew) * doorTotal)
	}

	$('[data-door]').removeClass('selected')
	$(this).addClass('selected');

	if($('.door-options').attr('data-complite')=='false'){
		$('.progress-line-inner').css('width', readiCalc(curentStage) + 25 + '%');
		$('.door-options').attr('data-complite','true')
	}
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
		costUpdate( 0 , parseInt(doorPriceNew))
	}else{
		costUpdate( parseInt(doorPriceOld) , parseInt(doorPriceNew))
	}

	$('[data-kitchen-wall]').removeClass('selected')
	$(this).addClass('selected');
})


$('[data-plinth]').on('click',function(e){
	$('.plinth-texture').attr('src',$(this).attr('data-plinth'))

	// var doorPriceOld = $('[data-plinth].selected').attr('data-price')
	// var doorPriceNew = $(this).attr('data-price')
	// var doorTotal = parseInt($('.total-doors').val());
	

	// if(typeof doorPriceOld == 'undefined'){
	// 	costUpdate( 0 , parseInt(doorPriceNew) * doorTotal)
	// }else{
	// 	costUpdate( parseInt(doorPriceOld) * doorTotal , parseInt(doorPriceNew) * doorTotal)
	// }

	$('[data-plinth]').removeClass('selected')
	$(this).addClass('selected');

	if($('.plinth-options').attr('data-complite')=='false'){
		$('.progress-line-inner').css('width', readiCalc(curentStage) + 25 + '%');
		$('.plinth-options').attr('data-complite','true')
	}
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


$('.select-room-card').on('click', function(e){
	$('.select-room-dealog').addClass('hidden');
	window.curentStage = $(this).attr('data-room-choose')
		$('[data-room]').addClass('hiden-step');
		$('[data-room]').attr('data-active',false)
		console.log(window.curentStage)
			$('[data-room='+window.curentStage+']').removeClass('hiden-step');
			$('[data-room='+window.curentStage+']').attr('data-active',true);
			$('body').css('padding-right',0 + 'px');
			$('body').removeClass('calc-init');

})

$('.to-room-button').on('click', function(e){
	$('.select-room-dealog').removeClass('hidden');
	$('body').css('padding-right',getScrollBarWidth () + 'px');
	$('body').addClass('calc-init');
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