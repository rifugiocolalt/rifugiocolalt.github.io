jQuery(document).ready(function($) {
	"use strict";

	//
	// Events
	//
	$( "#ci_cpt_event_date" ).datepicker({
		dateFormat: 'yy-mm-dd'
	});

	$( "#ci_cpt_event_time" ).timepicker({
		ampm: false,
		timeFormat: 'HH:mm',
		stepMinute: 5
	});

	var isEnabled = $('#ci_cpt_event_recurrent').prop('checked');
	var datetime = $('#event_datetime');
	var recurrent = $('#event_recurrent');

	if (isEnabled) {
		datetime.hide();
		recurrent.show();
	}
	else {
		datetime.show();
		recurrent.hide();
	}

	$('#ci_cpt_event_recurrent').click(function(){
		var datetime = $('#event_datetime');
		var recurrent = $('#event_recurrent');
		if ($(this).prop('checked')) {
			datetime.hide();
			recurrent.show();
		}
		else {
			datetime.show();
			recurrent.hide();
		}
	});


	// Repeating fields
	_sortable();

	var repeating_fields = $('.ci-repeating-fields');
	repeating_fields.each(function(){
		var add_field = $(this).find('.ci-repeating-add-field');
		add_field.click(function(){
			var repeatable_area = $(this).siblings('.inner');
			var fields = repeatable_area.children('.field-prototype').clone(true).removeClass('field-prototype').removeAttr('style').appendTo(repeatable_area);
			return false;
		});
	})

	$('body').on('click', '.ci-repeating-remove-field', function() {
		var field = $(this).parents('.post-field');
		field.remove();
		return false;
	});


/*
	// Listing template - Post type dropdown
	var pt_dropdown = $('#ci_page_listing_meta #listing_post_type');
	if( pt_dropdown.length > 0 ) {
		var pt_arr = [ 'post', 'cpt_portfolio', 'product' ],
			ll_sidebar = $( '#ci_page_listing_meta #ll_sidebar' ),
			ll_columns = $( '#ci_page_listing_meta #ll_columns' ),
			cb_isotope = $( '#ci_page_listing_meta #listing_isotope' );

		if( pt_arr.indexOf( pt_dropdown.val() ) != -1 ) {
			ll_sidebar.prop('disabled', true);
			ll_columns.prop('checked', true);
			cb_isotope.prop('disabled', false);
		} else {
			ll_sidebar.prop('disabled', false);
			cb_isotope.prop('disabled', true);
		}

		pt_dropdown.change(function() {
			if( pt_arr.indexOf( $(this).val() ) != -1 ) {
				ll_sidebar.prop('disabled', true);
				ll_columns.prop('checked', true);
				cb_isotope.prop('disabled', false);
			} else {
				ll_sidebar.prop('disabled', false);
				cb_isotope.prop('disabled', true);
			}
		});
	}
*/
});

_sortable = function() {
	jQuery('.ci-repeating-fields .inner').sortable({ placeholder: 'ui-state-highlight' });
}