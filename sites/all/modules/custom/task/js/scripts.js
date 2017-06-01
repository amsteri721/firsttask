
/*
jQuery(function($){
  $("input[name='pickup-time[time]']").timeInput();
});
*/

(function ($) {
  Drupal.behaviors.blockSettingsSummary = {
    attach: function (context) {
      $("#edit-number").mask("(999) 999-9999");
      $("#edit-pickup-time").timepicki();
      $("#edit-flight-time").timepicki();
      $("#edit-travel-date").datepicker();
      //$("#edit-flight-time").before('<label class="image-time" for="edit-flight-time"></label>');
      //$("#edit-pickup-time").once('test').after('<label class="image-time" for="edit-pickup-time"></label>');
      //$("#edit-travel-date-datepicker-popup-0").after('<label class="image-date" for="edit-travel-date-datepicker-popup-0"></label>');
    }
  }
})(jQuery);
