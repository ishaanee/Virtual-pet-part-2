class Food {
    constructor(){
    this.foodStock=0;
    this.lastFed;
    this.image=loadImage('Milk.png');
    }
    bedroom(){
      background(bedroom,550,500);
    }
    
    garden(){
      background(garden,550,500);
    }
    
    washroom(){
      background(washroom,550,500);
    }
    
    
   
    readstate ()
     {
        readState=database.ref('gamestate');
         readState.on("value",function(data){
            gamestate=data.val()

         })
     }
     updateFoodStock(foodStock){
      this.foodStock=foodStock;
      foodStock=database.ref('Food');
    foodStock.on("value",readStock);
  
     }
  
      getFedTime(lastFed){
       this.lastFed=lastFed;
       fedTime=database.ref('FeedTime');
    fedTime.on("value",function(data){
      lastFed=data.val();
    });
     }
  
      deductFood(){
       if(this.foodStock>0){
        this.foodStock=this.foodStock-1;
       }
      }
  
       getFoodStock(){
        return this.foodStock;
      }

     
     
     

    display(){
      var x=80,y=100;
      
      imageMode(CENTER);
      image(this.image,720,220,70,70);
      
      if(this.foodStock!=0){
        for(var i=0;i<this.foodStock;i++){
          if(i%10==0){
            x=80;
            y=y+50;
          }
          image(this.image,x,y,50,50);
          x=x+30;
        }
      }
    }
}
