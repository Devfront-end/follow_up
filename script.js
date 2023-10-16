// script.js

document.addEventListener("DOMContentLoaded", function () {
    // Fonction pour calculer le nombre d'heures consacrées
    function calculateHoursSpent() {
      const startTimeInput = document.getElementById("startTime");
      const endTimeInput = document.getElementById("endTime");
      const hoursSpentInput = document.getElementById("hoursSpent");
  
      const startTime = new Date(startTimeInput.value);
      const endTime = new Date(endTimeInput.value);
  
      if (!isNaN(startTime) && !isNaN(endTime)) {
        const timeDiff = endTime - startTime;
        const hoursSpent = timeDiff / (1000 * 3600); // Convertir de millisecondes à heures
        hoursSpentInput.value = hoursSpent.toFixed(2); // Afficher avec 2 décimales
      }
    }
  
    // Associez la fonction de calcul aux champs d'heure de début et d'heure de fin
    document
      .getElementById("startTime")
      .addEventListener("input", calculateHoursSpent);
    document
      .getElementById("endTime")
      .addEventListener("input", calculateHoursSpent);
  
    // Fonction pour ajouter un enregistrement de suivi
    function addLearningRecord() {
      // Obtenez les autres informations du formulaire
      const module = document.getElementById("module").value;
      const priority = document.getElementById("priority").value;
      const status = document.getElementById("status").value;
  
      // Créez un nouvel élément de liste pour afficher l'enregistrement
      const listItem = document.createElement("li");
      listItem.innerHTML = `
              <strong>Module:</strong> ${module}<br>
              <strong>Début:</strong> ${
                document.getElementById("startTime").value
              }<br>
              <strong>Fin:</strong> ${
                document.getElementById("endTime").value
              }<br>
              <strong>Heures Consacrées:</strong> ${
                document.getElementById("hoursSpent").value
              }<br>
              <strong>Niveau à Atteindre:</strong> ${
                document.getElementById("targetLevel").value
              }<br>
              <strong>Priorité:</strong> ${priority}<br>
              <strong>Statut:</strong> ${status}
          `;
  
      // Ajoute l'élément de liste à la liste des enregistrements
      document.getElementById("recordList").appendChild(listItem);
  
      // Réinitialise le formulaire
      document.getElementById("learningForm").reset();
    }
  
    // Associez la fonction d'ajout d'enregistrement au bouton "Ajouter"
    document
      .getElementById("addButton")
      .addEventListener("click", addLearningRecord);
  });
  