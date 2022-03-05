/*! For license information please see main.f62897dd733714a79b5c.bundle.js.LICENSE.txt */
(()=>{var t,e={787:(t,e,i)=>{"use strict";i(260);class s extends Phaser.Physics.Arcade.Sprite{constructor(t,e,i){super(t,e,i,"ball"),this.name="ball",t.add.existing(this),t.physics.add.existing(this),t.anims.create({key:"roll",frames:t.anims.generateFrameNumbers("ball",{start:0,end:11}),frameRate:24,yoyo:!1,repeat:-1}),this.play("roll"),this.scaleX=this.scale,this.scaleY=this.scale}update(){super.update}SetRandomPosition(){this.setRandomPosition()}}class r extends Phaser.Physics.Arcade.Sprite{constructor(t,e,i,s,r){super(t,e,i,"wall"),this.red=16711680,this.blue=255,this.black=0,this.name="staticWall",t.add.existing(this),t.physics.add.staticImage(this),this.scaleX=s,this.scaleY=r}update(){if(super.update,this.growth)return"updown"==this.growthDir&&this.SetSize(this.displayWidth,this.displayHeight+4.5),"leftright"==this.growthDir&&this.SetSize(this.displayWidth+4.5,this.displayHeight),!0}SetSize(t,e){this.setSize(t,e),this.setDisplaySize(t,e)}GetData(){return[this.x,this.y,this.displayWidth,this.displayHeight]}GetBounds(){return this.getBounds()}setGrowth(t){"up"==t&&(this.setOrigin(.5,1),this.growthDir="updown",this.tint=this.red),"down"==t&&(this.growthDir="updown",this.setOrigin(.5,0),this.tint=this.blue),"left"==t&&(this.growthDir="leftright",this.setOrigin(1,.5),this.tint=this.red),"right"==t&&(this.growthDir="leftright",this.setOrigin(0,.5),this.tint=this.blue)}CollideWithWall(){this.tint=this.black,this.growth=!1,this.name="grownWall"}SetColBlack(){this.CollideWithWall()}SetBounds(t){t?(this.SetSize(0,0),this.setOrigin(0,0),this.setPosition(t.x,t.y),this.SetSize(t.width,t.height)):console.log("crash caught")}}class l extends Phaser.Scene{constructor(){super({key:"MainScene"})}create(){this.devModeCheats=!1,this.screenWidth=this.cameras.main.width,this.screenHeight=this.cameras.main.height,this.growthDir="updown",this.growingWalls={red:null,blue:null},this.gridSize=32,this.lives=3,this.add.image(32,32,"heart").setDepth(10),this.livesDisp=this.add.text(54,5,this.lives,{fontFamily:'serif, Georgia, "Goudy Bookletter 1911", Times',fontSize:"52px",color:"#000000",stroke:"#ffffff",strokeThickness:4}).setDepth(10),this.arrows=this.add.image(32,80,"arrows").setDepth(10),this.input.activePointer,this.input.on("pointerup",((t,e,i)=>{t.getDistance()<70?this.clickAction(t):t.getDistanceX()>t.getDistanceY()?(this.growthDir="leftright",this.clickAction(t),this.arrows.setAngle(-90)):(this.growthDir="updown",this.clickAction(t),this.arrows.setAngle(0))})),this.PrepLevel(!0)}PrepLevel(t=!1){var e,i,s,r,l,a;t&&(null===(e=this.groupBall)||void 0===e||e.clear(!0,!0),this.CreateBalls(),this.lives=2),this.lives++,this.livesDisp.setText(this.lives),null===(i=this.scoreDisp)||void 0===i||i.destroy(),this.levelTransition=!1,t&&(this.currLevel=0),this.currLevel++,this.currLevel<50&&this.CreateBall(),null===(s=this.groupStaticWall)||void 0===s||s.clear(!0,!0),this.createStaticWalls(),this.RandomBallInit(),this.SetCollidersSameArray(null===(r=this.groupBall)||void 0===r?void 0:r.getChildren()),this.SetCollidersBetweenArray(null===(l=this.groupBall)||void 0===l?void 0:l.getChildren(),null===(a=this.groupStaticWall)||void 0===a?void 0:a.getChildren());var h=this.screenWidth/this.gridSize,o=this.screenHeight/this.gridSize;this.cache=Array.from({length:h},((t,e)=>Array.from({length:o},((t,e)=>!1)))),this.totalCells=h*o,this.cellsFilled=0}CreateBalls(){this.groupBall=this.physics.add.group({defaultKey:"ball",key:"ball",frameQuantity:1,bounceX:1,bounceY:1,mass:1,collideWorldBounds:!0,classType:s})}CreateBall(){var t;null===(t=this.groupBall)||void 0===t||t.create(this.cameras.main.width/2,0,"ball")}RandomBallInit(){var t;(null===(t=this.groupBall)||void 0===t?void 0:t.getChildren()).forEach((t=>{let e=this.devModeCheats?100:300;var i=this.GenBallSpawnPos();t.setPosition(i.x,i.y),t.setVelocity(e*(Math.random()>.5?1:-1),e*(Math.random()>.5?1:-1))}))}GenBallSpawnPos(){for(var t,e=17,i={x:0,y:0},s=0;s<50;)if(s++,i.x=Math.random()*this.screenWidth,i.x=this.Clamp(i.x,e,this.screenWidth-e),i.y=Math.random()*this.screenHeight,i.y=this.Clamp(i.y,e,this.screenHeight-e),t=this.MakeBounds(i.x-e,i.y-e,34,34),!this.CompareBoundsAny(t,this.groupStaticWall)&&!this.CompareBoundsAny(t,this.groupBall))return i;return console.log("max loops, no spawn found"),i}Clamp(t,e,i){return Math.min(Math.max(t,e),i)}StopAllBalls(){var t;(null===(t=this.groupBall)||void 0===t?void 0:t.children.entries).forEach((t=>{t.setVelocity(0,0)}))}createStaticWalls(){var t;this.groupStaticWall=this.physics.add.staticGroup({defaultKey:"staticWall",classType:r}),this.gridSize;var e=this.gridSize,i=this.screenHeight,s=this.screenWidth;this.CreateStaticWallBounds(-e,-e,e,i+32),this.CreateStaticWallBounds(s,-e,e,i+32),this.CreateStaticWallBounds(-e,-e,s+32,e),this.CreateStaticWallBounds(-e,i,s+32,e);var l=null===(t=this.groupStaticWall)||void 0===t?void 0:t.getChildren();for(let t=0;t<l.length;t++)l[t].growth=!1,l[t].name="borderWall"}createStaticWallAt(t,e,i,s){var l,a=new r(this,t,e,i,s);return null===(l=this.groupStaticWall)||void 0===l||l.add(a),a}CreateStaticWallBounds(t,e,i,s){var l,a=this.MakeBounds(t,e,i,s),h=new r(this,a.x,a.y,1,1);return null===(l=this.groupStaticWall)||void 0===l||l.add(h),h.SetBounds(a),h.SetColBlack(),h}createWallHelper(t){var e=this.createStaticWallAt(t.x,t.y,1,1);return e.growth=!0,e.name="growingWall",e}createWall(t){if(!this.growingWalls.red||"growingWall"!==this.growingWalls.red.name&&"growingWall"!==this.growingWalls.blue.name){var e=this.WallSpawnGridPoint(t);if(!this.CheckCacheFilled(e.x,e.y)){this.wallsGrown=0,this.wallDestroyed=!1;var i=this.createWallHelper(e);this.growingWalls.red=i,"updown"==this.growthDir?i.setGrowth("up"):i.setGrowth("left"),i=this.createWallHelper(e),this.growingWalls.blue=i,"updown"==this.growthDir?i.setGrowth("down"):i.setGrowth("right")}}}clickAction(t){this.levelTransition||this.createWall(t)}WallSpawnGridPoint(t){const e="updown"==this.growthDir;return{x:this.GridHelper(t.x,e),y:this.GridHelper(t.y,!e)}}NearestGridPoint(t){return{x:this.GridHelper(t.x,!1),y:this.GridHelper(t.y,!1)}}NearestGridCenterPoint(t){return{x:this.GridHelper(t.x,!0),y:this.GridHelper(t.y,!0)}}GridHelper(t,e=!1){const i=this.gridSize;var s,r=0;return e&&(r=i/2),(s=(s=i*Math.floor((t+i/2)/i))+(Math.sign(t-s)>=0?1:-1)*r)<0&&(s=0),s}AlignBoundsToGrid(t){var e=this.GridHelper(t.x),i=this.GridHelper(t.y);return this.MakeBounds(e,i,this.GridHelper(t.x+t.width)-e,this.GridHelper(t.y+t.height)-i)}SetCollidersSameArray(t){for(let e=0;e<t.length;e++){for(let i=e;i<t.length;i++)this.physics.add.collider(t[e],t[i]);t[e].body.onCollide=!0}}SetCollidersBetweenArray(t,e){for(let i=0;i<t.length;i++)for(let s=0;s<e.length;s++)this.physics.add.collider(t[i],e[s])}SetCollidersToArray(t,e){this.physics.add.collider(t,e)}SetCollidersToArrays(t,e,i){this.physics.add.collider(t,e),this.physics.add.collider(t,i)}collideListener(t,e,i,s){var r,l=!1;"growingWall"===t.name&&(r=t,l=!0),"growingWall"===e.name&&(r=e,l=!0),l&&1==r.growth&&(this.DestroyWall(r),l=!1)}DestroyWall(t,e=!0){t.destroy(),t.name="destroyedWall",this.wallsGrown=-1,this.wallDestroyed=!0,e&&this.CheckLose()}update(){try{this.trycatch()}catch(t){}}trycatch(){var t,e,i=this.growingWalls.red,s=this.growingWalls.blue;if(this.CheckGrowingWalls(i,"red")||this.CheckGrowingWalls(s,"blue")){if(this.wallDestroyed)return;var r=this.GetBoundsCombinationOf(i,s);i.SetBounds(r),s.destroy()}null===(t=this.groupStaticWall)||void 0===t||t.children.entries.forEach((t=>{t.update()})),null===(e=this.groupStaticWall)||void 0===e||e.refresh()}CheckGrowingWalls(t,e){var i,s;if(!t)return!1;if(null==t)return!1;if(!t.growth)return!1;if("growingWall"!=t.name)return!1;let r=t.GetBounds();var l=!1;return(null===(i=this.groupBall)||void 0===i?void 0:i.children.entries).forEach((e=>{if(l)return;let i=e.getBounds();this.CompareBounds(i,r)&&(l=!0,this.collideListener(e,t,1,1))})),!l&&((null===(s=this.groupStaticWall)||void 0===s?void 0:s.children.entries).forEach((e=>{var i;if(e===t)return!1;if(e.growth)return!1;let s=e.GetBounds();this.CompareBounds(s,r)&&(this.ResolveToBlack(t),this.SetCollidersToArray(t,null===(i=this.groupBall)||void 0===i?void 0:i.getChildren()),this.wallsGrown++)})),2==this.wallsGrown||void 0)}ResolveToBlack(t){var e=t.getBounds();if(t.CollideWithWall(),t.SetBounds(this.AlignBoundsToGrid(t.getBounds())),e=t.getBounds(),this.OutsideCacheArrayLengths(e.x/this.gridSize,e.y/this.gridSize))this.DestroyWall(t,!1);else{var i=this.FillCache(t.getBounds());this.CheckExpansion(i)}}FillCache(t){const e=this.gridSize;for(var i=Array(),s=t.x;s<t.x+t.width;s+=e)for(var r=t.y;r<t.y+t.height;r+=e){if(this.OutsideCacheArrayLengths(s/e,r/e))return;this.cache[s/e][r/e]=!0,this.cellsFilled++,i.push({x:s/e,y:r/e})}return this.CheckLevelWin(),i}CheckCacheFilled(t,e){return t=Math.floor(t/this.gridSize),e=Math.floor(e/this.gridSize),!this.OutsideCacheArrayLengths(t,e)&&this.cache[t][e]}OutsideCacheArrayLengths(t,e){return t<0||e<0||t>=this.cache.length||e>=this.cache[0].length}CheckExpansion(t){var e,i=this.cache.map((t=>t.slice()));[[0,1],[0,-1],[1,0],[-1,0]].forEach((s=>{t.forEach((t=>{var r={x:t.x+s[0],y:t.y+s[1]};if(e={minx:r.x,miny:r.y,maxx:r.x,maxy:r.y},this.FloodFill(this.cache,i,r.x,r.y,e),e.minx!=e.maxx||e.miny!=e.maxy){const t=this.gridSize;e.minx*=t,e.miny*=t,e.maxx*=t,e.maxy*=t;var l=this.MakeBounds(e.minx,e.miny,e.maxx-e.minx+t,e.maxy-e.miny+t);this.CompareBoundsAny(l,this.groupBall)||(this.CreateStaticWallBounds(l.x,l.y,l.width,l.height),this.FillCache(l))}}))}))}FloodFill(t,e,i,s,r){i<0||s<0||i>=t.length||s>=t[0].length||t[i][s]||e[i][s]||(e[i][s]=!0,r.minx=Math.min(i,r.minx),r.miny=Math.min(s,r.miny),r.maxx=Math.max(i,r.maxx),r.maxy=Math.max(s,r.maxy),this.FloodFillHelp(t,e,i,s,r))}FloodFillHelp(t,e,i,s,r,l="all"){"all"==l&&(this.FloodFill(t,e,i,s+1,r),this.FloodFill(t,e,i,s-1,r),this.FloodFill(t,e,i+1,s,r),this.FloodFill(t,e,i-1,s,r))}CacheDebug(t,e=3){var i=t;if(0==e)for(var s=0;s<i.length;s++)for(var r=0;r<i[0].length;r++)console.log(i[s][r]);if(1==e)for(s=0;s<i[0].length;s++)for(r=0;r<i.length;r++)console.log(i[r][s]);if(2==e&&console.log(this.cache),3==e){var l=Array(),a=Array();for(s=0;s<i[0].length;s++){for(l=Array(),r=0;r<i.length;r++)l.push(i[r][s]?"■":"");a.push(l)}console.log(a)}}CheckLose(){if(this.lives--,this.livesDisp.setText(this.lives),!(this.lives>0||this.lives<0||this.levelTransition)){this.levelTransition=!0,this.scoreDisp=this.add.text(12,120,"Score : "+(this.currLevel*Phaser.Math.Between(1e4,12e3)).toString(),{fontFamily:'Georgia, "Goudy Bookletter 1911", Times, serif',fontSize:"40px",color:"#000000",stroke:"#ffffff",strokeThickness:4}).setDepth(10),this.StopAllBalls();var t=this.add.image(this.screenWidth/2,this.screenHeight/2,"restart").setInteractive();t.once("pointerup",(e=>{this.PrepLevel(!0),t.destroy()}))}}CheckLevelWin(){if(!(this.cellsFilled/this.totalCells<.75||this.levelTransition)){this.levelTransition=!0,this.StopAllBalls();var t=this.add.image(this.screenWidth/2,this.screenHeight/2,"nextLevel").setInteractive();t.once("pointerup",(e=>{this.PrepLevel(),t.destroy()}))}}MakeBounds(t,e,i,s){return{x:t,y:e,width:i,height:s}}GetBoundsCombinationOf(t,e){var i=t.getBounds(),s=e.getBounds(),r=Math.min(i.x,s.x),l=Math.min(i.y,s.y),a=Math.max(i.x+i.width,s.x+s.width),h=Math.max(i.y+i.height,s.y+s.height);return this.MakeBounds(r,l,a-r,h-l)}CompareBounds(t,e,i=!1){return t&&e&&t.width&&t.height&&e.width&&e.height||console.log("bad wall spawn; caught"),i&&(console.log("comparing"),console.log(t),console.log(e),console.log(t.x<e.x+e.width&&t.x+t.width>e.x&&t.y<e.y+e.height&&t.y+t.height>e.y)),t.x<e.x+e.width&&t.x+t.width>e.x&&t.y<e.y+e.height&&t.y+t.height>e.y}CompareBoundsAny(t,e,i=!1){var s=!1;return(null==e?void 0:e.children.entries).forEach((e=>{if(s)return!0;this.CompareBounds(t,e.getBounds(),i)&&(s=!0)})),s}}class a extends Phaser.Scene{constructor(){super({key:"PreloadScene"})}preload(){this.load.image("wall","assets/img/wall.png"),this.load.spritesheet("ball","assets/img/ball.png",{frameHeight:32,frameWidth:32}),this.load.image("heart","assets/img/heart.png"),this.load.image("arrows","assets/img/arrows.png"),this.load.image("restart","assets/img/restart.png"),this.load.image("nextLevel","assets/img/nextLevel.png")}create(){this.scene.start("MainScene")}}const h={type:Phaser.AUTO,backgroundColor:"#878787",scale:{parent:"phaser-game",mode:Phaser.Scale.FIT,autoCenter:Phaser.Scale.CENTER_BOTH,width:1280,height:736},scene:[a,l],physics:{default:"arcade",arcade:{debug:!1}},pixelArt:!0};window.addEventListener("load",(()=>{new Phaser.Game(h)}))},204:()=>{console.log("%c %c %c %c %c Built using phaser-project-template %c https://github.com/yandeu/phaser-project-template","background: #ff0000","background: #ffff00","background: #00ff00","background: #00ffff","color: #fff; background: #000000;","background: none")}},i={};function s(t){var r=i[t];if(void 0!==r)return r.exports;var l=i[t]={exports:{}};return e[t].call(l.exports,l,l.exports,s),l.exports}s.m=e,t=[],s.O=(e,i,r,l)=>{if(!i){var a=1/0;for(d=0;d<t.length;d++){for(var[i,r,l]=t[d],h=!0,o=0;o<i.length;o++)(!1&l||a>=l)&&Object.keys(s.O).every((t=>s.O[t](i[o])))?i.splice(o--,1):(h=!1,l<a&&(a=l));if(h){t.splice(d--,1);var n=r();void 0!==n&&(e=n)}}return e}l=l||0;for(var d=t.length;d>0&&t[d-1][2]>l;d--)t[d]=t[d-1];t[d]=[i,r,l]},s.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),(()=>{var t={179:0};s.O.j=e=>0===t[e];var e=(e,i)=>{var r,l,[a,h,o]=i,n=0;if(a.some((e=>0!==t[e]))){for(r in h)s.o(h,r)&&(s.m[r]=h[r]);if(o)var d=o(s)}for(e&&e(i);n<a.length;n++)l=a[n],s.o(t,l)&&t[l]&&t[l][0](),t[l]=0;return s.O(d)},i=self.webpackChunkphaser_project_template=self.webpackChunkphaser_project_template||[];i.forEach(e.bind(null,0)),i.push=e.bind(null,i.push.bind(i))})(),s.O(void 0,[216],(()=>s(787)));var r=s.O(void 0,[216],(()=>s(204)));r=s.O(r)})();