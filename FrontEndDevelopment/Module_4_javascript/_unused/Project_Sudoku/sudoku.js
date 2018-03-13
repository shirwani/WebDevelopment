var grid

function init(){
    grid = new Grid()

    f(1,1,9)
    f(1,3,5)
    f(1,5,8)
    f(1,8,7)
    f(1,9,3)

    f(2,1,3)
    f(2,4,1)
    f(2,5,2)
    f(2,6,7)
    f(2,8,6)
    f(2,9,9)

    f(3,2,7)
    f(3,9,8)

    f(4,3,2)
    f(4,6,8)
    f(4,9,1)

    f(5,4,6)
    f(5,5,9)
    f(5,6,2)

    f(6,1,8)
    f(6,4,5)
    f(6,7,3)

    f(7,1,6)
    f(7,8,5)

    f(8,1,2)
    f(8,2,9)
    f(8,4,8)
    f(8,5,1)
    f(8,6,5)
    f(8,9,6)

    f(9,1,5)
    f(9,2,3)
    f(9,5,6)
    f(9,7,9)
    f(9,9,2)

    grid.show()

    d(1,6)

    d(2,7)
    d(2,2)
    d(2,3)

    d(8,3)
    d(8,7)
    d(8,8)

    grid.show()

}

/*** Determine possible values ***/
function d(r,c){
    var n = []

    // Check row
    for(var j=1; j<=9; j++){
        var v = grid.getCellVal(r + ',' + j)
        if(v != '' && n.indexOf(v) == -1){
            n.push(v)
        }
    }
    print('<br>' + n + '<br>')

    // Check col
    for(var i=1; i<=9; i++){
        var v = grid.getCellVal(i + ',' + c)
        if(v != '' && n.indexOf(v) == -1){
            n.push(v)
        }
    }
    print('<br>' + n + '<br>')

    // Check box
    var x = 0
    var y = 0
    if(r <= 3){
        x = 1
    }else if(r <= 6){
        x = 4
    }else{
        x = 7
    }
    if(c <= 3){
        y = 1
    }else if(c <= 6){
        y = 4
    }else{
        y = 7
    }
    for(var i=x; i<=x+2; i++){
        for(var j=y; j<=y+2; j++){
            var v = grid.getCellVal(i + ',' + j)
            if(v != '' && n.indexOf(v) == -1){
                n.push(v)
            }
        }
    }
    print('<br>' + n + '<br>')

    // Possibilities
    var p = []
    for(var i=1; i<=9; i++){
        if(n.indexOf(i) == -1){
            p.push(i)
        }
    }

    print('<br>' + p + '<br>')

    document.getElementById(r + ',' + c).style.backgroundColor = "yellow"
    document.getElementById(r + ',' + c).innerHTML = p
    grid.setCellVal(r + ',' + c, (p))


}

function f(r,c,v){
    var id = r + ',' + c
    grid.setCellVal((r + ',' + c), (v))
}

/*** Class Grid ***/
function Grid(){
    this.map = new Array()

    print("<table class=major>")
    for(var i=0; i<=6; i=i+3){
        print("<tr>")
        for(var j=0; j<=6; j=j+3){
            print("<td>")
                print("<table class=grid>")
                for(var x=1; x<=3; x++){
                    print("<tr>")
                    for(y=1; y<=3; y++){
                        var id = (i + x) + ',' + (j + y)
                        var cell = new Cell(id)
                        this.map.push(cell)
                        var val = cell.val
                        print("<td class=grid id='"+id+"'>("+id+")</td>")
                    }
                    print("</tr>")
                }
                print("</table>")
            print("</td>")
        }
        print("</tr>")
    }
    print("</table>")

    /*** getCell() ***/
    this.getCell = function(id){
        for(var i=0; i<this.map.length; i++){
            if(this.map[i].id == id){
                return(this.map[i])
            }
        }
    }

    /*** getCellVal() ***/
    this.getCellVal = function(id){
        return this.getCell(id).val
    }

    /*** setCellVal() ***/
    this.setCellVal = function(id,val){
        this.getCell(id).setVal(val)
        document.getElementById(id).innerHTML = val
    }

    this.show = function(){
        print("-clear")
        print("<table class=major>")
        for(var i=0; i<=6; i=i+3){
            print("<tr>")
            for(var j=0; j<=6; j=j+3){
                print("<td>")
                    print("<table class=grid>")
                    for(var x=1; x<=3; x++){
                        print("<tr>")
                        for(y=1; y<=3; y++){
                            var id = (i + x) + ',' + (j + y)
                            var val = this.getCell(id).val
                            if(val != []){
                                print("<td class=grid id='"+id+"'>"+val+' ['+val.length+"]</td>")
                                if(val.length > 1){
                                    document.getElementById(id).style.backgroundColor = "yellow"
                                }
                            }else{
                                print("<td class=grid id='"+id+"'></td>")
                            }
                        }
                        print("</tr>")
                    }
                    print("</table>")
                print("</td>")
            }
            print("</tr>")
        }
        print("</table>")
        print("<br><br>")
    }
}

/*** class Cell ***/
function Cell(id){
    this.id = id
    this.val = []

    this.setVal = function(val){
        this.val.push(val)
    }
}

