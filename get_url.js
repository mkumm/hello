function getCurrentTabUrl(callback) {  
  var queryInfo = {
    active: true, 
    currentWindow: true
  };

  chrome.tabs.query(queryInfo, function(tabs) {
    var tab = tabs[0]; 
    var url = tab.url;
    callback(url);
  });
}

function renderURL(statusText) {
  document.getElementById('status').textContent = statusText;
//  document.getElementById('status').textContent = "https://www.amazon.com/Solutions-KD-Rolled-Arm-Collection-Micro-Fabric/dp/B07KN1RPBB/ref=sr_1_4?keywords=sofa&qid=1579105840&sr=8-4";
}

document.addEventListener('DOMContentLoaded', function() {
  getCurrentTabUrl(function(url) {
    renderURL(url); 
  });
});
