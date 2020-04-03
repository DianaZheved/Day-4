$( function() {
    $( "#slider-range" ).slider({
      range: true,
      min: 0,
      max: 20000,
      values: [ 1000, 10000 ],
      slide: function( event, ui ) {
        $( "#amount_f" ).val(ui.values[ 0 ] + " Грн.");
        $( "#amount_s" ).val(ui.values[ 1 ] + " Грн." );
      }
    });
    $( "#amount_f" ).val( $( "#slider-range" ).slider( "values", 0 ) + " Грн.");
    $( "#amount_s" ).val( $( "#slider-range" ).slider( "values", 1 ) + " Грн.");
  } );


  $( function() {
    $( "#slider-range2" ).slider({
      range: true,
      min: 0,
      max: 20000,
      values: [ 1000, 10000 ],
      slide: function( event, ui ) {
        $( "#amount_f2" ).val(ui.values[ 0 ] + " Грн.");
        $( "#amount_s2" ).val(ui.values[ 1 ] + " Грн." );
      }
    });
    $( "#amount_f2" ).val( $( "#slider-range2" ).slider( "values", 0 ) + " Грн.");
    $( "#amount_s2" ).val( $( "#slider-range2" ).slider( "values", 1 ) + " Грн.");
  } );

  $( function() {
    $('.filter > ul > li').click(function(){
        if($(this).hasClass('active')){
            $(this).removeClass('active');
        }else{
            $(this).addClass('active');
        }
    });
    return false;
  });