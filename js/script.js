'use strict';
$(document).ready(function() {
	$("#menu").fadeIn(1200)
	$('.go_to').click(function() {
		var scroll_el = $(this).attr('href');
		if ($(scroll_el).length != 0) {
			$('html, body').animate({
				scrollTop: $(scroll_el).offset().top
			}, 500);
		}
		return false;
	});
	$('.go_tomenu').click(function() {
		var scroll_el = $(this).attr('href');
		if ($(scroll_el).length != 0) {
			$('html, body').animate({
				scrollTop: $(scroll_el).offset().top - 60
			}, 500);
		}
		return false;
	});
	$('.go_tocontacts').click(function() {
		var scroll_el = $(this).attr('href');
		if ($(scroll_el).length != 0) {
			$('html, body').animate({
				scrollTop: $(scroll_el).offset().top
			}, 500);
			console.log($(scroll_el).offset().top);
		}
		return false;
	});
	$('.nav-toggle').click(function() {
		$(this).toggleClass('active');
		$("#menu3").toggleClass('active');
	});
	$(".register").click(function() {
		var div = $("<div/>")
		$("body").append(div);
		div.addClass("register1");
		var divClose = $("<div/>")
		$(div).append(divClose);
		divClose.addClass("exit");
		var img = $("<img>");
		$(divClose).append(img);
		$(img).attr("src", "img/crossWhite.png")
		$(img).addClass("img")
		$(".exit").click(function() {
			$(divForma).removeClass("forma");
			$(divForma).addClass("outin1");
			setTimeout(function() {
				$(div).removeClass("register1");
				$(div).addClass("outin");
				setTimeout(function() {
					$(".outin").remove()
				}, 410)
			}, 400)
		})
		var divForma = $("<div/>")
		$(div).append(divForma);
		divForma.addClass("forma");
		var h1 = $("<h1/>")
		$(divForma).append(h1);
		h1.text("Бронирование");
		var p = $("<p/>")
		$(divForma).append(p);
		p.text("Укажите количество гостей, желаемое время посещения, а также любую другую дополнительную информацию. Мы перезвоним вам в ближайшее время. Время работы: Пн-Вск - 7:00-23:00.");
		var forma = $("<form/>");
		$(divForma).append(forma);
		var input = $("<input>");
		$(forma).append(input);
		$(input).attr("type", "text");
		$(input).attr("name", "name");
		$(input).attr("placeholder", "ВАШЕ ИМЯ");
		$(input).addClass("input");
		var input1 = $("<input>");
		$(forma).append(input1);
		$(input1).attr("type", "text");
		$(input1).attr("name", "name");
		$(input1).attr("placeholder", "ТЕЛЕФОН");
		$(input1).addClass("input");
		var textareas = $("<textarea>");
		$(forma).append(textareas);
		$(textareas).attr("type", "text");
		$(textareas).attr("name", "name");
		$(textareas).attr("placeholder", "ИНФОРМАЦИЯ ПО БРОНИРОВАНИЮ");
		$(textareas).addClass("textarea");
		var input2 = $("<input>");
		$(forma).append(input2);
		$(input2).attr("type", "submit");
		$(input2).attr("value", "ОТПРАВИТЬ");
		$(input2).addClass("button");
		/* $( divForma ).show( "slide", 1000 ); */
	})
	$(function() {
		var x;
		$(window).scroll(function(event) {
			x = $(window).scrollTop() / 2
			if (document.body.clientWidth > 600) {
				$("#box").css("transform", "translateY(" + x + "px)")
			}
			if ($(this).scrollTop() > 400) {
				$(".menu2").addClass("menuDown");
			} else if ($(this).scrollTop() < 400) {
				$(".menu2").removeClass("menuDown");
			}
		});
	});
});
/*Google map*/
var marker;

function initMap() {
	var uluru = {
		lat: 53.9470034,
		lng: 27.6288557
	};
	var map = new google.maps.Map(document.getElementById('gmap'), {
		zoom: 17,
		center: uluru
	});
	marker = new google.maps.Marker({
		map: map,
		draggable: false,
		animation: google.maps.Animation.DROP,
		position: uluru,
		title: 'ДА ДА Я ДА',
	});
	marker.addListener('click', toggleBounce);
}

function toggleBounce() {
	if (marker.getAnimation() !== null) {
		marker.setAnimation(null);
	} else {
		marker.setAnimation(google.maps.Animation.BOUNCE);
	}
}
/*end Google map*/