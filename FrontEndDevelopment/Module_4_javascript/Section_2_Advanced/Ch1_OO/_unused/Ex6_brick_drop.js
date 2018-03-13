/*** Class Grid ***/
function Grid(width,height){
    this.width  = width
    this.height = height

    print("<table>")
    for(var i=0; i<height; i++){
        print("<tr>")
        for(var j=0; j<width; j++){
            print("<td id='"+i+","+j+"'></td>")
        }
        print("</tr>")
    }
    print("</table>")

    this.getWidth = function(){
        return(this.width)
    }

    this.getHeight = function(){
        return(this.height)
    }
}

/*** Class Brick ***/
function Brick(x,y){
    this.x = x
    this.y = y
    this.position = this.x+","+this.y

    this.drop = function(){
        if(this.x < grid.getHeight() - 1){
            this.hide()
            this.x++
            this.position = this.x+","+this.y
            this.show()
        }
    }

    this.moveLeft = function(){
        this.hide()
        if(this.y > 0 && this.x < grid.getHeight() - 1){
            this.y--;
            this.position = this.x+","+this.y
        }
        this.show()
    }

    this.moveRight = function(){
        this.hide()
        if(this.y < grid.getWidth() - 1 && this.x < grid.getHeight() - 1){
            this.y++;
            this.position = this.x+","+this.y
        }
        this.show()
    }

    this.show = function(){
        document.getElementById(this.position).style.backgroundColor = 'yellow'
    }

    this.hide = function(){
        document.getElementById(this.position).style.backgroundColor = 'grey'
    }
}

/*** Drop the brick ***/
function drop_brick(){
    var brick = new Brick(0,get_random_number(0,grid.getWidth() - 1))
    brick.show()
    setInterval(frame, 50);

    function frame(){
        brick.drop()
        move_left_right()
    }

    function move_left_right(){
        document.onkeydown = checkKey;
        function checkKey(e) {
            e = e || window.event;
            if(e.keyCode == '37'){
                brick.moveLeft()
            }
            else if(e.keyCode == '39'){
                brick.moveRight()
            }
        }
    }
}
