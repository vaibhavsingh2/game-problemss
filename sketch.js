const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;
const Constraint = Matter.Constraint;

var engine,world;
var ground;

var ball,aimer,slingshot;

function setup(){
    var canvas = createCanvas(400,400);
  
engine = Engine.create();
ball=new Ball(210,320,10,10);
aimer=createSprite(210,340,10,10);
slingshot=new SlingShot(ball.body,{x:200,y:200});
t1=createSprite(200,50,10,10);
t2=createSprite(215,50,10,10);
t3=createSprite(230,50,10,10);
t4=createSprite(245,50,10,10);
t5=createSprite(260,50,10,10);
t6=createSprite(275,50,10,10);
t7=createSprite(290,50,10,10);
t8=createSprite(305,50,10,10);
t9=createSprite(320,50,10,10);
t10=createSprite(335,50,10,10);
t11=createSprite(350,50,10,10);
t12=createSprite(365,50,10,10);
t13=createSprite(380,50,10,10);
t14=createSprite(395,50,10,10);
t15=createSprite(185,50,10,10);
t16=createSprite(170,50,10,10);
t17=createSprite(155,50,10,10);
t18=createSprite(140,50,10,10);
t19=createSprite(125,50,10,10);
t20=createSprite(110,50,10,10);
t21=createSprite(95,50,10,10);
t22=createSprite(80,50,10,10);
t23=createSprite(65,50,10,10);
t24=createSprite(50,50,10,10);
t25=createSprite(35,50,10,10);
t26=createSprite(20,50,10,10);
t27=createSprite(5,50,10,10);
t28=createSprite(200,65,10,10);
t29=createSprite(215,65,10,10);
t30=createSprite(230,65,10,10);
t31=createSprite(245,65,10,10);
t32=createSprite(260,65,10,10);
t33=createSprite(275,65,10,10);
t34=createSprite(290,65,10,10);
t35=createSprite(305,65,10,10);
t36=createSprite(320,65,10,10);
t37=createSprite(335,65,10,10);
t38=createSprite(350,65,10,10);
t39=createSprite(365,65,10,10);
t40=createSprite(380,65,10,10);
t41=createSprite(395,65,10,10);
t42=createSprite(185,65,10,10);
t43=createSprite(170,65,10,10);
t44=createSprite(155,65,10,10);
t45=createSprite(140,65,10,10);
t46=createSprite(125,65,10,10);
t47=createSprite(110,65,10,10);
t48=createSprite(95,65,10,10);
t49=createSprite(80,65,10,10);
t50=createSprite(65,65,10,10);
t51=createSprite(50,65,10,10);
t52=createSprite(35,65,10,10);
t53=createSprite(20,65,10,10);
t54=createSprite(5,65,10,10);


}

function draw(){
    background(0);
    rectMode(CENTER);

    Engine.update(engine);
    rectMode(CENTER);
    t1.display();
    ball.display();
   // aimer.display();
    t2.display();
    t3.display();
    t4.display();
    t5.display();
    t6.display();
    t7.display();
    t8.display();
    t9.display();
    t10.display();
    t11.display();
    t12.display();
    t13.display();
    t14.display();
    t15.display();
    t16.display();
    t17.display();
    t18.display();
    t19.display();
    t20.display();
    t21.display();
    t22.display();
    t23.display();
    t24.display();
    t25.display();
    t26.display();
    t27.display();
    t28.display();
    t29.display();
    t30.display();
    t31.display();
    t32.display();
    t33.display();
    t34.display();
    t35.display();
    t36.display();
    t37.display();
    t38.display();
    t39.display();
    t40.display();
    t41.display();
    t42.display();
    t43.display();
    t44.display();
    t45.display();
    t46.display();
    t47.display();
    t48.display();
    t49.display();
    t50.display();
    t51.display();
    t52.display();
    t53.display();
    t54.display();
    //slingshot.display();
    if (t1.bounceOff(ball)) {
        t1.X=0;
        t1.y=-5;
        t1.velocityX=0;
        t1.velocityY=0;
    }
    if (t2.bounceOff(ball)) {
        t2.X=0;
        t2.y=-5;
        t2.velocityX=0;
        t2.velocityY=0;
    }
    if (t3.bounceOff(ball)) {
        t3.X=0;
        t3.y=-5;
        t3.velocityX=0;
        t3.velocityY=0;
    }
    if (t4.bounceOff(ball)) {
        t4.X=0;
        t4.y=-5;
        t4.velocityX=0;
        t4.velocityY=0;
    }
    if (t5.bounceOff(ball)) {
        t5.X=0;
        t5.y=-5;
        t5.velocityX=0;
        t5.velocityY=0;
    }
    if (t6.bounceOff(ball)) {
        t6.X=0;
        t6.y=-5;
        t6.velocityX=0;
        t6.velocityY=0;
    }
    
    if (t7.bounceOff(ball)) {
        t7.X=0;
        t7.y=-5;
        t7.velocityX=0;
        t7.velocityY=0;
    }
    if (t8.bounceOff(ball)) {
        t8.X=0;
        t8.y=-5;
        t8.velocityX=0;
        t8.velocityY=0;
    }
    
    if (t9.bounceOff(ball)) {
        t9.X=0;
        t9.y=-5;
        t9.velocityX=0;
        t9.velocityY=0;
    }
    if (t10.bounceOff(ball)) {
        t10.X=0;
        t10.y=-5;
        t10.velocityX=0;
        t10.velocityY=0;
    }
    if (t11.bounceOff(ball)) {
        t11.X=0;
        t11.y=-5;
        t11.velocityX=0;
        t11.velocityY=0;
    }
    if (t12.bounceOff(ball)) {
        t12.X=0;
        t12.y=-5;
        t12.velocityX=0;
        t12.velocityY=0;
    }
    if (t13.bounceOff(ball)) {
        t13.X=0;
        t13.y=-5;
        t13.velocityX=0;
        t13.velocityY=0;
    }
    if (t14.bounceOff(ball)) {
        t14.X=0;
        t14.y=-5;
        t14.velocityX=0;
        t14.velocityY=0;
    }
    if (t15.bounceOff(ball)) {
        t15.X=0;
        t15.y=-5;
        t15.velocityX=0;
        t15.velocityY=0;
    }
    if (t16.bounceOff(ball)) {
        t16.X=0;
        t16.y=-5;
        t16.velocityX=0;
        t16.velocityY=0;
    }
    if (t17.bounceOff(ball)) {
        t17.X=0;
        t17.y=-5;
        t17.velocityX=0;
        t17.velocityY=0;
    }
    if (t18.bounceOff(ball)) {
        t18.X=0;
        t18.y=-5;
        t18.velocityX=0;
        t18.velocityY=0;
    }
    if (t19.bounceOff(ball)) {
        t19.X=0;
        t19.y=-5;
        t19.velocityX=0;
        t19.velocityY=0;
    }
    if (t20.bounceOff(ball)) {
        t20.X=0;
        t20.y=-5;
        t20.velocityX=0;
        t20.velocityY=0;
    }
    if (t21.bounceOff(ball)) {
        t21.X=0;
        t21.y=-5;
        t21.velocityX=0;
        t21.velocityY=0;
    }
    if (t22.bounceOff(ball)) {
        t22.X=0;
        t22.y=-5;
        t22.velocityX=0;
        t22.velocityY=0;
    }
    if (t23.bounceOff(ball)) {
        t23.X=0;
        t23.y=-5;
        t23.velocityX=0;
        t23.velocityY=0;
    }
    if (t24.bounceOff(ball)) {
        t24.X=0;
        t24.y=-5;
        t24.velocityX=0;
        t24.velocityY=0;
    }
    if (t25.bounceOff(ball)) {
        t25.X=0;
        t25.y=-5;
        t25.velocityX=0;
        t25.velocityY=0;
    }
    if (t26.bounceOff(ball)) {
        t26.X=0;
        t26.y=-5;
        t26.velocityX=0;
        t26.velocityY=0;
    }
    if (t27.bounceOff(ball)) {
        t27.X=0;
        t27.y=-5;
        t27.velocityX=0;
        t27.velocityY=0;
    }
    if (t28.bounceOff(ball)) {
        t28.X=0;
        t28.y=-5;
        t28.velocityX=0;
        t28.velocityY=0;
    }
    if (t29.bounceOff(ball)) {
        t29.X=0;
        t29.y=-5;
        t29.velocityX=0;
        t29.velocityY=0;
    }
    if (t30.bounceOff(ball)) {
        t30.X=0;
        t30.y=-5;
        t30.velocityX=0;
        t30.velocityY=0;
    }
    if (t31.bounceOff(ball)) {
        t31.X=0;
        t31.y=-5;
        t31.velocityX=0;
        t31.velocityY=0;
    }
    if (t32.bounceOff(ball)) {
        t32.X=0;
        t32.y=-5;
        t32.velocityX=0;
        t32.velocityY=0;
    }
    if (t33.bounceOff(ball)) {
        t33.X=0;
        t33.y=-5;
        t33.velocityX=0;
        t33.velocityY=0;
    }
    if (t34.bounceOff(ball)) {
        t34.X=0;
        t34.y=-5;
        t34.velocityX=0;
        t34.velocityY=0;
    }
    if (t35.bounceOff(ball)) {
        t35.X=0;
        t35.y=-5;
        t35.velocityX=0;
        t35.velocityY=0;
    }
    if (t36.bounceOff(ball)) {
        t36.X=0;
        t36.y=-5;
        t36.velocityX=0;
        t36.velocityY=0;
    }
    if (t37.bounceOff(ball)) {
        t37.X=0;
        t37.y=-5;
        t37.velocityX=0;
        t37.velocityY=0;
    }
    if (t38.bounceOff(ball)) {
        t38.X=0;
        t38.y=-5;
        t38.velocityX=0;
        t38.velocityY=0;
    }
    if (t39.bounceOff(ball)) {
        t39.X=0;
        t39.y=-5;
        t39.velocityX=0;
        t39.velocityY=0;
    }
    if (t40.bounceOff(ball)) {
        t40.X=0;
        t40.y=-5;
        t40.velocityX=0;
        t40.velocityY=0;
    }
    if (t41.bounceOff(ball)) {
        t41.X=0;
        t41.y=-5;
        t41.velocityX=0;
        t41.velocityY=0;
    }
    if (t42.bounceOff(ball)) {
        t42.X=0;
        t42.y=-5;
        t42.velocityX=0;
        t42.velocityY=0;
    }
    if (t43.bounceOff(ball)) {
        t43.X=0;
        t43.y=-5;
        t43.velocityX=0;
        t43.velocityY=0;
    }
    if (t44.bounceOff(ball)) {
        t44.X=0;
        t44.y=-5;
        t44.velocityX=0;
        t44.velocityY=0;
    }
    if (t45.bounceOff(ball)) {
        t45.X=0;
        t45.y=-5;
        t45.velocityX=0;
        t45.velocityY=0;
    }
    if (t46.bounceOff(ball)) {
        t46.X=0;
        t46.y=-5;
        t46.velocityX=0;
        t46.velocityY=0;
    }
    if (t47.bounceOff(ball)) {
        t47.X=0;
        t47.y=-5;
        t47.velocityX=0;
        t47.velocityY=0;
    }
    if (t48.bounceOff(ball)) {
        t48.X=0;
        t48.y=-5;
        t48.velocityX=0;
        t48.velocityY=0;
    }
    if (t49.bounceOff(ball)) {
        t49.X=0;
        t49.y=-5;
        t49.velocityX=0;
        t49.velocityY=0;
    }
    if (t50.bounceOff(ball)) {
        t50.X=0;
        t50.y=-5;
        t50.velocityX=0;
        t50.velocityY=0;
    }
    if (t51.bounceOff(ball)) {
        t51.X=0;
        t51.y=-5;
        t51.velocityX=0;
        t51.velocityY=0;
    }
    if (t52.bounceOff(ball)) {
        t52.X=0;
        t52.y=-5;
        t52.velocityX=0;
        t52.velocityY=0;
    }
    if (t53.bounceOff(ball)) {
        t53.X=0;
        t53.y=-5;
        t53.velocityX=0;
        t53.velocityY=0;
    }
    if (t54.bounceOff(ball)) {
        t54.X=0;
        t54.y=-5;
        t54.velocityX=0;
        t54.velocityY=0;
    }


}
function mouseDragged(){
    Matter.Body.setPosition(ball.body, {x: mouseX , y: mouseY});
}


//function mouseReleased(){
  //  ball.fly();
//}