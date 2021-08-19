
var canvas = new fabric.Canvas('myCanvas');
 block_y=1;
 block_x=1;

block_width = 200;
block_height = 300;

var block_image= "";

function new_image(get_image)
{
	    fabric.Image.fromURL(get_image, function(Img)
		{
			block_image = Img;

			block_image.scaleToWidth(block_width);
			block_image.scaleToHeight(block_height);
			block_image.set({
			top:block_y,
			left:block_x
			});
			canvas.add(block_image);
		});
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
keyPressed = e.keyCode;

	if(keyPressed == '73') 
	{
	    block_x = 400; 
		new_image('Iron Man.png');
	    console.log("Iron Man");
	}
	if(keyPressed == '67')
	{
		block_x = 600;
		new_image('Captain America.jpg');
		console.log("Captain America");
	}
	
	if(keyPressed == '72')
	{
		block_x =800;
		new_image('Hulk.jpg');
        console.log("Hulk")
	}
	if(e.shiftKey == true && keyPressed == '72')
	{
		block_x = 1000;
		new_image('Hawkeye.jpg');
		console.log("Hawkeye");
	}
	if(keyPressed == '84')
	{
		block_x = 220;
	    new_image('Thor.jpg');
		console.log("Thor");
	}
	if(keyPressed == '66')
	{
		block_x = 0;
		new_image('Black Widow.jpg');
		console.log("Black Widow");
	}
}

