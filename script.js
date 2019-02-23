
var app={
	//user input

	userInput:{
			addType:document.getElementById('add__type'),
			description:document.getElementById('add__description'),
			value:document.getElementById('add__value')

	},

	elements:{

		incomeList:document.getElementById('income__list'),
		outcomeList:document.getElementById('expenses__list'),
		incomeTally:document.getElementById('budget__income--value'),
		outcomeTally:document.getElementById('budget__expenses--value'),
		calculateAmount:document.getElementById('budget__value')

	},
//income
incValue:{

totalIncomeValue:[],
totalOutcomeValue:[]



},

eventListeners:function(){

var btn = document.getElementById('add__btn');

btn.addEventListener('click',()=>{




var inputs=[this.userInput.description.value +" " +"£"+this.userInput.value.value];

var ul=document.getElementById('ul');


function inc(text)
{
var li=document.createElement('li');
li.textContent=text;
li.className='green line';
ul.appendChild(li);
return li;


}

if(this.userInput.addType.value=='inc'){
	inc(inputs);
var inc=this.elements.incomeList;

this.incValue.totalIncomeValue.push(this.userInput.value.value);
var totalinCal=this.incValue.totalIncomeValue;
var mapArray =this.incValue.totalIncomeValue.map(Number);
var totalIncomeAmount=mapArray.reduce((total,amount)=> total +amount);
this.elements.incomeTally.innerHTML="£"+totalIncomeAmount;
this.elements.calculateAmount.value=totalIncomeAmount;








}





else
{
var exp = this.elements.outcomeList;
var ule=document.getElementById('exp');
exp2(inputs);
function exp2(text)
{
var li=document.createElement('li');
li.textContent=text;
li.className='exp line';
ule.appendChild(li);
return li;


}



this.incValue.totalOutcomeValue.push(this.userInput.value.value);
var totalCal=this.incValue.totalOutcomeValue;
var mapOutcome=this.incValue.totalOutcomeValue.map(Number);
var totalOutcomeAmount=mapOutcome.reduce((total,amount)=> total +amount);
this.elements.outcomeTally.innerHTML="-£"+totalOutcomeAmount;

this.elements.calculateAmount.value-=this.userInput.value.value;



}



});


},

getMonth:function(){

var d=new Date();
var n=d.getMonth();
var month=document.querySelector('.budget__title--month');
var monthOfYear=['January','February','March','April' ,'May,June' ,'July' ,'August' ,'September' ,'October' ,'November' ,'December'];
	month.innerHTML=monthOfYear[n];
},




init:function() {

this.eventListeners();
this.getMonth();



}




};

app.init();


