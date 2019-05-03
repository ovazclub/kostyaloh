$(document).ready(function() { // Ждём загрузки страницы
	
	$(".image").click(function(){	// Событие клика на маленькое изображение
	  var img = $(this);	// Получаем изображение, на которое кликнули
		var src = img.attr('src'); // Достаем из этого изображения путь до картинки
		var op = img.attr('op');
		$("body").append("<div class='popup'>"+ //Добавляем в тело документа разметку всплывающего окна
			"<div class='popup_bg'></div>"+ // Блок, который будет служить фоном затемненным
			"<img src='"+src+"' class='popup_img' />"+ // Само увеличенное фото
			"<div class='nad'>"+op+"</div>"+
			"<span class='close'></span>"+
			"</div>");
		$(".popup").fadeIn(200); // Медленно выводим изображение
		$(".popup_bg").click(function(){	// Событие клика на затемненный фон	   
			$(".popup").fadeOut(200);	// Медленно убираем всплывающее окн	
      setTimeout(function() {	// Выставляем таймер
			$(".popup").remove(); // Удаляем разметку всплывающего окна
			$("span").remove();
			}, 200);
		});
		$(".close").click(function(){	// Событие клика на затемненный фон	   
			$(".popup").fadeOut(200);	// Медленно убираем всплывающее окн	
      setTimeout(function() {	// Выставляем таймер
			$(".popup").remove(); // Удаляем разметку всплывающего окна
			$("span").remove();
			}, 200);
		});
	});
	
});