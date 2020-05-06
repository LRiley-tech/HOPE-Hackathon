$(document).ready(function() {

  $(form).on(submit, function() {

    let item = $('form item');
    let todo = {item: item.val()};

    $.ajax({
      type: "POST",
      url: "/todo.js",
      data: todo,
      success: function(data) {
        location.reload();
      }
    });
    return false;
  })

  $.ajax({
    type: "DELETE",
    url: "/todo.js",
    success: function(data) {
      location.reload('')
    }
  })

})
