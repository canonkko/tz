$(function() {

  $(".form").validate({
    rules: {
      name: {
        required: true,
        minlength: 2
      },
      phone: {
        required: true
      },
      email: {
        required: true,
        email: true
      }
    },
    messages: {
      name: {
        required: "Обязательно для заполнения",
        minlength: "Минимум 2 символа"
      },
      phone: {
        required: "Обязательно для заполнения"
      },
      email: {
        required: "Обязательно для заполнения",
        email: "Введите правильный e-mail"
      }
    },
    focusCleanup: true,
    focusInvalid: false,
    submitHandler: function (form) {
      $.ajax({
        type: "POST",
        // url: "mail.php", //Change
        data: $(form).serialize()
      }).done(function () {
        $.fancybox.open('<div class="message"><h2>Спасибо!</h2><p>Ваша заявка отправлена успешно!</p><p>Мы перезвоним вам через 15 минут.</p></div>');
        // alert("Thank you!");
        setTimeout(function () {
          // Done Functions
          $(form).trigger("reset");
          $.fancybox.close();
        }, 3000);
      });
      return false;
    }
  });


  var elem = document.querySelector('.photo__item');
  var msnry = new Masonry(elem, {
    // options
    itemSelector: '.photo__item-inner',
    // columnWidth: 70
  });

});
