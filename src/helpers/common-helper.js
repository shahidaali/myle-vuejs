export default {
	getCategoryOptions: function(categories) {
		console.log(categories, 'categories11');
		let options = [];
	    for(var i = 0; i < categories.length; i++) {
	    	options.push({
	    		name : categories[i].name,
	    		id : categories[i].id,
	    	});
	    }
	    return options;
	},
	getSubCategories: function(categories, selectedCategories) {
		let options = [];
	    for(var i = 0; i < selectedCategories.length; i++) {
	    	for(var j = 0; j < categories.length; j++) {
	    		if( categories[j].id == selectedCategories[i].id ) {
			    	options.push({
			    		group : categories[j].name,
			    		groupid : categories[j].id,
			    		subcategories : categories[j].subcategories,
			    	});
	    		}
		    }
	    }
	    return options;
	}
}