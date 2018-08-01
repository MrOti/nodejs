let list = [];

//A reget követően itt adódnak hozzá az extra property-k mint pl.: tárgy
const createEObject = function(data){
	let elem = {
		who: data.who,
		email: data.email,
		pw: data.pw,
		obj: [],
		inDB: true,
		loggedin: false
	}
	return elem;
}


//Hozzáadás a listához
const add = function(data){
	if(notInDB(data)){	
		list.push(createEObject(data));
		return true;
	}else{
		return false;
	}	
}

// Annak ellenőrzése, hogy a felhasználó regisztrálva van-e már.
const checkLoginDB = function(data){
	if(list.length != 0){ // üres listát nem ellenőrzünk.
		for(let i = 0; i < list.length; i++){
			if(list[i].email === data.email && list[i].password === data.password){
				list[i].loggedin = true;
				return true;
				break;
			}
		}
	}
	return false;
}

// Annak ellenőrzése, hogy a felhasználó regisztrálva van-e már. 
const notInDB = function(data){
	if(list.legth != 0){ // üres listát nem ellenőrzünk.
		for(let a = 0; a < list.length; a++){
			if(list[a].who === data.who || list[a].email === data.email){
				return false;
				break;
			}
		}
	}
	return true;	
}

const show = function(){
	list.forEach(function(elem){
		console.log(elem);
	});
	console.log('--------------');
}

module.exports.add = add;
module.exports.show = show;
module.exports.checkLoginDB = checkLoginDB;