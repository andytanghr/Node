$(function() {
  $.getJSON('api', updateFeedback);
  console.log('getJSON works');


  $('.feedbackForm').submit(function(e) {
    e.preventDefault();
    console.log('submit works'); // it does
    $.post('api', { // post injects the following to HTML
      email: $('#feedbackEmail').val(),
      cheezburgers: $('#feedbackCheezburgers').val(),
      message: $('#feedbackMessage').val()
    }, updateFeedback);
  });

  function updateFeedback(data) {
    var output = '';

    $.each(data, function(key, item) {
      output += '<div class="feedbackEntry">';
      output += '    <div class="feedbackEmail">';
      output += '        <h6>' + item.email + '</h6>';
      output += '        <h5>' + item.cheezburgers + ' cheezburgers</h5>';
      output += '            <p>' + item.message + '</p>';
      output += '    </div>';
      output += '</div>';
    });
    console.log('feedback func works');
    $('.feedback').html(output);
  }
});