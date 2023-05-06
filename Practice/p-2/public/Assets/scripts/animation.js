function MprofileAnimation(){
    const Mprofiles = document.querySelectorAll('.Mprofile');
    const profileTexts = document.querySelectorAll('.profile-text');
    const screenPosition = window.innerHeight/1.3;

    Mprofiles.forEach((Mprofile)=>{
        const position = Mprofile.getBoundingClientRect().top;
        if(position < screenPosition){
            Mprofile.classList.add('animate-Mprofile')
        }
    })

    profileTexts.forEach((profileText)=>{
        const position = profileText.getBoundingClientRect().top;
        if(position < screenPosition){
            profileText.classList.add('.animate-profile-texts')
        }
    })
}

window.addEventListener('scroll' , MprofileAnimation )