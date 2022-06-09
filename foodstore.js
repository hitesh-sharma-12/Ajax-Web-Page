/*this is the file which takes input from user(via html) process it and request it to server(i.e our php file) and then give back the output to user and that's why it is heart of ajax
/so, this is the main reason behind why we gets the updated page even without reloading the page. procedure - first we create a object by which we can request to server
so that we can get the output on the basis of input data. second after getting the output we directly modify the html page by using javascript(that's the reason behind 
updating the page without reloading the page) eg: if we create a div(a specific area warped by div tags to which we can gives spefific property etc) and we set the 
value of text as a variable(initially null) then we can modify the text inside div by modifying the variable of div using javascript therefore we are modifying the 
page in async way without reloading it we just modifying out html page. Now let see the program. so, by my opinion we say reloading of page is done when we have to move from one page to another page
and async update is done when we have to update the same page.
there are two type of XMLHttpRequest object 1. ActiveXObject = these objects are used by only microsoft internet explorer to communicate with server
2. XMLHttp request = these object all other browser to communicate with server (idk why ms makes its different object but in present newer ver. of IE also support this object
**********************************************************************************************************************************************************************************/


var XMLHttp = createXMLHttpRequestObject();//this function ll return xmlhttp request object on the basis of which brower we used i.e Internet explorer or any other browser.
//this object is then used to sending request and getting output form the server

function createXMLHttpRequestObject(){
	//checking what browser user use while requesting
	
	var XMLHttp;
	if(window.ActiveXObject){//this(i.e function of window object) ll check wheter user use Internet explorer or any other browser and all these build-in function are case sensitive
	//the ActiveObject() return a server requesting object then which ll stored in XMLHttp variable
		try{
			XMLHttp = new ActiveXObject("Microsoft.XMLHTTP"); 
		}catch(e){
			XMLHttp = false;
		}	
	}
	
	else{
		//try/catch = initially try statements are executed but if there is error in any statement of try then catch statements executed
		try{
			XMLHttp = new XMLHttpRequest();
		}catch(e){
			XMLHttp = false;
		}
	}
	
	
	if(!XMLHttp){
		alert("Cannot create the object hoss");
	}else{
		return XMLHttp;
	}
}

function process(){
//.readystate tell us about the status of xmlhttp object. it return 5 values: 0, 1, 2, 3, 4
//0 means request is not initialize, 1 means connection between server and object is established, 2 means request is recieved by object, 3 means request is in process 
//4 means requet finished and responce is ready 

	if(XMLHttp.readyState == 0 || XMLHttp.readyState == 4){ //we take readystate == 4 condition coz after getting output state is 4 and to execute process function again 
	//we need this condition(readystate = 4) and when again open function execute then readystate again become 0 and the same process repeat
		food = encodeURIComponent(document.getElementById('userInput').value); //'encodeuricomponent' ll encode the special character(?, = etc) of statement specified in its parameter
		//if we define a variable with keyword 'var' then it is a local variable else it is a global variable(like here food isa global variable)
		
		XMLHttp.open('GET', "foodstore.php?food="+food, true); //this function is used to create request from the userinput to the server to get 
		//the output from the server based on user input. parameter: 1 = method to send data to server(GET/POST)	2 = url	3 = if asynchronous then true else false
		
		XMLHttp.onreadystatechange = handleServerResponse; //this is a eventhandler and it comes to play when there is change is request state(where request states are 0,1,2,3,4)
//new if we make eventhandler equal to a function reference or callout function (functn ref. is variable name of function which refer to the source code of that function.
//then when the event occur(state value change) then this function starts executing that's why we equating the functn ref. to event i.e event occur true then function start exe
/* handleServerResponse() = means passing return value after function call
handleServerResponse = means we're passing function itself not its return value */

	XMLHttp.send(null);//this function ll send the request to the server. if we use post method then value of parameter should be 'POST' else null
	}else{
			setTimeout('process', 1000);
	}
	
	function handleServerResponse(){
		if(XMLHttp.readyState == 4){
			if(XMLHttp.status == 200){
				xmlResponse = XMLHttp.responseXML; //this ll return the output coming from server in the form of xml format
				xmlDocumentElement = xmlResponse.documentElement;//it ll return the root node of the xml returning from the server(coz server response the data of request in the form of xml or jason
//.documentElement is act as a object so we can fetch all the other tags warped inside root node by using .documentElement as an object(i.e .documentElement.name etc)
//but here we know there is no tag inside it so we ll fetch the first xml statement present in root tag 
				message = xmlDocumentElement.firstChild.data; //by firstchild we can fetch first xml statement of this tage and .data means the data of xml that we fetch
				document.getElementById('underInput').innerHTML = '<span style = "color: blue">'+message+'</span>'; //.innerhtml means the html statement inside the tag of the refering id(i.e here 'userInpput')
				setTimeout('process()', 1000);//this functio ll call the function(specified in parameter 1) after some time in millisecond(specified in parameter 2)
		}else{
			alert('Something went wrong!');
		}
		}
	}
	
/*parenthesis '()' means that we're invoking/executing the function. so, fun1() = we're executing the function and getting the return value or fun1() = return value(its a value)
without parenthesis means we're refering to function. so fun1 = it refers to all the instruction/procedure
so if we makes variable of a function as a parameter in other function or give the reference of a function to a variable of another function then that function
can be used khe bhe, kbhi bhe or kaise bhe in this function now lets takes an example in above code if we make XMLHttp.onreadystatechange = fun(x, y) then it ll not work
coz to execute a function we need constant value and let say we make it equal to fun(1,2) then if it is a integer type then it gives some integer value and there
is no sense to make event handler to any integer value(all the fun code execute i.e (if present) additiion print value etc but the value stored event handler is 9
that means when event occur then 9(which doesn't makes sense) but if it get equate by 'fun' then it doesn't store any value rather it refers to a function which can exe any time handler needs
2. in above code we use 'setTimeout' function (means our function ll run repeately after 1 sec) so, let .onreadystatechange = fun() then execution of fun() code 
ll be done on the basis of timeout function(coz every time the execution occur and then return value is given of statechange variable) that means fun() function cannot 
controlled by eventhandler it execute if event occur or even not occur and the other hane if it change to fun then as we know reference is given to a eventhandler object
so fun only executed when event occur not it on more executed everytime when timeout function execute the function in which it is refer to(coz now event object got 
refering to fun() and i think there is a event handler function in which this ibject gets '()'(for execution of refering function) on a specific condition
	
	
	
	
	
	
	  

	
	