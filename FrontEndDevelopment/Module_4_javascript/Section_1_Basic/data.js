var _vehicles = [
	{Seating:["Heated Seats"],Mileage:"76265",Drivetrain:"FWD",Entertainment:["Premium Sound System"],Transmission:"Manual",Image:"./pics/MINI Paceman.jpeg",Make:"MINI",Vin:"YB6LFALQ26T741VDD8D6",Convenience:["Navigation System"],Dealer:"1",Interior:"Grey",Exterior:"Black",Safety:["Backup Camera", "Brake Assist"],Year:"2010",Model:"Paceman",Features:["Alloy Wheels"],Price:"26696",Condition:"Certified pre-owned"},
	{Seating:["Memory Seat"],Mileage:"40",Drivetrain:"FWD",Entertainment:["Premium Sound System"],Transmission:"Manual",Image:"./pics/Hummer H2.jpeg",Make:"Hummer",Vin:"8V9LCOY08E701U7NZMD6",Convenience:["Adaptive Cruise Control", "Navigation System"],Dealer:"1",Interior:"Black",Exterior:"Yellow",Safety:["Backup Camera", "Stability Control"],Year:"2017",Model:"H2",Features:["Sunroof/Moonroof"],Price:"69309",Condition:"New"},
	{Seating:["Leather Seats"],Mileage:"59560",Drivetrain:"RWD",Entertainment:["Bluetooth"],Transmission:"Automatic",Image:"./pics/Maserati Ghibli.jpeg",Make:"Maserati",Vin:"I7ILUX7RK6UHIU0CSI75",Convenience:["HomeLink", "Adaptive Cruise Control", "Navigation System"],Dealer:"2",Interior:"White",Exterior:"Charcoal",Safety:["Stability Control"],Year:"2006",Model:"Ghibli",Features:["Sunroof/Moonroof"],Price:"40779",Condition:"Used"},
	{Seating:["Memory Seat"],Mileage:"27",Drivetrain:"AWD",Entertainment:["Premium Sound System"],Transmission:"Manual",Image:"./pics/Mercedes-Benz S-Class.jpeg",Make:"Mercedes-Benz",Vin:"S2UMFNG44FZYM9SH5D7W",Convenience:["HomeLink"],Dealer:"2",Interior:"Beige",Exterior:"Cherry",Safety:["Stability Control"],Year:"2018",Model:"S-Class",Features:["Sunroof/Moonroof"],Price:"86509",Condition:"New"},
	{Seating:["Heated Seats"],Mileage:"75202",Drivetrain:"FWD",Entertainment:["Bluetooth"],Transmission:"Manual",Image:"./pics/Chrysler Prowler.jpeg",Make:"Chrysler",Vin:"UEJ9CB0ZWB6D55MPTI0H",Convenience:["Navigation System"],Dealer:"1",Interior:"Grey",Exterior:"Red",Safety:["Backup Camera"],Year:"1995",Model:"Prowler",Features:["Sunroof/Moonroof"],Price:"26559",Condition:"Certified pre-owned"},
	{Seating:["Memory Seat", "Leather Seats"],Mileage:"145321",Drivetrain:"FWD",Entertainment:["Bluetooth"],Transmission:"Manual",Image:"./pics/Dodge Neon.jpeg",Make:"Dodge",Vin:"9XCZLY8GF0OCEWPVQ3Q9",Convenience:["Navigation System", "Adaptive Cruise Control"],Dealer:"1",Interior:"Charcoal",Exterior:"Red",Safety:["Stability Control", "Backup Camera"],Year:"1999",Model:"Neon",Features:["Sunroof/Moonroof"],Price:"1353",Condition:"Used"},
	{Seating:["Memory Seat"],Mileage:"90588",Drivetrain:"RWD",Entertainment:["Premium Sound System"],Transmission:"Automatic",Image:"./pics/Volvo 850.jpeg",Make:"Volvo",Vin:"USCX5KWTXTSSOQF4LW1V",Convenience:["HomeLink"],Dealer:"2",Interior:"Charcoal",Exterior:"Red",Safety:["Backup Camera"],Year:"2007",Model:"850",Features:["Sunroof/Moonroof"],Price:"2310",Condition:"Used"},
	{Seating:["Heated Seats"],Mileage:"72919",Drivetrain:"RWD",Entertainment:["Premium Sound System"],Transmission:"Manual",Image:"./pics/Infiniti G25.jpeg",Make:"Infiniti",Vin:"BZWSQ8I2KG187AGSTQFH",Convenience:["Navigation System", "Remote Start", "HomeLink"],Dealer:"2",Interior:"White",Exterior:"Grey",Safety:["Stability Control"],Year:"1997",Model:"G25",Features:["Alloy Wheels"],Price:"32690",Condition:"Used"},
	{Seating:["Leather Seats"],Mileage:"1493",Drivetrain:"RWD",Entertainment:["Premium Sound System"],Transmission:"Automatic",Image:"./pics/Dodge Durango.jpeg",Make:"Dodge",Vin:"EG3XUIJLFVNCYMFGO6BU",Convenience:["Remote Start", "Navigation System", "HomeLink"],Dealer:"1",Interior:"White",Exterior:"Black",Safety:["Backup Camera"],Year:"2017",Model:"Durango",Features:["Sunroof/Moonroof"],Price:"41139",Condition:"Used"},
	{Seating:["Memory Seat", "Leather Seats"],Mileage:"32767",Drivetrain:"AWD",Entertainment:["Bluetooth"],Transmission:"Manual",Image:"./pics/Subaru Legacy.jpeg",Make:"Subaru",Vin:"KA8YMMA4H2TDRHFOT6P9",Convenience:["Remote Start"],Dealer:"3",Interior:"White",Exterior:"Black",Safety:["Backup Camera", "Brake Assist"],Year:"1997",Model:"Legacy",Features:["Alloy Wheels"],Price:"8335",Condition:"Used"},
	{Seating:["Leather Seats","Heated Seats"],Mileage:"124653",Drivetrain:"RWD",Entertainment:["Premium Sound System"],Transmission:"Automatic",Image:"./pics/Maserati Quattroporte.jpeg",Make:"Maserati",Vin:"J07L7PJMWVBK6Q38IOW6",Convenience:["Remote Start"],Dealer:"3",Interior:"Beige",Exterior:"Bright White",Safety:["Brake Assist"],Year:"2015",Model:"Quattroporte",Features:["Alloy Wheels"],Price:"19602",Condition:"Certified pre-owned"},
	{Seating:["Heated Seats","Leather Seats"],Mileage:"12",Drivetrain:"RWD",Entertainment:["Bluetooth"],Transmission:"Manual",Image:"./pics/Maserati Gransport.jpeg",Make:"Maserati",Vin:"Z2632C9LUI2QZU24GX9U",Convenience:["HomeLink"],Dealer:"3",Interior:"Charcoal",Exterior:"Pearl White",Safety:["Brake Assist","Stability Control"],Year:"2017",Model:"Gransport",Features:["Alloy Wheels"],Price:"72045",Condition:"New"},
	{Seating:["Memory Seat"],Mileage:"11",Drivetrain:"RWD",Entertainment:["Premium Sound System"],Transmission:"Automatic",Image:"./pics/Lamborghini Gallardo.jpeg",Make:"Lamborghini",Vin:"1LHP1KOEBSZYO4LDCCZN",Convenience:["Adaptive Cruise Control","Navigation System"],Dealer:"1",Interior:"Black",Exterior:"Tangerine",Safety:["Stability Control","Backup Camera"],Year:"2018",Model:"Gallardo",Features:["Sunroof/Moonroof"],Price:"149537",Condition:"New"},
	{Seating:["Heated Seats"],Mileage:"81323",Drivetrain:"AWD",Entertainment:["Premium Sound System"],Transmission:"Manual",Image:"./pics/Lotus Elan.jpeg",Make:"Lotus",Vin:"QHDPICPFCI0SWNQWPPT8",Convenience:["Adaptive Cruise Control"],Dealer:"1",Interior:"Beige",Exterior:"Red",Safety:["Stability Control","Backup Camera"],Year:"2001",Model:"Elan",Features:["Sunroof/Moonroof"],Price:"29891",Condition:"Used"},
	{Seating:["Heated Seats"],Mileage:"10",Drivetrain:"AWD",Entertainment:["Bluetooth"],Transmission:"Manual",Image:"./pics/Land Rover LR2.jpeg",Make:"Land Rover",Vin:"L6N05WITPXX7T834RI6Q",Convenience:["HomeLink","Adaptive Cruise Control"],Dealer:"3",Interior:"White",Exterior:"Metallic Silver",Safety:["Backup Camera"],Year:"2018",Model:"LR2",Features:["Alloy Wheels"],Price:"61918",Condition:"New"},
	{Seating:["Heated Seats","Memory Seat"],Mileage:"42546",Drivetrain:"FWD",Entertainment:["Premium Sound System"],Transmission:"Manual",Image:"./pics/Hummer H3.jpeg",Make:"Hummer",Vin:"I6N1HH7MSZXWY94KESWI",Convenience:["Remote Start","HomeLink","Navigation System"],Dealer:"2",Interior:"Charcoal",Exterior:"Pepper Red",Safety:["Backup Camera"],Year:"2016",Model:"H3",Features:["Sunroof/Moonroof"],Price:"28703",Condition:"Used"},
	{Seating:["Heated Seats"],Mileage:"11282",Drivetrain:"AWD",Entertainment:["Premium Sound System"],Transmission:"Manual",Image:"./pics/BMW 2-Series.jpeg",Make:"BMW",Vin:"YUSMUBIE6PWK45XGV6EW",Convenience:["Remote Start","Adaptive Cruise Control","HomeLink"],Dealer:"1",Interior:"Charcoal",Exterior:"Sport Orange",Safety:["Brake Assist"],Year:"2012",Model:"2-Series",Features:["Sunroof/Moonroof"],Price:"30146",Condition:"Used"},
	{Seating:["Heated Seats"],Mileage:"23",Drivetrain:"AWD",Entertainment:["Premium Sound System"],Transmission:"Manual",Image:"./pics/Volkswagen Touareg.jpeg",Make:"Volkswagen",Vin:"BCL7GKHT3YLA3DPZVID0",Convenience:["Remote Start"],Dealer:"1",Interior:"Black",Exterior:"Silver",Safety:["Backup Camera","Brake Assist"],Year:"2018",Model:"Touareg",Features:["Alloy Wheels"],Price:"20558",Condition:"New"},
	{Seating:["Leather Seats","Memory Seat"],Mileage:"14058",Drivetrain:"AWD",Entertainment:["Bluetooth"],Transmission:"Automatic",Image:"./pics/Cadillac CTS-V.jpeg",Make:"Cadillac",Vin:"3Y984XD5XM587DA7HVPB",Convenience:["HomeLink"],Dealer:"3",Interior:"Beige",Exterior:"Charcoal Grey",Safety:["Brake Assist","Backup Camera"],Year:"2016",Model:"CTS-V",Features:["Alloy Wheels"],Price:"45958",Condition:"Certified pre-owned"}
]

var _dealers = [
	{
		Id:		"1",
		Name:	"Awesome Cars of MetroWest",
		Address: {
			Street:  "928 Worcester Road",
			City: 	 "Newton",
			State: 	 "MA",
			Zipcode: "02128"
		},
		Email: 	"dealer@example.com",
		Phone:	"(617) 844-0284",
		Rating:	"4",
		Reviews: "120"
	},
	{
		Id:		"2",
		Name:	"Nice Cheap Cars of Framingham",
		Address: {
			Street:  "74 Route-9",
			City: 	 "Framingham",
			State: 	 "MA",
			Zipcode: "01761"
		},
		Email: 	"dealer@example.com",
		Phone:	"(508) 324-9827",
		Rating:	"5",
		Reviews: "114"
	},
	{
		Id:		"3",
		Name:	"Select Cars Boston",
		Address: {
			Street:  "92 Huntington Avenue",
			City: 	 "Boston",
			State: 	  "MA",
			Zipcode: "03742"
		},
		Email: 	"dealer@example.com",
		Phone:	"(617) 384-9235",
		Rating:	"3",
		Reviews: "89"
	}
]
