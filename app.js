let sentenceBtn= document.querySelector('#sentence_btn');
let lowerBtn=document.querySelector('#lower_btn');
let upperBtn=document.querySelector('#upper_btn');
let capcaseBtn=document.querySelector('#capcase_btn');
let alternatingBtn=document.querySelector('#alternating_btn');
let titlecaseBtn=document.querySelector('#titlecase_btn');
let inverseBtn=document.querySelector('#inverse_btn');
let downloadBtn=document.querySelector('#download_btn');
let copyBtn= document.querySelector('#copy_btn');
let clearBtn=document.querySelector('#clear_btn');

let form=document.querySelector('#text_box');



sentenceBtn.addEventListener('click',()=>{
form.placeholder='Type or paste your content here';
form.value= sentenceCase(form.value);

})



lowerBtn.addEventListener('click',()=>{
form.placeholder='type or paste your content here';

form.value=form.value.toLowerCase();
})



upperBtn.addEventListener('click',()=>{
form.placeholder='TYPE OR PASTE YOUR CONTENT HERE';

form.value=form.value.toUpperCase();
})



capcaseBtn.addEventListener('click',()=>{
	form.placeholder='Type Or Paste Your Content Here';
    form.value=capCase(form.value);

})



alternatingBtn.addEventListener('click',()=>{
	form.placeholder='tYpE Or pAsTe yOuR CoNtEnT HeRe';
	
})



titlecaseBtn.addEventListener('click',()=>{
	form.placeholder='Type or Paste Your Content Here';
})



inverseBtn.addEventListener('click',()=>{
	form.placeholder='tYPE OR pASTE yOUR cONTENT hERE';
	form.value=inverseCase(form.value);
})




clearBtn.addEventListener('click',()=>{
	form.placeholder='Type or paste your content here';

	form.value='';
})




// FUNCTIONS:
const sentenceCase =function(str){

 const arr=str.split('.');

const arrSentence= arr.map(sentence=>{
	let sentenceLowered= sentence.trim().toLowerCase();
	return sentenceLowered[0].toUpperCase()+sentenceLowered.substring(1);
})
   
return arrSentence.join('.');

}
//





const capCase=function(str){
	const arr=str.split('.');

const arrCapCase= arr.map(sentence=>{

	let sentenceLowered= sentence.trim().toLowerCase();
	//eg: 'the blind dog';
    const arrSentence=sentenceLowered.split(' ');
     //['the,'blind','dog']
     
     const newArr=[];
     for(let i=0;i<arrSentence.length;i++){
     	newArr.push(arrSentence[i][0].toUpperCase()+arrSentence[i].substring(1));
     }
     return newArr.join(' ');

})
return arrCapCase.join('.');
}





//
const inverseCase = function(str){

	const arr=str.split('.');

const inverse= arr.map(sentence=>{

sentenceLowered=sentence.trim();


const newArr=[];
for(let i=0;i<sentenceLowered.length;i++){
	if(sentenceLowered[i]===sentenceLowered[i].toUpperCase()){
		newArr.push(sentenceLowered[i].toLowerCase());
	}
	else if(sentenceLowered[i]===sentenceLowered[i].toLowerCase()){
		newArr.push(sentenceLowered[i].toUpperCase());
	}
}

return newArr.join('');

})

return inverse.join('.')


}

//



const alternateCase=function(str){

}




let char_count=document.querySelector('#char_count span');

form.addEventListener('input',()=>{
	char_count.innerHTML=form.value.length;
})



let word_count=document.querySelector('#word_count span');

form.addEventListener('input',()=>{
if (form.value.length===0){
 word_count.innerHTML=0;
 }
 else{
	word_count.innerHTML=wordCount(form.value);
}
})

const wordCount= function(str){
	const arr=str.split(' ');
	const newArr=[];

	for(word of arr){
		if(word!==''){
			newArr.push(word);
		}
	}
	return newArr.length;
}
