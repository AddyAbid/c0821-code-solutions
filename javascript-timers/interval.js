var $h1 = document.querySelector('h1');
$h1.textContent = '4';
function countDown() {
  if ($h1.textContent === '4') {
    $h1.textContent = '3';
  } else if ($h1.textContent === '3') {
    $h1.textContent = '2';
  } else if ($h1.textContent === '2') {
    $h1.textContent = '1';
  } else if ($h1.textContent === '1') {
    $h1.textContent = '~Earth Beeeelooowww Us~';
  }
}
setInterval(countDown, 2000);
