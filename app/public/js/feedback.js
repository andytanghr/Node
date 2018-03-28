$(function() {
  console.log('getJSON works'); // it works!
  $.getJSON('/api', updateFeedback);
  


  $('.feedbackForm').submit(function(e) {
    e.preventDefault();
    console.log('submit button works');
    $.post('/api', { // post injects the following to HTML
      email: $('#feedbackEmail').val(),
      cheezburgers: $('#feedbackCheezburgers').val(),
      message: $('#feedbackMessage').val()
    }, updateFeedback);
  });

  function updateFeedback(data) {
    var output = '';
    console.log('feedback func works');
    $.each(data, function(key, item) {
      output += '<div class="feedbackEntry">';
      output += '    <div class="feedbackEmail">';
      output += '        <h6>' + item.email + '</h6>';
      output += '        <h5>' + item.cheezburgers + ' cheezburgers</h5>';
      output += '            <p>' + item.message + '</p>';
      output += '    </div>';
      output += '</div>';
    });
    
    $('.feedback').html(output);
  }
});