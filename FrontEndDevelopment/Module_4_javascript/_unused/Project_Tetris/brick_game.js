/*** Drop the brick ***/
function dropBrick(){
    game.dropBrick()
}

/*** Game class ***/
function Game(){
    this.score = 0
    this.gameover = false

    /*** End execution ***/
    this.setGameOver = function(){
        this.gameover = true
        this.showScore()
        print("<br>","score")
        print("<font class='announcement'>GAME OVER!!</font>","score")
    }

    /*** End execution ***/
    this.getGameOver = function(){
        return(this.gameover)
    }

    /*** Increment score by 1 ***/
    this.incrementScore = function(){
        this.score++
        this.showScore()
    }

    this.showScore = function(){
        print("-clear","score")
        print("<table border=0 cellpadding=10 cellspacing=1 bgcolor='#888888'>","score")
        print("<tr bgcolor=#ffeedd><td>Score: "+this.score+"</td></tr>","score")
        print("</table>","score")
    }

    /*** Return score ***/
    this.getScore = function(){
        return(this.score)
    }

    /*** Drop a brick ***/
    this.dropBrick = function(){
        var brick = new Brick(0,get_random_number(0,grid.getWidth() - 1))
        grid.map.push(brick)
        brick.show(10)
        var id = setInterval(frame, 100);

        /*** Animate ***/
        function frame(){
            brick.drop()
            move_left_right()
            if(brick.getSettled() === true){
                clearInterval(id)
                if(!game.getGameOver()){
                    dropBrick()
                }
            }
        }

        /*** Move left/right ***/
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
}

/*** Class Grid ***/
function Grid(width,height){
    this.width  = width
    this.height = height
    this.map    = new Array()

    print("-clear","grid")
    print("<table class=grid>","grid")
    for(var i=0; i<height; i++){
        print("<tr>","grid")
        var cols = new Array()
        for(var j=0; j<width; j++){
            print("<td class=grid id='"+i+","+j+"'></td>","grid")
            cols.push(0)
        }
        print("</tr>","grid")
        this.map.push(cols)
    }
    print("</table>","grid")

    /*** Get Width ***/
    this.getWidth = function(){
        return(this.width)
    }

    /*** Get Height ***/
    this.getHeight = function(){
        return(this.height)
    }

    /*** Set settled value at location ***/
    this.setMapLocation = function(x,y){
        this.map[x][y] = 1
    }

    /*** Get settled value at location ***/
    this.getMapLocation = function(x,y){
        return(this.map[x][y])
    }
}

/*** Class Brick ***/
function Brick(x,y){
    this.x        = x
    this.y        = y
    this.position = this.x+","+this.y
    this.settled  = false
    this.color    = get_random_element(['red','green','blue','yellow','purple','orange'])

    /*** Can move left? ***/
    this.canMoveLeft = function(){
        return(!this.settled && this.y > 0 && grid.getMapLocation(this.x,this.y - 1) === 0)
    }

    /*** Can move right? ***/
    this.canMoveRight = function(){
        return(!this.settled && this.y < grid.getWidth() - 1 && grid.getMapLocation(this.x,this.y + 1) === 0)
    }

    /*** Can drop? ***/
    this.canDrop = function(){
        return(!this.settled && this.x < grid.getHeight() - 1 && grid.getMapLocation(this.x+1,this.y) === 0)
    }

    /*** Drop ***/
    this.drop = function(){
        if(this.canDrop()){
            this.hide()
            this.x++
            this.position = this.x+","+this.y
            this.show()
        }else{
            this.settled = true
            grid.setMapLocation(this.x,this.y)
            game.incrementScore()
            if(this.x === 0){
                game.setGameOver()
            }
        }
    }

    /*** Move Left ***/
    this.moveLeft = function(){
        this.hide()
        if(this.canMoveLeft()){
            this.y--;
            this.position = this.x+","+this.y
        }
        this.show()
    }

    /*** Move Right ***/
    this.moveRight = function(){
        this.hide()
        if(this.canMoveRight()){
            this.y++;
            this.position = this.x+","+this.y
        }
        this.show()
    }

    /*** Get settled ***/
    this.getSettled = function(){
        return(this.settled)
    }

    /*** Show ***/
    this.show = function(){
        document.getElementById(this.position).style.backgroundColor = this.color
    }

    /*** Hide ***/
    this.hide = function(){
        document.getElementById(this.position).style.backgroundColor = 'grey'
    }
}
