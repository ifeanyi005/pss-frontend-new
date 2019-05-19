// company registration form
jQuery(document).ready(function() {
  var form = jQuery('#registration-form')
  form.validate({
    rules: {
      companyName: {
        required: true
      },
      companyLocation: {
        required: true
      },
      numberOfLocations: {
        required: true
      },
      industryType: {
        required: true
      },
      staffStrength: {
        required: true
      },
      annualRevenue: {
        required: true
      },
      quarterlyProcurementSpend: {
        required: true
      },
      plan: {
        required: true
      },
      firstName: {
        required: true
      },
      lastName: {
        required: true
      },
      designation: {
        required: true
      },
      emailAddress: {
        required: true,
        email: true
      },
      phoneNumber: {
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
          jQuery('#registration-form').hide();
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

  var plan = getParameterByName('plan')
  if (plan === 'free') {
    let freeTier = jQuery(document).find('option[value="Free Tier"]')
    jQuery(freeTier).prop('selected', true)
  } else if (plan === 'basic') {
    let basicTier = jQuery(document).find('option[value="Basic"]')
    jQuery(basicTier).prop('selected', true)
  } else if (plan === 'premium') {
    let premiumTier = jQuery(document).find('option[value="Premium"]')
    jQuery(premiumTier).prop('selected', true)
  } else if (plan === 'integra') {
    let integraTier = jQuery(document).find('option[value="Gloopro Integra"]')
    jQuery(integraTier).prop('selected', true)
  }
})

function objectifyForm(formArray) {//serialize data function
  var returnArray = {};
  for (var i = 0; i < formArray.length; i++){
    returnArray[formArray[i]['name']] = formArray[i]['value'];
  }
  return returnArray;
}

function getParameterByName(name, url) {
  if (!url) url = window.location.href;
  name = name.replace(/[\[\]]/g, '\\$&');
  var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
      results = regex.exec(url);
  if (!results) return null;
  if (!results[2]) return '';
  return decodeURIComponent(results[2].replace(/\+/g, ' '));
}