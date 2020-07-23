
$(document).ready(function() {
	var curentStage = 1;

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

function readiCalc(element){
 return	($('.progress-line-inner').width() / $('.progress-line-inner').parent().width() * 100);
}

	var activeStep = 1
// $('[data-step]').on('click',function(e){
// 	$('.flore-texture').attr('src',$(this).attr('data-flore'))
// })

$('.builder-options').height($('.flore-texture').height()+'px')



$('[data-color]').on('click',function(e){
	$('.builder-render-bg').css('background',$(this).find('.option-img > svg > path').attr('fill'))
	$('[data-color]').removeClass('selected')
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

	if($('.flore-options').attr('data-complite')=='false'){
		$('.progress-line-inner').css('width', readiCalc(curentStage) + 25 + '%');
		$('.flore-options').attr('data-complite','true')
	}
})


$('[data-door]').on('click',function(e){
	$('.door-texture').attr('src',$(this).attr('data-door'))

	costUpdate($('[data-door].selected').attr('data-price'),$(this).attr('data-price'))
	$('[data-door]').removeClass('selected')
	$(this).addClass('selected');

	if($('.door-options').attr('data-complite')=='false'){
		$('.progress-line-inner').css('width', readiCalc(curentStage) + 25 + '%');
		$('.door-options').attr('data-complite','true')
	}
})




$('[data-step]').on('click',function(e){
	$('[data-step]').removeClass('active-step')
	if($(this).attr('data-step')==2){
		$('.flore-options').addClass('select-flore')
		$('.door-options').removeClass('select-door')

	}
	if($(this).attr('data-step')==1){
		$('.flore-options').removeClass('select-flore')
		$('.door-options').removeClass('select-door')
	}
	if($(this).attr('data-step')==3){
		$('.door-options').addClass('select-door')
		$('[data-step=3] .active-step').removeClass('not-selected')
	}
	$(this).addClass('active-step')
})

$('.color-show').on('click',function(e){
		$('.color-variables').addClass('select-color')
})
$('.back-btn').on('click',function(e){
	$('.color-variables').removeClass('select-color')
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
});