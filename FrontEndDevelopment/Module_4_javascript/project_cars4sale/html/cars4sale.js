var vehicles
var sort_by, sort_order
var filters
var per_page_limit, page_number

function show_page(){

	// Initialize settings
	sort_by 		= "Price"
	sort_order 		= "H"
	per_page_limit 	= 5
	page_number 	= 1

	// Initialize global variable vehicles to pre-defined _vehicles in data.js
	vehicles = _vehicles;

	get_initial_filter_list()
	show_filter_form()
	show_car_list()

	// Internal function
	function get_initial_filter_list(){
		filters = {}
		filters["Make"] 	= []
		filters["Exterior"] = []
		filters["Interior"] = []
		for(let i=0; i<_vehicles.length; i++){
			let v = _vehicles[i]
			if(filters["Make"].indexOf(v.Make) == -1){ // Prevent duplicates
				filters["Make"].push(v.Make)
			}
			if(filters["Exterior"].indexOf(v.Exterior) == -1){
				filters["Exterior"].push(v.Exterior)
			}
			if(filters["Interior"].indexOf(v.Interior) == -1){
				filters["Interior"].push(v.Interior)
			}
		}
	}
	function show_filter_form(){
		let str = ''
		str += `
			<table border=0 cellpadding=5 cellspacing=0 width=100%>
				<tr>
					<td bgcolor=#eeeeee valign=top>`

					// Make, Exterior, Interior
					for(let key in filters){
						let v = filters[key]
						let height = v.length * 15
						str += `
						<table class="filter_table" cellpadding=1 cellspacing=1 width=100%>
							<tr>
								<td>
									<div class="filter_list_header">`+key+`</div>
									<br/>
									<div class="filter_list" style="height:`+height+`px">
									<input id="filter_`+key+`_all" type="checkbox" name="all" value="all" onChange=filter_data("`+key+`,*") checked> All<br/>`
						for(let i=0; i<v.length; i++){
							let m = v[i]
							str += `<input id="filter_`+key+`_`+m+`" type="checkbox" name="`+m+`" value="`+m+`" onChange=filter_data("`+key+`")> ` + m + `<br/>`
						}
						str += `
									</div>
								</td>
							</tr>
						</table>`
					}

					// Price
					let possible_price = ["1,000","2,000","5,000","10,000","15,000","20,000","25,000","30,000","35,000","40,000","45,000","50,000","60,000","70,000","80,000","90,000","100,000"]
					str += `
						<table class="filter_table" cellpadding=1 cellspacing=1 width=100%>
							<tr>
								<td>
									<div class="filter_list_header">Price</div>
									<br/>
									<table border=0 cellpadding=2 cellspacing=1>
										<tr>
											<td>
												<select id="MinPrice" onChange="filter_data()">
													<option selected id="min_price_*" value="0">Min Price</option>`

					for(let i=0; i<possible_price.length; i++){
						let p = possible_price[i]
						str += `
													<option id="min_price_` + p + `" value="` + p +`">$` + p + `</option>`
					}
					str += 	`
												</select>
											</td>
											<td>
												<select id="MaxPrice" onChange="filter_data()">`
												for(let i=0; i<possible_price.length; i++){
													let p = possible_price[i]
													str += `
													<option id="max_price_` + p + `" value="` + p +`">$` + p + `</option>`
												}
					str += 	`
													<option selected id="max_price_*" value="0">Max Price</option>
												</select>
											</td>
										</tr>
									</table>
								</td>
							</tr>
						</table>`

					// Mileage
					let mileage = ["1,000","2,000","5,000","10,000","15,000","20,000","25,000","30,000","35,000","40,000","45,000","50,000","60,000","70,000","80,000","90,000","100,000"]
					str += `
						<table class="filter_table" cellpadding=1 cellspacing=1 width=100%>
							<tr>
								<td>
									<div class="filter_list_header">Mileage</div>
									<br/>
									<table border=0 cellpadding=2 cellspacing=1>
										<tr>
											<td>
												<select id="Mileage" onChange="filter_data()">`
												for(let i=0; i<mileage.length; i++){
													let p = mileage[i]
													str += `<option id="mileage_` + p + `" value="` + p +`">` + p + ` or less</option>`
												}
					str += 	`
														<option selected id="mileage_*" value="0">No Maximum</option>
													</select>
											</td>
										</tr>
									</table>
								</td>
							</tr>
						</table>
					</td>
				</tr>
			</table>`
		document.getElementById("filter_form").innerHTML = str
	}
}

function show_car_list(){
	var str = ''
	str += `<table id="searchtable" cellpadding=5 cellspacing=0 width=800>`
		+ `<tr><td colspan=3 id="list_sort_by">`+insert_sort_by(sort_by,sort_order)+`</td></tr>`

	// How many cars to show per page
	let num_cars_to_show = Math.min(vehicles.length, per_page_limit)
	let startIdx = (page_number - 1) * num_cars_to_show
	let endIdx = Math.min(startIdx + num_cars_to_show - 1, vehicles.length - 1)

	vehicles = sort_list_by(vehicles, sort_by, sort_order)
	for(let i = startIdx; i <= endIdx; i++){
		let v = vehicles[i]
		let d = get_dealer_info(v.Dealer)
		str += ''

			// Vehicle image, social media buttons, Show More link
			+ '<tr>'
			+ '<td>'
			+ `<img class="thumb" src="` + v.Image	+ `" onClick="show_full_details('`+v.Vin+`')">`
			+ '<br/>'
			+ insertSocialMediaButtons({'url':'http://cars4sale.info', 'title':'Check out this car!', 'source':'Cars4Sale'})
			+ '<br/><br/>'
			+ `<div id="more_link_`+v.Vin+`" align=left class="link"><span class="list_more" onClick="show_list_car_details('`+v.Vin+`')">Show More &#8897</span></div>`
			+ '</td>'

			// Vehicle info
			+ '<td class="list">'
			+ '<span class="list_header">' + v.Year + ' ' + v.Make + ' ' + v.Model + '</span>'
			+ '<br/>'
			+ '<span class="list_mileage">' + v.Mileage + ' miles</span>'
			+ '<br/><br/>'
			+ '<span class="list_price">$' + v.Price + '</span>'
			+ '<span class="list_condition"> | ' + v.Condition + '</span>'
			+ '<br/><br/>'
			+ 'Exterior: ' 		+ v.Exterior		+ ' * '
			+ 'Interior: ' 		+ v.Interior		+ ' <br/> '
			+ 'Transmission: ' 	+ v.Transmission	+ ' * '
			+ 'Drivetrain: '  	+ v.Drivetrain		+ ''
			+ '</td>'

			// Dealer info
			+ '<td class="list">'
			+ '<span class="list_dealer_name">' + d.Name + '</span>'
			+ '<br/>'
			+ '<span class="list_dealer_address">' + d.Address.Street + ', ' + d.Address.City + ', ' + d.Address.State + ' ' + d.Address.Zipcode + '</span>'
			+ '<br/>'
			+ '<span class="list_dealer_phone">' + d.Phone
			+ '<br/>'
			+ get_dealer_stars(d.Rating) + ' (' + d.Reviews + ' reviews)'
			+ '<br/><br/>'
			+ '<a class="contact_dealer" href="mailto:'+d.Email+'?subject=Cars4Sale:%20' + v.Year + '%20' + v.Make + '%20' + v.Model + '">Contact Seller</a>'
			+ '</td></tr>'

			// More info
			+ '<tr><td colspan=3 bgcolor=#ffffff><div id="more_info_'+v.Vin+'"></div></td></tr>'

			// Gap
			+ '<tr><td  class="list_car_gap" height=10 colspan=3></td></tr>'
	}

	if(vehicles.length == 0){
		str += `<tr><td class="searchtable_cell_not_found">No vehicles found matching criteria!</td></tr>`
	}
	str += '</table>'

	str += show_per_page_limit_dropdown()
	if(vehicles.length > per_page_limit){
		str += show_pagination(page_number)
	}

	document.getElementById('search_result').innerHTML = str

	function get_dealer_info(id){
		for(let i=0; i<_dealers.length; i++){
			let d = _dealers[i]
			if(d.Id == id){
				return(d)
			}
		}
	}

	function get_dealer_stars(numstars){
		let str = ''
		for(let i=0; i<numstars; i++){
			str += '<img class="rating" src="./images/star.jpeg">'
		}
		return str
	}

	function insert_sort_by(sort_by,sort_order){
		let selected = {
			'Price,H'	: '',
			'Price,L'	: '',
			'Year,H'	: '',
			'Year,L'	: '',
			'Mileage,H'	: '',
			'Mileage,L'	: '',
			'Make,H'	: '',
			'Make,L'	: ''
		}
		let dropdown_str = {
			'Price,H'	: 'Price: Highest -> Lowest',
			'Price,L'	: 'Price: Lowest -> Highest',
			'Year,H'	: 'Year: Highest -> Lowest',
			'Year,L'	: 'Year: Lowest -> Highest',
			'Mileage,H'	: 'Mileage: Highest -> Lowest',
			'Mileage,L'	: 'Mileage: Lowest -> Highest',
			'Make,H'	: 'Make: Z -> A',
			'Make,L'	: 'Make: A -> Z'
		}
		selected[sort_by + ',' + sort_order] = 'selected'
		let str = `Sort by: <select onChange="change_list_order(this)">`
		for(let key in selected){
			str += `<option ` + selected[key] + ` value="` + key + `">` + dropdown_str[key] + `</option>`
		}
		str += `</select>`
		return str
	}

	function show_per_page_limit_dropdown(){
		let selected = {
			'5': 	'',
			'10':	'',
			'20':	'',
			'50':	''
		}
		selected[per_page_limit] = 'selected'
		let str = `<select onChange="set_per_page_limit(this)">`
		for(let key in selected){
			str += `<option ` + selected[key]  + ` value="`+key+`">`+key+` per page</option>`
		}
		str += `</select>`
		return str
	}

	function show_pagination(page_num){
		let num_pages = Math.ceil(vehicles.length/per_page_limit)
		let str = `
			<div class="pagination">
			<a href="#" onClick="set_page_number('1')">&laquo;</a>
		`
		let last_page
		for(let i=1; i<=num_pages; i++){
			if(i == page_num){
				str += `<a href="#" class="active">`+i+`</a>`
			}else{
				str += `<a href="#" onClick="set_page_number('`+i+`')">`+i+`</a>`
			}
			last_page = i
		}
		str +=  `
			<a href="#" onClick="set_page_number('`+last_page+`')">&raquo;</a>
			</div>
		`
		return str
	}

	function sort_list_by(objs,by,order){
		switch(by){
			case "Mileage":
			case "Price":
			case "Year":
				switch(order){
					case "H":
						return objs.sort(function(a,b) {return (parseInt(a[by]) < parseInt(b[by])) ? 1 : ((parseInt(b[by]) < parseInt(a[by])) ? -1 : 0);} );
					case "L":
						return objs.sort(function(a,b) {return (parseInt(a[by]) > parseInt(b[by])) ? 1 : ((parseInt(b[by]) > parseInt(a[by])) ? -1 : 0);} );
				}
			case "Make":
			case "Condition":
				switch(order){
					case "H":
						return objs.sort(function(a,b) {return (a[by] < b[by]) ? 1 : ((b[by] < a[by]) ? -1 : 0);} );
					case "L":
						return objs.sort(function(a,b) {return (a[by] > b[by]) ? 1 : ((b[by] > a[by]) ? -1 : 0);} );
				}
		}
	}
}

function filter_data(arg){
	if(arg != null){
		let [opt, val] = arg.split(',')
		if(val == '*'){
			document.getElementById("filter_"+opt+"_all").checked = true
			for(let i=0; i<filters[opt].length; i++){
				document.getElementById("filter_"+opt+"_"+filters[opt][i]).checked = false
			}
		}else{
			document.getElementById("filter_"+opt+"_all").checked = false
		}
	}

	vehicles = []

	let makes 	  = get_filtered_options("Make")
	let exteriors = get_filtered_options("Exterior")
	let interiors = get_filtered_options("Interior")

	// Get min and max price
	let min_price = parseInt(document.getElementById("MinPrice").value.replace(/,/, ''))
	let max_price = parseInt(document.getElementById("MaxPrice").value.replace(/,/, ''))
	if (max_price == 0){
		max_price = Number.MAX_VALUE;
	}
	if(min_price > max_price){
		alert("Minimum price should be less than maximum price!")
		return
	}

	// Mileage
	let mileage = parseInt(document.getElementById("Mileage").value.replace(/,/, ''))
	if (mileage == 0){
		mileage = Number.MAX_VALUE;
	}

	// Do filtering based on criteria - only add vehicles "vehicles" that fit the criteria
	for(let i=0; i<_vehicles.length; i++){
		let v = _vehicles[i]
		if(makes.indexOf(v.Make) != -1 ){
			if(v.Price >= min_price && v.Price <= max_price){
				if(v.Mileage <= mileage){
					if(exteriors.indexOf(v.Exterior) != -1){
						if(interiors.indexOf(v.Interior) != -1){
							vehicles.push(v)
						}
					}
				}
			}
		}
	}
	show_car_list()

	// Get which filter options are selected
	function get_filtered_options(opt){
		let options = []
		if(document.getElementById("filter_"+opt+"_all").checked){
			for(let i=0; i<filters[opt].length; i++){
				options.push(filters[opt][i])
			}
		}else{
			for(let i=0; i<filters[opt].length; i++){
				if(document.getElementById("filter_"+opt+"_"+filters[opt][i]).checked){
					options.push(filters[opt][i])
				}
			}
		}
		return options
	}
}

function set_per_page_limit(obj){
	per_page_limit = parseInt(obj.value)
	page_number = 1
	show_car_list()
}

function set_page_number(p){
	page_number = parseInt(p)
	show_car_list()
}

function change_list_order(obj){
	sort_by = obj.value.split(',')[0]
	sort_order = obj.value.split(',')[1]
	show_car_list()
}

function show_list_car_details(vin){
	document.getElementById("more_link_" + vin).innerHTML = `<span class="list_more" onClick="hide_list_car_details('`+vin+`')">Show Less &#8896</span>`
	let v = get_vehicle_by_vin(vin)
	let str = ''
		+ 'VIN: ' + vin
		+ '<br/>'
		+ v.Convenience.join(', ') 		+ ', '
		+ v.Entertainment.join(', ') 	+ ', '
		+ v.Safety.join(', ') 			+ ', '
		+ v.Seating.join(', ') 			+ ', '
		+ v.Features.join(', ')
	document.getElementById("more_info_" + vin).innerHTML = str
	document.getElementById("more_info_" + vin).style.visibility = "visible"
}

function hide_list_car_details(vin){
	document.getElementById("more_link_" + vin).innerHTML = `<span class="list_more" onClick="show_list_car_details('`+vin+`')">Show More &#8897</span>`
	document.getElementById("more_info_" + vin).innerHTML = ''
	document.getElementById("more_info_" + vin).style.visibility = "hidden"
}

function get_vehicle_by_vin(vin){
	for(let i=0; i<vehicles.length; i++){
		let v = vehicles[i]
		if(v.Vin == vin){
			return v
		}
	}
}

function show_full_details(vin){
	let v = get_vehicle_by_vin(vin)
	let str = ''
		+ `<h1>` + v.Year + ' ' + v.Make + ' ' + v.Model + `</h1>`
		+ `<img class="modal_image" src="`+v.Image+`">`
		+ '<br/>'
		+ `<div class="modal_car_details">`
		+ `<table border=0 cellpadding=2 cellspacing=1>`
		+ '<tr><td align=right>Condition: 		</td><td align=left>' 	+ v.Condition 				+ '</td></tr>'
		+ '<tr><td align=right>Mileage: 		</td><td align=left>' 	+ v.Mileage 				+ ' miles</td></tr>'
		+ '<tr><td align=right>Price: 			</td><td align=left>$' 	+ v.Price 					+ '</td></tr>'
		+ '<tr><td align=right>Exterior: 		</td><td align=left>' 	+ v.Exterior				+ '</td></tr>'
		+ '<tr><td align=right>Interior: 		</td><td align=left>' 	+ v.Interior				+ '</td></tr>'
		+ '<tr><td align=right>Transmission:	</td><td align=left>' 	+ v.Transmission			+ '</td></tr>'
		+ '<tr><td align=right>Drivetrain: 		</td><td align=left>'  	+ v.Drivetrain				+ '</td></tr>'
		+ '<tr><td align=right>VIN: 			</td><td align=left>' 	+ vin						+ '</td></tr>'
		+ '<tr><td align=right>Convenience: 	</td><td align=left>'  	+ v.Convenience.join(', ')	+ '</td></tr>'
		+ '<tr><td align=right>Entertainment:	</td><td align=left>'  	+ v.Entertainment.join(', ')+ '</td></tr>'
		+ '<tr><td align=right>Safety: 			</td><td align=left>'  	+ v.Safety.join(', ')		+ '</td></tr>'
		+ '<tr><td align=right>Seating: 		</td><td align=left>'  	+ v.Seating.join(', ')		+ '</td></tr>'
		+ '<tr><td align=right>Features: 		</td><td align=left>'  	+ v.Features.join(', ')		+ '</td></tr>'
		+ `</table>`
		+ `</div>`
	document.getElementById("car_details_div").innerHTML = str
	document.getElementById("car_details_div_overlay").style.display = "block"
}
