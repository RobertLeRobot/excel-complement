Office.onReady((function(e){if(e.host===Office.HostType.Excel){var o=Office.context.document.url;console.log("URL du document :",o);var n=o?o.toLowerCase():"",c="planning - v11.xlsx".toLowerCase();o&&-1!==n.indexOf(c)?(console.log("C'est le bon fichier Excel. Ouverture du taskpane..."),setTimeout((function(){console.log("affichage du taskpane (delai 5sec dans Office.onReady ...)"),Office.addin.showAsTaskpane().then((function(){console.log("Taskpane affiché avec succès.")})).catch((function(e){console.error("Erreur lors de l'ouverture du taskpane :",e)}))}),5e3)):console.log("Ce n'est pas le fichier attendu. Le taskpane ne sera pas affiché.")}else console.log("Ce complément est uniquement pris en charge dans Excel.")})),Office.actions.associate("openSharePointFile",(function(e){console.log("✅ Bouton cliqué : tentative d'ouverture du fichier SharePoint.");var o="ms-excel:ofe|u|https://actuelia.sharepoint.com/:x:/r/sites/Planning/_layouts/15/Doc.aspx?sourcedoc=%7B9DF20F37-0AE5-4AB1-8EA3-8EE921FF7432%7D&file=Planning%20-%20v11.xlsx&action=default&mobileredirect=true";try{console.log("🔗 Ouverture du fichier SharePoint :",o),window.location.href=o}catch(e){console.error("❌ Erreur lors de l'ouverture du fichier SharePoint :",e)}setTimeout((function(){console.log("affichage du taskpane (delai 5sec dans openSharePointFile ...)"),Office.addin.showAsTaskpane().then((function(){console.log("Taskpane affiché avec succès.")})).catch((function(e){console.error("Erreur lors de l'ouverture du taskpane :",e)}))}),5e3),e&&e.completed()}));