$(document).ready(function() {

  $('form').on('submit', function() {

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


  $(li).on('click', function() {
    var item  = $(this).text().replace(/ /g, "-");
    $.ajax({
      type: "DELETE",
      url: "/todo.js/" + item,
      success: function(data) {
        location.reload()
      }
    })
  
  })
  })
 
