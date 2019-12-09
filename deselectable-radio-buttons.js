// jQuery plugin to make radio buttons deselectable.
(function($){
  $(document.body).on('click mousedown keydown keyup', 'input[type=radio]', function(e){
    var radioButton = $(e.target);
    var originallyChecked = false;
    if('keydown' === e.type || 'mousedown' === e.type){
      originallyChecked = radioButton.prop('checked');
      radioButton.data('originally-checked', originallyChecked);
    }
    if(('keyup' === e.type && 32 === e.keyCode) || 'click' === e.type){
      originallyChecked = radioButton.data('originally-checked');
      if(originallyChecked){
        radioButton.prop('checked', false).removeAttr('checked');
      } else {
        radioButton.prop('checked', true).attr('checked', 'checked');
      }
    }
  });
}(jQuery));
