let container = document.querySelectorAll('.container')
let visible = false;
container.forEach((elemento,indice)=>{

    elemento.addEventListener('click',e=>{

        let subtitulos = elemento.querySelector('.subtitle')
        let paragrafos = elemento.querySelector('.explicacao')
        let seta = elemento.querySelector('.seta')
        
        if(visible){

     
            paragrafos.style.display = 'none'
            subtitulos.style.color = 'hsl(237, 12%, 33%)'
            subtitulos.style.fontWeight = '400'
            seta.style.transform = 'rotate(0deg)'
            visible = false
        }else{
            paragrafos.style.display = 'block'
            subtitulos.style.fontWeight = "700";
            subtitulos.style.color = 'hsl(238, 29%, 16%)'
            seta.style.transform = 'rotate(180deg)'
            visible = true
        }

    })

    
   

})