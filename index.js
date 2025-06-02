const NUMBERS_CONTAINER = document.querySelector('.numbers');
const INPUT_CONTAINER = document.querySelector('.input-container');
const input_array = [];
let last_iterration;

const onNumberClick = (e) => {
    const {target} = e;
    if (target.innerHTML !== `&lt;` && INPUT_CONTAINER.innerHTML.length == 40)  {
        alert("Слишком много символов!")
        return
    }
    if (target.classList.contains('number-el')) {
        if (last_iterration == `=`) {
            INPUT_CONTAINER.innerHTML = "";
        }
        
        if(target.innerHTML !== `&lt;` && target.innerHTML !== `=`) {
            INPUT_CONTAINER.innerHTML += ' ' + target.innerHTML;
            console.log(target.innerHTML)
        }
        else if (target.innerHTML == `&lt;`) {
            INPUT_CONTAINER.innerHTML = INPUT_CONTAINER.innerHTML.slice(0, -2);
        }
        else if (target.innerHTML == `=`) {
            let res = eval(String(INPUT_CONTAINER.innerHTML.replace(/\s/g,"")))
            INPUT_CONTAINER.innerHTML = String(res).split("").join(" ");
        }
        }
    last_iterration = target.innerHTML
    }  
    
    
    


    NUMBERS_CONTAINER.addEventListener('click', onNumberClick)
// const onNumberClick = (e) => {
//     const { target } = e;
//     if (target.classList.contains('number-el')) {
//         if(target.innerHTML !== `&lt;` && target.innerHTML !== `=` && !isNaN(+target.innerHTML)) {
//             input_array.push(+target.innerHTML)
//         }
//         else if(target.innerHTML == `&lt;`) {
//             input_array.pop()
//         }
//         else if(target.innerHTML == `=`) {
//             let math_result = [];
//             let group = '';

//             input_array.forEach((item) => {
//                 if(typeof item === 'number') {
//                     group = `${group}${item}`
//                 }else {
//                     math_result.push(group)
//                     group = `${item}`
//                     math_result.push(group)
//                     group = ''
//                 }
//             })
//              if(group !== ''){
//                     math_result.push(group)
//                     group = ''
//                 }
//             console.log(math_result)
//         }
//             else {
//             input_array.push(target.innerHTML)
//         }

        

// //         INPUT_CONTAINER.innerHTML = input_array.join(' ')
// //     }
    
// }   




//     if(typeof item === 'number') {
            //         
            //         console.log(math_result)
            //     }
            //     else {
            //         math_result = `${math_result} ${item}`
            //         console.log(math_result)
            //     }
            // })
            // for(const item of input_array) { 
            //     if(typeof item === "number") {
            //         group.push(item)
            //     }else{
            //         result.push(group)
            //         result.push(item)
            //         group = [];
                // }
            // }
            // if (group.length>0){
            //     result.push(group);
            // }
            // result.forEach((item) => {
            //     let math_result
            //     if(Array.isArray(item)){
                
            //     }
            //     else{
            //         console.log(item)
            //     }
            // })  ВОЗМОЖНОЕ РЕШЕНИЕ