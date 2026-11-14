// Waves hero animation: анімований WebP з прозорістю накладається на слово "waves"
(function () {
  var span = document.querySelector('.text-span-5');
  if (!span) return;

  var img = new Image();
  img.alt = '';
  img.className = 'waves-media';
  img.setAttribute('aria-hidden', 'true');
  img.decoding = 'async';
  // якщо файл не завантажився — повертаємо видимий звичайний текст
  img.onerror = function () { span.classList.add('waves-failed'); };
  img.src = 'assets/waves.webp';          // легша версія: 'assets/waves_light.webp'

  span.appendChild(img);
})();