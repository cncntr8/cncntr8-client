$(document).ready(function() {
  var socket = new WebSocket('ws://10.31.72.32:8080');

  socket.onmessage = function(event) {
    var msg = JSON.parse(event.data);
    if (msg.type === 'config') {
      var users = msg.users;
      generateBoxes(users);

      $('#classname').text(msg.className)
    } else {
      setMetrics(msg);
    }
  };
  
  setBarColor($('#average-concentration'), 50);
  setBarColor($('#average-mellowness'), 50);
});

currentMetrics = {
  concentration: {},
  mellowness: {}
};

function generateBoxes(users) {
  var usersContainer = $('#users');
  for (var i = 0; i < users.length; i++) {
    var user = users[i];
    var userBox = $('<div class="column"><div class="primary callout"><h5 class="username">Student Name</h5><p class="text">Concentration<p><div class="progress user-concentration" role="progressbar"><span class="progress-meter" style="width: 50%"><p class="progress-meter-text">50%</p></span></div><p class="text">Mellowness</p><div class="progress user-mellowness" role="progressbar"><span class="progress-meter" style="width: 50%"><p class="progress-meter-text">50%</p></span></div></div></div>');

    console.log(user)
    $('.username', userBox).text(user.fullname);
    $('.callout', userBox).prop('id', user.username);
    $('.user-concentration', userBox).prop('id', 'concentration-' + user.username);
    $('.user-mellowness', userBox).prop('id', 'mellowness-' + user.username);
    setBarColor($('.user-concentration,.user-mellowness'), 50);

    usersContainer.append(userBox);
  }
}

function setMetrics(packet) {
  var username = packet.user.username;
  var value = Math.round(packet.value * 100)
  $('#' + packet.type + '-' + username + ' .progress-meter').animate({
    width: value + '%'
  }, {queue: false});
  $('#' + packet.type + '-' + username + ' .progress-meter p').text(value + '%');

  currentMetrics[packet.type][username] = packet.value;
  setBarColor($('#' + packet.type + '-' + username), value, packet.type);
  setAverages(packet.type);
}

function setAverages(type) {
  var mean = Math.round(math.mean(_.values(currentMetrics[type]))*100);
  $('#average-' + type + ' .progress-meter p').text(mean + '%');
  $('#average-' + type + ' .progress-meter').animate({
    width: mean + '%'
  }, {queue: false});
  setBarColor($('#average-' + type), mean, type);
}

function setBarColor(bar, value, type) {
  var style = 'progress';
  if (value <= 30) {
    style += ' alert';
    
    if (type === 'concentration') {
      bar.parent().removeClass('primary').addClass('alert');
    }
  } else if (value > 30 && value <= 70) {
    style += ' warning';
    
    if (type === 'concentration') {
      bar.parent().removeClass('alert').addClass('primary');
    }
  } else if (value > 70 && value <= 100) {
    style += ' success';
    
    if (type === 'concentration') {
      bar.parent().removeClass('alert').addClass('primary');
    }
  }
  
  bar.prop('class', style);
}
