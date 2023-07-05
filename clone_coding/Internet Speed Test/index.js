let startTime, endTime;
let imageSize = "";
let image = new Image();
let bitSpeed = document.getElementById('bits'),
    kbSpeed = document.getElementById('kbs'),
    mbSpeed = document.getElementById('mbs'),
    info = document.getElementById("info");

let totalBitSpeed = 0;
let totalKbSpeed = 0;
let totalMbSpeed = 0;
let numTests = 1;
let testCompleted = 0;


// Get random image form unsplash.com
let imageApi = "https://source.unsplash.com/random?topic=nature&random=" + Math.random();

// When image loads
image.onload = async function() {
  endTime = new Date().getTime(); //끝나는 시간의 시간을 가져옴.

  //Get image size
  await fetch(imageApi).then((response) => { // 이미지 도착까지 기다리고(awiat), 그후에(then) 명령실행
    imageSize = response.headers.get("content-length"); 
    // header는 HTTP의 헤더를 의미한다. 여기서 가져오는 html파일의 길이를 알 수 있다.
    // headers.get() 함수는 Response 객체의 headers 속성에서 제공되는 메소드로, 특정 헤더의 값을 반환하는 데 사용
    calculateSpeed();
  });
};

// Funtion to calculate speed
function calculateSpeed(){
totalMbSpeed  // Time taken in seconds
  let timeDuration = (endTime - startTime) / 1000;
  // Total bits
  let loadedBits = imageSize * 8;
  let speedInBts = loadedBits / timeDuration;
  let speedInKbs = speedInBts / 1024;
  let speedInMbs = speedInKbs / 1024;

  totalBitSpeed += speedInBts;
  totalKbSpeed += speedInKbs;
  totalMbSpeed += speedInMbs;

  testCompleted++;

  // If all tests completed (we get 5 image then calcualte average)
  if(testCompleted === numTests){
    let averageSpeedInBps = (totalBitSpeed / numTests).toFixed(2);
    let averageSpeedInKbps = (totalKbSpeed / numTests).toFixed(2);
    let averageSpeedInMbps = (totalMbSpeed / numTests).toFixed(2);
  
    // Display average speeds
    bitSpeed.innerHTML += `${averageSpeedInBps}`;
    kbSpeed.innerHTML += `${averageSpeedInKbps}`;
    mbSpeed.innerHTML += `${averageSpeedInMbps}`;
    info.innerHTML = "Test Completed!";
  }else{
    //Run the next test
    startTime = new Date().getTime();
    image.src = imageApi;
  }
}

// Initial function to start tests
const init = async ()=>{ // init 함수는 테스트를 시작하며 이미지 로드를 발동
  info.innerHTML = "Testing...";
  startTime = new Date().getTime();
  image.src = imageApi;
};

// Run tests when window loads
window.onload = () => {
  for (let i = 0; i < numTests; i++){
    init();
  }
};