// Verificar el nombre ingresado (no distingue mayúsculas/minúsculas)
function checkName() {
    const input = document.getElementById("name-input").value.trim().toLowerCase();
    const errorMsg = document.getElementById("error-msg");
  
    if (input === "valerie barros") {
      document.getElementById("login-overlay").style.display = "none";
    } else {
      errorMsg.innerText = "Nombre incorrecto. No puedes entrar.";
    }
  }
  
  // Mensajes para cada una de las 10 imágenes
  const messages = [
    "Te amo con todo mi corazón.",
    "Eres la reina de mi vida, y cada día a tu lado es un regalo.",
    "Tu amor transforma mis días y me inspira a ser mejor.",
    "Cada momento contigo es una bendición.",
    "Tu sonrisa ilumina mi camino y llena mi alma de alegría.",
    "Como dijo Benedetti: 'No te rindas, aún estás a tiempo', y yo nunca me rindo contigo.",
    "Eres mi sueño hecho realidad, la razón de mi felicidad.",
    "A tu lado, encuentro la paz y el amor que siempre anhelé.",
    "Gracias por ser mi refugio, mi inspiración y mi amor eterno.",
    "Eres el amor que me completa y me hace creer en los milagros."
  ];
  
  // Función para mostrar el mensaje correspondiente
  function showMessage(index) {
    document.getElementById("message-text").innerText = messages[index];
    document.getElementById("message-box").classList.remove("hidden");
  }
  
  // Función para cerrar el mensaje
  function closeMessage() {
    document.getElementById("message-box").classList.add("hidden");
  }
  