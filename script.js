window.onload = function(e) {

    let art = document.getElementById('art');

    function createPixel(){
        let pixel = document.createElement('div');
        pixel.className = 'pixel';
        return pixel;
    }

    function createRow(){
        let row = document.createElement('div');
        row.className = 'row';
        return row;
    }

    let n = 20, m = 40;

    for(let i = 0; i < n; i++){
        let row = createRow();
        
        for(let j = 0; j < m; j++){
            row.appendChild(createPixel());
        }

        art.appendChild(row);
    }

    let penColour;

    function setPixelColour(pixel)
    {
        pixel.style.backgroundColor = penColour;
    }

    function setIndicatorColour()
    {
        let indicator = document.getElementById('indicator');
        indicator.style.backgroundColor = penColour;
    }

    function setPenColour(color){
        penColour = color;
        setIndicatorColour();
    }

    setPenColour('black');

    let drawFlag = false;

    Array.from(document.getElementsByClassName('pixel')).forEach(element => {
        element.addEventListener('mousedown', function(){
            setPixelColour(element);
            drawFlag = true;
        })
    });

    Array.from(document.getElementsByClassName('pixel')).forEach(element => {
        element.addEventListener('mouseenter', function(){
            if (drawFlag === true){
            setPixelColour(element);
            ;}
        })
    });

    Array.from(document.getElementsByClassName('pixel')).forEach(element => {
        element.addEventListener('mouseup', function(){
            if (drawFlag === true){
            setPixelColour(element);
            drawFlag = false;
            ;}
        })
    });

    Array.from(document.getElementsByClassName('pen')).forEach(element => {
        element.addEventListener('click', function(){
            setPenColour(element.style.backgroundColor)
        });
    });

    Array.from(document.getElementsByClassName('pixel')).forEach(element => {
        element.addEventListener('click', function(){
            setPixelColour(element);
        })
    });
    
    let picker = document.getElementById('picker');
    picker.addEventListener('change', function(e){
        setPenColour(e.target.value);
    })

}
