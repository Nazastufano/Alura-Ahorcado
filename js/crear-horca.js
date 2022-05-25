function dibujarHorca(parte){
    if(parte == 1){
        dibujarRecta(250,100,250,500,5,"#0A3871");
    }else if(parte == 2){
        dibujarRecta(251,99,450,100,5,"#0A3871");
    }else if(parte == 3){
        dibujarRecta(451,101,450,170,5,"#0A3871");
    }else if(parte == 4){
        dibujarCirculo(450,210,40,"#0A3871");
    }else if(parte == 5){
        dibujarRecta(450,250,450,370,5,"#0A3871");
    }else if(parte == 6){
        dibujarRecta(450, 260,400,300,5,"#0A3871");
    }else if(parte == 7){
        dibujarRecta(450, 260,500,300,5,"#0A3871");
    }else if(parte == 8){
        dibujarRecta(450, 370,400,430,5,"#0A3871");
    }else if(parte == 9){
        dibujarRecta(450, 370,500,430,5,"#0A3871");
    }
}

