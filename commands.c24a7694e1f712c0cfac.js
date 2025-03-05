Office.onReady((function(e) {
    if(e.host === Office.HostType.Excel) {
      var n = Office.context.document.url;
      console.log("URL du document :",n),n && -1 !== n.indexOf("Planning-v11.xlsx") ? (console.log("C'est le bon fichier Excel. Ouverture du taskpane..."),Office.addin.showAsTaskpane().then((function() {
      console.log("Taskpane affiché avec succès.")}
      )).catch((function(e) {
      console.error("Erreur lors de l'ouverture du taskpane :",e)}
    ))) : console.log("Ce n'est pas le fichier attendu. Le taskpane ne sera pas affiché.")}
  else console.log("Ce complément est uniquement pris en charge dans Excel.")}
  )),Office.actions.associate("openSharePointFile",(function(e) {
    console.log("✅ Bouton cliqué : tentative d'ouverture du fichier SharePoint.");
    var n = "ms-excel:ofe|u|https://actuelia.sharepoint.com/:x:/r/sites/Planning/_layouts/15/Doc.aspx?sourcedoc=%7B9DF20F37-0AE5-4AB1-8EA3-8EE921FF7432%7D&file=Planning%20-%20v11.xlsx&action=default&mobileredirect=true";
    try {
      console.log("🔗 Ouverture du fichier SharePoint :",n),window.location.href = n
    }
    catch(e) {
    console.error("❌ Erreur lors de l'ouverture du fichier SharePoint :",e)}
  Office.addin && Office.addin.showAsTaskpane ? Office.addin.showAsTaskpane() : console.warn("Office.addin.showAsTaskpane n'est pas disponible dans cet environnement."),e && e.completed()}
  ));