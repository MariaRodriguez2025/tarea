//Creado con Ardora - www.webardora.net
//bajo licencia Attribution-NonCommercial-NoDerivatives 4.0 International (CC BY-NC-ND 4.0)
//para otros usos contacte con el autor
var timeAct=360; timeIni=360; timeBon=0;
var score=0; scoreMax=2; scoreInc=2; scoreDec=0
var successes=0; successesMax=1; attempts=1; attemptsMax=1;
var tiTime=false;
var tiTimeType=0;
var tiButtonTime=true;
var textButtonTime="Comenzar";
var startTime; tiSuccesses=false; tiAttempts=false; tiScore=false;
typeGame=0;
var colorBack="#FFFDFD"; colorButton="#21A52B"; colorText="#000000"; colorSele="#FF8000";
var goURLNext=false; goURLRepeat=false;tiAval=false;
var scoOk=1; scoWrong=0; scoOkDo=0; scoWrongDo=1; scoMessage=""; scoPtos=10;
var fMenssage="Verdana, Geneva, sans-serif";
var fActi="Verdana, Geneva, sans-serif";
var fEnun="Verdana, Geneva, sans-serif";
var timeOnMessage=5; messageOk=""; messageTime=""; isShowMessage=false;
var urlOk=""; urlTime="";
var goURLOk="_blank"; goURLTime="_blank"; 
var borderOk="#008000"; borderTime="#FF0000"; borderAttempts="#FF0000";borderError="#FF0000";
var imaSel=0; texSel=0;
var board=[]; var xAnswer=5; answer=[]; rows=6; cols=10; xKey=-1; yKey=-1; animationX=[]; animationY=[]; animationPosX=[]; animationPosY=[]; animationLetter=[];
var words=["Q0FCRVpB","QlJBWk8=","UElFUk5B","REVETw==","TUFOTw==","UElFUk5B","T1JFSkE=","T0pP","VcORQVM=","Qk9DQQ=="];
var c=[6,5,6,4,4,6,5,3,4,4];
var answers=[]; letters=[]; indexLetters=0; xSel=-1; ySel=-1; iLetter=-1; jLetter=-1;
var wordsGame="YWNUSVZJREFEX0FyZG9yYQ=="; wordsStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
function giveZindex(typeElement){var valueZindex=0; capas=document.getElementsByTagName(typeElement);
for (i=0;i<capas.length;i++){if (parseInt($(capas[i]).css("z-index"),10)>valueZindex){valueZindex=parseInt($(capas[i]).css("z-index"),10);}}return valueZindex;}
var numCols=10; numRows=10; sizeCell=20;
var direction=["HD","HI","VD","VI","X1D","X1I","X2D","X2I"];
var boardGame=[[".",".",".",".",".",".",".",".",".","."],[".",".",".",".",".",".",".",".",".","."],[".",".",".",".",".",".",".",".",".","."],[".",".",".",".",".",".",".",".",".","."],[".",".",".",".",".",".",".",".",".","."],[".",".",".",".",".",".",".",".",".","."],[".",".",".",".",".",".",".",".",".","."],[".",".",".",".",".",".",".",".",".","."],[".",".",".",".",".",".",".",".",".","."],[".",".",".",".",".",".",".",".",".","."]];
var solved1X=[];solved1Y=[];solved2X=[];solved2Y=[];paintSolved=["N","N","N","N","N","N","N","N","N","N"];x1=[];y1=[];x2=[];y2=[];
var fillLetter="ABCDEFGHIJKLMNÑOPQRSTUVWXYZÁÉÍÓÚÜ";
