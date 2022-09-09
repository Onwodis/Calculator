$(document).ready(function(){
    var chi=0
    var alpha=['a','b','c','d','e','f','g','h','i','j','k','l','m','n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z',"A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z",'=',';','"',"'",'[',']','@','!','~','`','$','#','&','^',',','**','//','++','----','()','..','%']
    var bag=alpha.length
    setInterval(
        function(){
            var dt=(Date.now())
            // var use=dt.toLocaleString()
            var news =new Date(dt)
            var hours=(news.getHours())
            var minutes=(news.getMinutes())
            var seconds=(news.getSeconds())
            $('#hour').html(hours)
            $('#minute').html(minutes)
            $('#second').html(seconds)
            if(hours>9){
                $('#hzero').hide()
            }
            else{
                $('#hzero').show()
            }

            if(minutes>9){
                $('#mzero').hide()
            }
            else{
                $('#mzero').show()
            }
            if(seconds>9){
                $('#szero').hide()
            }
            else{
                $('#szero').show()
            }

        },1000
    )
    $('#cats').click(function(){
        alert('hgk')
    })
    setInterval(
        function(){
            $('#space1').fadeIn(500)
            $('#space1').fadeOut(500)
            $('#sam').fadeIn(3000)
            $('#sam').fadeOut(2000)
        },1000
    )
    var numbers =document.getElementsByClassName('sack')
    for(i=0,len=numbers.length;i<len;i++)
    (function(i){
        numbers[i].addEventListener('click',function(){
            document.getElementById('rats').value +=numbers[i].innerHTML
        })
    })(i)
    setInterval(
        function(){
            var answerss=($('#rats').val())
            for(j=0;j<bag;j++){
                var w =alpha[j]
                if(answerss.includes(w)){
                    var screen=$('#rats').val()
                    var back=screen.slice(0,-1)
                    $('#rats').val(back)
                }
                if(answerss[0]==0 && answerss[1]==0){
                    var screen=$('#rats').val()
                    var back=screen.slice(0,-1)
                    $('#rats').val(back)
                }
                
            }
            var finalAnswer=(eval(answerss))
            var litem=finalAnswer.toLocaleString()

            $('#fats').val(litem)
            
            var child =litem.length
            if((child)>15){
                $('#fats').val("error!").fadeIn(700)
                $('#fats').val("error!").fadeOut(400)

            }else{
                $('#fats').val(litem)

            }
            if(finalAnswer==answerss){
                $('#fats').val("")
            }
            else{
            $('#fats').val(litem)

            }
            
            
            
            
            
        },500
    )
    $('#back').click(function(){
        var screen=$('#rats').val()
        var back=screen.slice(0,-1)
        $('#rats').val(back)
    })
    $('#calcu').keydown(function(){

        $('#rats').append()
        
    })

    $('#clear').click(function(){
        // $('#rats').val('')
        location.reload()
        // $('#fats').val('')
    })
    
    
})
