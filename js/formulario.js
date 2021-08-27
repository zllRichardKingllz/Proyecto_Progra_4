// let confirmar=document.getElementById("confi");

// // var firebaseConfig = {
// // 	apiKey: "AIzaSyCuUa4X0nHF03xE0RS5gIcSes4EfGB4Htc",
// // 	authDomain: "form-test-c6780.firebaseapp.com",
// // 	databaseURL: "https://form-test-c6780.firebaseio.com",
// // 	projectId: "form-test-c6780",
// // 	storageBucket: "form-test-c6780.appspot.com",
// // 	messagingSendeId: "900825576170",
// // 	appId: "1:900825576170:web:cb6f1bb9f31e351c2f1d93",
// // };

// // firebase.initializeApp(firebaseConfig);

// // let contactInfo = firebase.database().ref("infos");

// // document.querySelector(".contact-form").addEventListener("submit",sumbitForm);

// // function submitForm(e){
// // 	e.preventDefault();

// // 	let nombre = document.querySelector("nom").value
// // 	let apellido = document.querySelector("ape").value
// // 	let edad = document.querySelector("edad").value
// // 	let altura = document.querySelector("alt").value
// // 	let peso = document.querySelector("pes").value

// // 	saveContactInfo(nombre, apellido, edad, altura, peso);
// // 	document.querySelector(".contact-form").reset();

// // 	sendEmail(nombre, apellido, edad, altura, peso);
// // }

// // function saveContactInfo(nombre, apellido, edad, altura, peso){
// // 	let newContactInfo = contactInfo.push();

// // 	newContactInfo.set({
// // 		nombre: nombre,
// // 		apellido: apellido,
// // 		edad: edad,
// // 		altura: altura,
// // 		peso: peso
// // 	});

// // 	retrieveInfos();
// // }

// // function retrieveInfos(){
// // 	let ref = firebase.database().ref("infos");
// // 	ref.on("values", gotData);
// // }

// // function gotData(data){
// // 	let info = data.val();
// // 	let keys = Object.keys(info);

// // 	for(let i = 0; i < keys.length; i++){
// // 		let infoData = keys[i];
// // 		let nombre = info[infoData].nombre;
// // 		let apellido = info[infoData].apellido;
// // 		let edad = info[infoData].edad;
// // 		let altura = info[infoData].altura;
// // 		let peso = info[infoData].peso;
// // 		console.log(nombre, apellido, edad, altura, peso);

// // 		let infosResults = document.querySelector(".infoResults");

// // 		//infosResults.innerHTML += "<div><p></div>"
// // 	}
// // }
// // retrieveInfos();

// function sendEmail(){
// 	// Email.send({
// 	// 	Host: "smtp.gmail.com",
// 	// 	Username: "richard11121998@gmail.com",
// 	// 	Password: "cws1nias",
// 	// 	To: "richard11121998@gmail.com",
// 	// 	From: "richard11121998@gmail.com",
// 	// 	Subject: `${name} sent you a message`,
// 	// 	Body: `Name: ${name} <br/> Email: ${email} <br/>`,

// 	// })
// 	// .then(function(message){
// 	// 	alert("mail sent successfully")
// 	// });

// 	Email.send({
// 		Host : "smtp.gmail.com",
// 		Username : "richard11121998@gmail.com",
// 		Password : "cws1nias",
// 		To : 'richard11121998@gmail.com',
// 		From : "richard11121998@gmail.com",
// 		Subject : "This is the subject",
// 		Body : "And this is the body"
// 	}).then(function(message){
// 		alert("mail sent successfully")
// 	});
// }
// confirmar.addEventListener('click', sendEmail);
