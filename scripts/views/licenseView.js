const agreeCheckbox = document.getElementById('agree');
const downloadButton = document.getElementById('downloadButton');

document.addEventListener('DOMContentLoaded', function(){
    
    agreeCheckbox.addEventListener('change', function(){
        if (agreeCheckbox.checked){
            downloadButton.style.display = 'inline-block';
        } else {
            downloadButton.style.display = "none";
        }
    });
});

