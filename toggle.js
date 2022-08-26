const toggleButton = document.getElementsByClassName('toggle-button')[0]
const navBar= document.getElementsByClassName('nav-links')[0]

toggleButton.addEventListener('click', ()=>{
    navBar.classList.toggle('active')
})
// gsap.utils.toArray('.sections').forEach(section => {
    
//     const bgColor= section.getAttribute("data");
//     const color = gsap.timeline({paused:true}).to("#mainbg",{backgroundColor:bgColor,duration:1,
//         overWrite:true})
//         scrollTrigger.create({
//             trigger:section,
//             start:"top 50%",
//             onEnter:()=> color.play(),
//             onLeaveBack:()=>color.reverse(),
//         });
//     })
gsap.from(".top",{duration:1, y:"-100%" , ease:'bounce'})
gsap.from(".logo",{duration:1, opacity:0, delay:1})
gsap.from(".bar",{duration:1, opacity:0, delay:2})
// gsap.to(".sections",{duration:1, y:0,opacity:0, delay:1.5})