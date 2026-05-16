const name = document.getElementById('name');
const email = document.getElementById('email');
const phone = document.getElementById('phone');

if(name.value != " " || email.value != " " || phone.value != ""){
function nextStep(current, next){
    document.getElementById('step' + current).classList.remove('active');

    document.getElementById('step' + next).classList.add('active');
}

}else{
    alert("please fill in the details to continue!")
}


// copy phone number
document.getElementById(copyBtn).addEventListener('click', async () => {

    const text = document.getElementById('toCopyText').innerText;
    try{
        await navigator.clipboard.writeText(text);

        const button = document.getElementById('copyBtn');
        button.innerText = "Copied!";

        setTimeout(() =>{
            button.innerText = 'copy Text'
        }, 200)
    }catch(err) {
        console.log("failed to copy");
    }
});