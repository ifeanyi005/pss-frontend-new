// company registration form
jQuery(document).ready(function() {
  var form = jQuery('#contact-form')
  form.validate({
    rules: {
      companyName: {
        required: true
      },
      name: {
        required: true
      },
      eadd: {
        required: true,
        email: true
      },
      phoneNumber: {
        required: true
      },
      message: {
        required: true
      }
    },
    submitHandler: function(form, e) {
      e.preventDefault();
      jQuery('#error-div').hide();
      var url = jQuery(form).attr('action');
      var data = jQuery(form).serializeArray();
      var formData = objectifyForm(data);
      jQuery('#submit').prop('disabled', true);
      jQuery('#submit').html('Submitting...');
      jQuery.ajax({
        type: "POST",
        url: url,
        data: formData,
        dataType: 'json',
        success: function (response) {
          var message = response.result.message;
          jQuery('#submit').html('Submit');
          jQuery('#submit').prop('disabled', false);
          jQuery('#status-div').addClass('alert-success');
          jQuery('#status-div').removeClass('alert-danger');
          jQuery('#status-div').html(message);
          jQuery('#contact-form').hide();
          jQuery('#status-div').show();
        },
        error: function (error) {
          var errorMessage = error.responseJSON.result;
          jQuery('#submit').html('Submit');
          jQuery('#submit').prop('disabled', false);
          jQuery('#status-div').removeClass('alert-success');
          jQuery('#status-div').addClass('alert-danger');
          jQuery('#status-div').html(errorMessage);
          jQuery('#status-div').show();
          window.location.href = '#status-div';
        }
      });
    }
  })
})

function objectifyForm(formArray) {//serialize data function
  var returnArray = {};
  for (var i = 0; i < formArray.length; i++){
    returnArray[formArray[i]['name']] = formArray[i]['value'];
  }
  return returnArray;
}