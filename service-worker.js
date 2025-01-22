self.addEventListener('push', function(event) {
  let options = {
    body: event.data.text(), // Mensagem do evento
    icon: 'icon.png',        // Ícone da notificação
    badge: 'badge.png',      // Ícone para a barra de notificação
  };

  event.waitUntil(
    self.registration.showNotification('Nova notificação!', options)
  );
});
