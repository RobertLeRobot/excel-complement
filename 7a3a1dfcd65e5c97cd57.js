function openSharePointFile(e){console.log("✅ Bouton cliqué : tentative d'ouverture du fichier SharePoint.");var o="ms-excel:ofe|u|https://actuelia.sharepoint.com/:x:/r/sites/Planning/_layouts/15/Doc.aspx?sourcedoc=%7B9DF20F37-0AE5-4AB1-8EA3-8EE921FF7432%7D&file=Planning%20-%20v11.xlsx&action=default&mobileredirect=true";try{console.log("🔗 Ouverture du fichier SharePoint :",o),window.location.href=o}catch(e){console.error("❌ Erreur lors de l'ouverture du fichier SharePoint :",e)}setTimeout((function(){Office.context.ui.displayDialogAsync(window.location.origin+"/taskpane.html",{height:50,width:30},(function(e){e.status!==Office.AsyncResultStatus.Succeeded&&console.error("❌ Erreur lors de l'ouverture du taskpane :",e.error)}))}),5e3),e&&e.completed()}Office.onReady((function(){})),Office.actions.associate("openSharePointFile",openSharePointFile);