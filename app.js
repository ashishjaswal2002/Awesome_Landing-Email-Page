// Using GSAP
let t1 = new gsap.timeline({defaults:{ease:CredentialsContainer.easeOut}})
let cta = document.querySelector('.cta');
const player =  document.querySelector('.lottie')
const big = document.querySelector('.done');
// t1.to('.seq',{y:40,opacity:0,stagger:.05})
// t1.to('form-container',{opacity:0},"-=.4")
// t1.to('h2',{opacity:1,duration:2,y:20},"+=1")

cta.addEventListener('click',(event)=>{
     big.setAttribute('style','display:block;')
    t1.to('.seq',{y:40,opacity:0,stagger:.05})
t1.to('form-container',{opacity:0},"-=.4")
t1.to('h2',{opacity:1,duration:2,y:20},"+=1")
    event.preventDefault();
    t1.play()
    setTimeout(()=>{
        player.play()
    },800)
})