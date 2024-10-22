window.addEventListener('load', () => {
    if (document.querySelectorAll('.multistepform').length > 0) {
        
        let form = document.querySelector('.multistepform')
        let activeStep = form.querySelector('.step.active')
        let progress = form.querySelector('.progs-blk')
        let nextBtn = form.querySelector('.forward')
        let prevBtn = form.querySelector('.backward')

        // Progress bar
        function SetWidth(width) {
            progress.style.width = width+"%"
        }

        // go to next
        nextBtn.addEventListener('click', () => {
            if (!activeStep.classList.contains('last_item')) { 
                SetWidth(activeStep.nextElementSibling.dataset.width) 
                if (activeStep.nextElementSibling) { 
                    activeStep.nextElementSibling.classList.add('active')
                    activeStep.classList.remove('active')
                }
                form.classList.remove('firstItemShowing')
                if (activeStep.nextElementSibling.classList.contains('last_item')) {
                    form.classList.add('lastItemShowing')
                }
            } 
            activeStep = form.querySelector('.step.active') 
        })

        // Back to prev
        prevBtn.addEventListener('click', () => {

            
            if (!activeStep.classList.contains('first_item')) { 
                SetWidth(activeStep.previousElementSibling.dataset.width) 
                if (activeStep.previousElementSibling) { 
                    activeStep.previousElementSibling.classList.add('active')
                    activeStep.classList.remove('active')
                } 
                form.classList.remove('lastItemShowing')
                if (activeStep.previousElementSibling.classList.contains('first_item')) {
                    form.classList.add('firstItemShowing')
                }
            } 
            activeStep = form.querySelector('.step.active') 


        })

    }
})