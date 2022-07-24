

    let selectHeader = document.querySelectorAll
    ('.select-header');

    selectHeader.forEach(item=>{
        item.addEventListener('click',selectToogle)
    })
    console.log(selectHeader);


    let selectItem = document.querySelectorAll
    ('.select-item');
    console.log(selectItem);

    selectItem.forEach(item=>{
        item.addEventListener('click',selectChoose)
    })

    function selectToogle(){
        this.parentElement.classList.toggle('is-active');
    }

    function selectChoose(){
        let text = this.innerText;
        select = this.closest('.select'),
        curentText = this.closest('.select').querySelector('.select-current');
        curentText.innerText = text;
        select.classList.remove('is-active');
    }

selectToogle();
selectChoose();









    /* When the user clicks on the button,
    toggle between hiding and showing the dropdown content */
    function myFunction() {
        document.getElementById("myContent").classList.toggle("show");
    }

    // Close the dropdown menu if the user clicks outside of it
    window.onclick = function(event) {
        if (!event.target.matches('.but-menu')) {

            var dropdowns = document.getElementsByClassName("content-content");
            var i;
            for (i = 0; i < dropdowns.length; i++) {
                var openDropdown = dropdowns[i];
                if (openDropdown.classList.contains('show')) {
                    openDropdown.classList.remove('show');
                }
            }
        }
    }