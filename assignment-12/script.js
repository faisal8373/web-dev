function next(){
    var source = document.getElementById('image').getAttribute('src');

    // if(source == '/images/1.jpg'){
        switch(source){
            case '/images/1.jpg':
        document.getElementById('image').setAttribute('src', '/images/2.jpg');
       
        break;
        case '/images/2.jpg':
            document.getElementById('image').setAttribute('src', '/images/3.jpg');
    

            break;
            case '/images/3.jpg':
            document.getElementById('image').setAttribute('src', '/images/4.jpg');
            
            break;
            case '/images/4.jpg':
            document.getElementById('image').setAttribute('src', '/images/1.jpg');
           
            break;

    }
    
    }
function previous(){
    var source = document.getElementById('image').getAttribute('src');

    // if(source == '/images/1.jpg'){
        switch(source){
            case '/images/4.jpg':
        document.getElementById('image').setAttribute('src', '/images/3.jpg');
        // console.log(document.getElementById('image'))
        break;
        case '/images/3.jpg':
            document.getElementById('image').setAttribute('src', '/images/2.jpg');
            break;
            case '/images/2.jpg':
            document.getElementById('image').setAttribute('src', '/images/1.jpg');
            break;
            case '/images/1.jpg':
            document.getElementById('image').setAttribute('src', '/images/4.jpg');
            break;

    }
}