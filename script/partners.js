// company registration form
jQuery(document).ready(function() {
  $.validator.addMethod(
    "validWebsite", 
    function(url, element) {
      return /^(http(s)?:\/\/)?(www\.)?[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$/.test(url);
    },
    "Website URL should be valid"
);
  var form = jQuery('#partners-form')
  form.validate({
    rules: {
      companyName: {
        required: true
      },
      contactPerson: {
        required: true
      },
      eadd: {
        required: true,
        email: true
      },
      contactPhone: {
        required: true
      },
      companyAddress: {
        required: true
      },
      designation: {
        required: true
      },
      industryType: {
        required: true
      },
      website: {
        required: true,
        validWebsite: true
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
          jQuery('#partners-form').hide();
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