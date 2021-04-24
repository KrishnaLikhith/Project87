var canvas = new fabric.Canvas('myCanvas');
player_width = 30;
player_height = 30;
player_x = 10;
player_y = 10;
var player_object = "";
var image_object = "";
function player_update() {
    fabric.Image.fromURL("player.png", function (Img) {
        player_object = Img;
        player_object.scaleToWidth(150);
        player_object.scaleToHeight(140);
        player_object.set({ top: player_y, left: player_x });
        canvas.add(player_object);
    });
}
function new_image(get_image) {
    fabric.Image.fromURL(get_image, function (Img) {
        image_object = Img;

        image_object.scaleToWidth(block_image_width);
        image_object.scaleToHeight(block_image_height);
        image_object.set({
            top: player_y,
            left: player_x
        });
        canvas.add(image_object);
    });
} 
window.addEventListener("keydown", my_keydown);
function my_keydown(e){
    keyPressed = e.keyCode;
    console.log(keyPressed);
    if(keyPressed == "70"){
        new_image("ironman_face.png");
        console.log("F");
    }
    if(keyPressed == "66"){
        new_image("ironman_body.png");
        console.log("B");
    }
    if(keyPressed == "75"){
        new_image("ironman_left_hand.png");
        console.log("K");
    }
    if(keyPressed == "76"){
        new_image("ironman_legs.png");
        console.log("L");
    }
    if(keyPressed == "77"){
        new_image("ironman_right_hand.png");
        console.log("M");
    }
    if(keyPressed == "67"){
        new_image("captain_america_left_hand.png");
        console.log("C");
    }
    if(keyPressed == "72"){
        new_image("hulk_face.png");
        console.log("H");
    }
    if(keyPressed == "68"){
        new_image("hulk_left_hand.png");
        console.log("D");
    }
    if(keyPressed == "65"){
        new_image("hulk_legs.png");
        console.log("A");
    }
    if(keyPressed == "69"){
        new_image("hulk_right_hand.png");
        console.log("E");
    }
    if(keyPressed == "71"){
        new_image("hulkd_body.png");
        console.log("G");
    }
    if(keyPressed == "81"){
        new_image("spiderman_body.png");
        console.log("Q");
    }
    if(keyPressed == "87"){
        new_image("spiderman_face.png");
        console.log("W");
    }
    if(keyPressed == "82"){
        new_image("spiderman_left_hand.png");
        console.log("R");
    }
    if(keyPressed == "84"){
        new_image("spiderman_right_hand.png");
        console.log("T");
    }
    if(keyPressed == "89"){
        new_image("spiderman_legs.png");
        console.log("Y");
    }
    if(keyPressed == "88"){
        new_image("thor_face.png");
        console.log("X");
    }
    if(keyPressed == "74"){
        new_image("thor_left_hand.png");
        console.log("J");
    }
    if(keyPressed == "78"){
        new_image("thor_right_hand.png");
        console.log("N");
    }
}
function how(){
    document.getElementById("pic").style.display = "block";
}