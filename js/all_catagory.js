$(document).ready(function() {
	$(".i1").click(function(){
		$(this).addClass("ac_item_active");
		$(".i2,.i3,.i4,.i5,.i6,.i7,.i8,.i9,.i10,.i11,.i12").removeClass("ac_item_active");
	})
	$(".i2").click(function(){
		$(this).addClass("ac_item_active");
		$(".i1,.i3,.i4,.i5,.i6,.i7,.i8,.i9,.i10,.i11,.i12").removeClass("ac_item_active");
	})
	$(".i3").click(function(){
		$(this).addClass("ac_item_active");
		$(".i1,.i2,.i4,.i5,.i6,.i7,.i8,.i9,.i10,.i11,.i12").removeClass("ac_item_active");
	})
	$(".i4").click(function(){
		$(this).addClass("ac_item_active");
		$(".i2,.i3,.i1,.i5,.i6,.i7,.i8,.i9,.i10,.i11,.i12").removeClass("ac_item_active");
	})
	$(".i5").click(function(){
		$(this).addClass("ac_item_active");
		$(".i2,.i3,.i4,.i1,.i6,.i7,.i8,.i9,.i10,.i11,.i12").removeClass("ac_item_active");
	})
	$(".i6").click(function(){
		$(this).addClass("ac_item_active");
		$(".i2,.i3,.i4,.i5,.i1,.i7,.i8,.i9,.i10,.i11,.i12").removeClass("ac_item_active");
	})
	$(".i7").click(function(){
		$(this).addClass("ac_item_active");
		$(".i2,.i3,.i4,.i5,.i6,.i1,.i8,.i9,.i10,.i11,.i12").removeClass("ac_item_active");
	})
	$(".i8").click(function(){
		$(this).addClass("ac_item_active");
		$(".i2,.i3,.i4,.i5,.i6,.i7,.i1,.i9,.i10,.i11,.i12").removeClass("ac_item_active");
	})
	$(".i9").click(function(){
		$(this).addClass("ac_item_active");
		$(".i2,.i3,.i4,.i5,.i6,.i7,.i8,.i1,.i10,.i11,.i12").removeClass("ac_item_active");
	})
	$(".i10").click(function(){
		$(this).addClass("ac_item_active");
		$(".i2,.i3,.i4,.i5,.i6,.i7,.i8,.i9,.i1,.i11,.i12").removeClass("ac_item_active");
	})
	$(".i11").click(function(){
		$(this).addClass("ac_item_active");
		$(".i2,.i3,.i4,.i5,.i6,.i7,.i8,.i9,.i10,.i1,.i12").removeClass("ac_item_active");
	})
	$(".i12").click(function(){
		$(this).addClass("ac_item_active");
		$(".i2,.i3,.i4,.i5,.i6,.i7,.i8,.i9,.i10,.i11,.i1").removeClass("ac_item_active");
	})
	
});