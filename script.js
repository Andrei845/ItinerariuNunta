function showDetails(ora, eveniment, imgURL, mapLink) {
  Swal.fire({
    title: ora + ' - ' + eveniment,
    html: `<img src="${imgURL}" alt="${eveniment}" style="width:100%; border-radius:10px; margin-bottom:10px;">
           <br><a href="${mapLink}" target="_blank" style="color:#e07b7b; font-weight:bold;">Vezi locația pe hartă</a>`,
    showCloseButton: true,
    showConfirmButton: false,
    width: 400
  });
}