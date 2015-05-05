/* 
    selected.js
    Prevent multiple selections of the same value. In Development
    Created on : Apr 30, 2015
    Author     : JR Chew
*/

(function(){
	
	// constructor
	this.unique = function(){
		
		var options;
		
		var defaults = {
			container: '',
			selector: '',
			options: ''
		};
		
		// get arguments from the object // where do arguments come from?
		if(arguments[0] && typeof arguments[0] === 'object'){
			this.options = extendDefaults(defaults, arguments[0]);
		};
		
		options = this.options;
		
		$(options.selector).change(function(){

			disableOptions.call(options);

		});

	};
	
	function disableOptions(){
		
		var options = this;

		selected = [];
		non_selected = [];
		
		// make an array of selected items 
		$(options.selector+' option:selected').each(function(){
			
			if($(this).val() && selected.indexOf($(this).val()) === -1){
			
				selected.push(parseInt($(this).val()));
			
			}
			
		});

		// make an array of non-selected items 
		non_selected = options.options.filter(function(index) { return selected.indexOf(index) === -1; });		
		
		$(options.selector+' option').each(function(index, option){

			if($(this).val() !== ''){ // ignore options with empty values
				
				if($.inArray(parseInt($(this).val()), selected)){
					$(this).removeAttr('disabled');
				}
				
				if($.inArray(parseInt($(this).val()), non_selected)){
					
					$(this).attr('disabled', 'disabled');
				}
				
			}
		});

	}

	// extend defaults with user speficied options
	function extendDefaults(source, properties){
		
		var property;
		for(property in properties){
			if (properties.hasOwnProperty(property)){
				source[property] = properties[property];
			}
		}
		
		return source;
	}

}());
