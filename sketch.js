var fundo
var chao
var player
var idle
var enemy
var enemyidle
function preload () {
fundo=loadImage("fundolegal.jpg")
idle=loadAnimation("1.png","2.png","3.png")
enemyidle=loadAnimation("enemy1.png","enemy2.png","enemy3.png")
}
function setup () {
createCanvas (1200,606)
chao=createSprite(0,600,2500,10)
chao.visible=false
player=createSprite(1000,480)
player.scale=2
player.addAnimation("idle",idle)
enemy=createSprite(90,400)
enemy.addAnimation("enemyidle",enemyidle)
enemy.scale=5
}
function draw () {
background (fundo)
drawSprites()
if(keyDown(LEFT_ARROW)){
player.x=player.x-10
}
if(keyDown(RIGHT_ARROW)){
player.x=player.x+10
}
}