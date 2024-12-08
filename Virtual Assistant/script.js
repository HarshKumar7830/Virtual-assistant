

let box = document.querySelector("box");
let btn = document.querySelector("button");

const speakFunc=(input) =>
{
    let speakInput = new SpeechSynthesisUtterance(input);
    window.speechSynthesis.speak(speakInput);
}

 window.onload = () =>{
    speakFunc("Hello sir");
    greetingFunc();
 }

const greetingFunc = () =>{
    let date =new Date();
    let hour = date.getHours();
    
    if(hour>=0 && hour< 12){
        speakFunc("Good morning sir , how can i help you !");
    }
    else if(hour>= 12 && hour< 16){
        speakFunc("Good afternoon sir , how can i help you !");
    }else{
        speakFunc("Good evening sir ,how can i help you !");
    }
}

const startVoiceInput = ()=>{
    
    if('webkitSpeechRecognition' in window)
    {
        let recognition= new webkitSpeechRecognition();
        recognition.lang = "en-IN"
        recognition.onresult=(e) =>  {
            

           let spokenText= e.results[0][0].transcript;
            
   
           handleCommands(spokenText.toLowerCase());
           
           btn.innerHTML=`<i class="fa-solid fa-microphone-lines-slash"></i>`;
        }
        recognition.start();
    }else{
        alert("your browser does not support voice input !")
    }
  
}

btn.onclick=() =>{
    
    btn.innerHTML='<i class="fa-solid fa-microphone-lines"></i>';
    startVoiceInput();
}

const handleCommands=(command)=>{
    if(command.includes("hello") || command.includes("hey") || command.includes("hi"))
    {
        speakFunc("Hello sir, How can i help you !");
    }
   else if(command.includes("what is your name") || command.includes("developed") || command.includes("hu r u") || command.includes("who are you"))
        {
            speakFunc("I am Virtual Assistance, Developed By Harsh kumar sir !");
        }
    else if(command.includes("open google") || command.includes("google"))
    {
        speakFunc("opening...google");
        window.open("https://www.google.com")
    }
    else if(command.includes("open youtube") || command.includes("youtube"))
        {
            speakFunc("opening...youtube");
            window.open("https://www.youtube.com")
        }
    else if(command.includes("open instagram") || command.includes("instagram"))
            {
                speakFunc("opening...instagram");
                window.open("https://www.instagram.com")
            }
    else if(command.includes("open facebook") || command.includes("facebook"))
    {
         speakFunc("opening...facebook");
        window.open("https://www.facebook.com")
     }
     else if(command.includes("calculator") || command.includes("cal"))
        {
             speakFunc("opening...calculator");
            window.open("calculator://");
         }  
    else if(command.includes("tell me time") || command.includes("time"))
            {
              let time = new Date().toLocaleString(undefined,{hour:'numeric',minute:'numeric'})
              speakFunc(time);
             }  
     else{
        speakFunc(`This is, what i found on internet regarding ${command} `);
        window.open(`https://www.google.com/search?q=${command}`);
     } 
}